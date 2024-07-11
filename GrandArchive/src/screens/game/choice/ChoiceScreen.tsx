import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../global/color';
import Caroussel from '../../../components/Caroussel';

interface GameScreenProps {
  idPlayer: number;
}

export default function ChoiceScreen(props: GameScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Choisissez votre champion !</Text>
        <Text style={styles.text}>Joueur {props.idPlayer}</Text>
      </View>
      <Caroussel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexWrap: 'wrap',
    backgroundColor: colors.darkGrey,
    width: '100%',
    justifyContent: 'space-between',
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
    width: '100%',
    alignItems: 'center',
  },
});
