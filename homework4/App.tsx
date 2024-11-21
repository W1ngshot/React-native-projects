import React from "react";
import { View, StyleSheet } from "react-native";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <View style={styles.container}>
      <AddTodo />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
});