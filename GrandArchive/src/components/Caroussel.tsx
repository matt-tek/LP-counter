import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {colors} from '../global/color';
import {assets} from '../global/images';
import Card from './Card';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const data = [
  {
    name: 'Arisanna',
    life: 3,
    description: 'Arisanna est une championne de type feu',
    image_path: assets.img.arisanna,
  },
  {
    name: 'Nico',
    life: 3,
    description: 'Nico est une championne de type eau',
    image_path: assets.img.nico,
  },
  {
    name: 'Rai',
    life: 3,
    description: 'Toto est une championne de type terre',
    image_path: assets.img.rai,
  },
];

export default function Caroussel() {
  let scrollXOffset = new Animated.Value(0);
  // const [isFirstCard, setIsFirstCard] = React.useState(
  //   scrollXOffset.value === 0,
  // );
  // const [isLastCard, setIsLastCard] = React.useState(false);
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

  const scrollRef =
    React.useRef<React.RefObject<typeof Animated.ScrollView>>(null);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={SCREEN_WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(_, width) => setScrollViewWidth(width)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollXOffset}}}],
          {useNativeDriver: false},
        )}>
        {data.map((card, index) => (
          <Card
            key={index}
            image_path={card.image_path}
            life={card.life}
            name={card.name}
            description={card.description}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    // paddingLeft: '20%',
    // width: 'auto',
    // height: 450,
    // alignItems: 'center',
  },
});
