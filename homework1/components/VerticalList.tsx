import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface VerticalListProps {
  items: { image: string; text: string }[];
}

export const VerticalList: React.FC<VerticalListProps> = ({ items }) => {
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});