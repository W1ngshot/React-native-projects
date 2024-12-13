import React from "react";
import { View, StyleSheet } from "react-native";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize'; 

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <View style={styles.container}>
          <AddTodo />
          <TodoList />
        </View>
      </Host>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
});