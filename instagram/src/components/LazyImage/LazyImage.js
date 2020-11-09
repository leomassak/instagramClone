import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import * as S from './styles';

const OriginalImageAnimated = Animated.createAnimatedComponent(S.OriginalImage);

export default function LazyImage ({
    smallSource,
    source,
    ratio,
    shouldLoad
}) {
    const imageOpacity = new Animated.Value(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    if(shouldLoad) {
        setLoaded(true);
    }
    }, [shouldLoad]);

function handleAnimatedLoad() {
    Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
    }).start();
}

  return (
      <S.SmallImage 
        source={{uri: smallSource}} 
        ratio={ratio} 
        resizeMode="contain" 
        blurRadius={2}
      >
          {loaded && (
              <OriginalImageAnimated 
              style={{opacity: imageOpacity}}
              source={source} 
              ratio={ratio} 
              resizeMode="contain"
              onLoadEnd={handleAnimatedLoad}
            />
          )}
      </S.SmallImage>
  );
}