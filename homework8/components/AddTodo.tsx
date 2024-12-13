import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
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
        placeholder="Добавить задачу"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
      >
        <Text style={styles.buttonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  input: { flex: 1, borderColor: "gray", borderWidth: 1, padding: 8 },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: { fontSize: 14, color: "#000", textAlign: "center" },
});