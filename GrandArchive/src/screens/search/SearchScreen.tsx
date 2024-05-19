import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../global/color';
import {NavigationProp} from '@react-navigation/native';

interface SearchScreenProps {
  navigation: NavigationProp<any, any>;
}

export default function SearchScreen({navigation}: SearchScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
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
  button: {backgroundColor: colors.accent, padding: 10},
});
