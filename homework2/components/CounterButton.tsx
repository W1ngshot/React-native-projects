import { useState } from "react";
import { View, Text, Button } from 'react-native';

export function CounterButton() {
  const [pressedCount, setPressedCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePress = () => {
    const newPressedCount = pressedCount + 1;
    setPressedCount(newPressedCount);
    if (newPressedCount >= 3) {
      setIsDisabled(true);
    }
  }

  const handleReset = () => {
    setPressedCount(0);
    setIsDisabled(false);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button title='Press me' onPress={handlePress} disabled={isDisabled} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};