import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";

export const AddTodo = observer(() => {
  const [text, setText] = useState("");
  const { todoStore } = useRootStore();

  const handleAdd = () => {
    todoStore.addTodo(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  input: { flex: 1, borderColor: "gray", borderWidth: 1, padding: 8 },
});