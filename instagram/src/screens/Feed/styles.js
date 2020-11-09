import styled from 'styled-components/native';

export const FeedContainer = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const PostCard = styled.View`
    width: 100%;
    padding: 10px 0;
`;

export const CardHeader = styled.View`
    flex-direction:row;
    padding: 5px 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-height: 35px;
    margin-bottom: 12px;
`;

export const ActorInfoContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const ActorAvatar = styled.Image`
    height: 32px;
    width: 32px;
    border-radius: 16px;
`;

export const ActorName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
    margin-left: 10px;
`;

export const MoreButton = styled.TouchableOpacity`
    height: 100%;
    width: 10%;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF;
`;

export const MoreButtonDot = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
`;

export const PostImage = styled.Image`
    aspect-ratio: ${(props) => props.ratio};
    width: 100%;
`;

export const PostInteractions = styled.View``;

export const LikeCommentShareContainer = styled.View``;

export const InteractionButton = styled.TouchableOpacity``;

export const LikesSession = styled.View``;

export const ActorDescription = styled.Text`
    font-size: 12px;
    color: #000;
    line-height: 18px;
    padding: 10px 15px;
`;

export const SeeCommentsText = styled.Text`
    font-size: 14px;
    color: #CECECE;
    padding: 0 15px;
`;

export const LoadingContainer = styled.View`
    padding: 25px;
    align-items: center;
    justify-content: center;
`;
