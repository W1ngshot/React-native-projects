import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface VerticalTextUnderImageListProps {
  items: { image: string; text: string }[];
}

export const VerticalTextUnderImageList: React.FC<VerticalTextUnderImageListProps> = ({ items }) => {
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
    flexDirection: 'column',
    padding: 10,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});