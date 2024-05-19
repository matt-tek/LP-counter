import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../global/color';

type CardProps = {
  image_path: any;
  name: string;
  life: number;
  description: string;
};

export default function Card(props: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={props.image_path} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Champion: {props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    padding: 10,
    width: '80%',
  },
  image: {
    width: 'auto',
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
