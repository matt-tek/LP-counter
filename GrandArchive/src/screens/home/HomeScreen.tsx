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
      <Image source={assets.img.logo} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      <Text style={styles.title}>Press me</Text>
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
  button: {backgroundColor: colors.darkGrey, padding: 10},
});
