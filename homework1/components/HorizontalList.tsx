import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface HorizontalListProps {
  items: { image: string; text: string }[];
}

export const HorizontalList: React.FC<HorizontalListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
     justifyContent: 'space-around',
     padding: 10,
  },
  item: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});