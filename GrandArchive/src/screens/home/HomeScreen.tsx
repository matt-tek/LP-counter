import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../global/color';
import {assets} from '../../global/images';
import {NavigationProp} from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any, any>;
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Image source={assets.img.logo} style={styles.img} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Game')}
        style={styles.button}>
        <Text style={styles.title}>Jouer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.button}>
        <Text style={styles.title}>Rechercher</Text>
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
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
