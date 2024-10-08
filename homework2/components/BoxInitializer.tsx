import { useState } from "react";
import { View, Text, ScrollView, Button, TextInput, StyleSheet } from 'react-native';
import { Box } from './Box';

export function BoxInitializer() {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState<Array<{ size: number, color: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = () => {
    const boxSize = parseInt(size);

    if (isNaN(boxSize) || boxSize <= 0) {
      setError('Неверный размер');
      return;
    }
    if (!color) {
      setError('Неверный цвет');
      return;
    }

    setBoxes([...boxes, { size: boxSize, color }]);
    setColor('');
    setSize('');
    setError(null);
  }

  const handleReset = () => {
    setBoxes([]);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.boxContainer}>
        {boxes.map((box, index) => (
          <Box key={index} color={box.color} size={box.size} />
        ))}
      </ScrollView>

      <TextInput
        placeholder="Размер"
        keyboardType="numeric"
        style={styles.input}
        value={size}
        onChangeText={setSize}
      />
      <TextInput
        placeholder="Цвет"
        style={styles.input}
        value={color}
        onChangeText={setColor}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Добавить" onPress={handleAdd} />
        <Button title="Очистить" onPress={handleReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'gray',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});