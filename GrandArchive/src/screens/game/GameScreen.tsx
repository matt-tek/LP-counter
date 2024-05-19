import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../global/color';
import {NavigationProp} from '@react-navigation/native';
import ChoiceScreen from './choice/ChoiceScreen';

interface GameScreenProps {
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GameScreen({navigation}: GameScreenProps) {
  const [skip, setSkip] = React.useState<number>(0);
  return (
    <View style={styles.container}>
      <ChoiceScreen idPlayer={1} />
      <TouchableOpacity onPress={() => setSkip(skip + 1)} style={styles.button}>
        <Text style={styles.title}>Passer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text.main,
    fontSize: 24,
  },
  button: {
    backgroundColor: colors.accent,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '80%',
  },
});
