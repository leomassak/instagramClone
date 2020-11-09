import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import * as S from './styles';
import LazyImage from '~/components/LazyImage/LazyImage';

export default function Feed() {

  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);

  async function getFeed(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;
  
    setLoading(true);
    const response = await fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`);

      const data = await response.json();
      const totalItems = response.headers.get('X-Total-Count');
      setTotal(Math.floor(totalItems / 5));
      setFeed(shouldRefresh ? data : [...feed, ...data]);
      setPage(page + 1);
      setLoading(false);
  }

  useEffect(() => {
    getFeed();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await getFeed(1, true);
    setRefreshing(false);
  }

  function renderFooter() {
    if(loading) {
      return (
        <S.LoadingContainer>
          <ActivityIndicator color="#000" size="small" />
        </S.LoadingContainer>
      )
    }
    return null
  }

  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({item}) => item.id));
  }, []);

  return (
    <S.FeedContainer>
      <FlatList 
        data={feed}
        onEndReached={() => getFeed()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        ListFooterComponent={renderFooter}
        keyExtractor={post => String(post.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <S.PostCard>
            <S.CardHeader>
              <S.ActorInfoContainer>
              <S.ActorAvatar source={{uri: item.author.avatar}} />
              <S.ActorName>{item.author.name}</S.ActorName>
              </S.ActorInfoContainer>
              <S.MoreButton>
                <S.MoreButtonDot>.</S.MoreButtonDot>
                <S.MoreButtonDot>.</S.MoreButtonDot>
                <S.MoreButtonDot>.</S.MoreButtonDot>
              </S.MoreButton>
            </S.CardHeader>
            <LazyImage 
              source={{uri: item.image}} 
              smallSource={item.small}
              ratio={item.aspectRatio} 
              shouldLoad={viewable.includes(item.id)}
            />
            {/* <S.PostInteractions>
              <S.LikeCommentShareContainer>
                <S.InteractionButton ><Icon /></S.InteractionButton>
                <S.InteractionButton ><Icon /></S.InteractionButton>
                <S.InteractionButton ><Icon /></S.InteractionButton>
              </S.LikeCommentShareContainer>
              <S.InteractionButton><Icon /></S.InteractionButton>
            </S.PostInteractions> */}
            <S.LikesSession>
            </S.LikesSession>
            <S.ActorDescription>
              <S.ActorName>{item.author.name}</S.ActorName> {item.description}
            </S.ActorDescription>
            <S.SeeCommentsText>Ver todos os comentários</S.SeeCommentsText>
          </S.PostCard>
        )}
      />
    </S.FeedContainer>
  );
}