import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {colors} from '../../../global/color';
import {assets} from '../../../global/images';
// import {NavigationProp} from '@react-navigation/native';
import Card from '../../../components/Card';

interface GameScreenProps {
  idPlayer: number;
}

export default function ChoiceScreen(props: GameScreenProps) {
  const scrollXOffset = useSharedValue(0);
  const [isFirstCard, setIsFirstCard] = React.useState(scrollXOffset.value === 0);
  const [isLastCard, setIsLastCard] = React.useState(false);
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

  const scrollRef = React.useRef<React.RefObject<typeof Animated.ScrollView>>(null);
  
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Choisissez votre champion !</Text>
        <Text style={styles.text}>Joueur {props.idPlayer}</Text>
      </View>
      <Card
        image_path={assets.img.arisanna}
        life={3}
        name="nico"
        description="toto"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: colors.text.light,
    marginTop: 20,
    fontSize: 24,
  },
  text: {
    color: colors.text.light,
    fontSize: 24,
  },
  textContainer: {
    // backgroundColor: colors.accent,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});
