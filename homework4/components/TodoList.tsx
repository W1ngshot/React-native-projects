import React from "react";
import { View, Text, Button, FlatList, StyleSheet, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";

export const TodoList = observer(() => {
  const { todoStore } = useRootStore();

  return (
    <ScrollView>
      {todoStore.todoList.todos.map((todo) => (
        <View style={styles.todoItem}>
          <Text style={todo.completed ? styles.completedText : styles.text}>
            {todo.text}
          </Text>
          <Button title="Toggle" onPress={() => todoStore.toggleTodo(todo.id)} />
          <Button title="Delete" onPress={() => todoStore.removeTodo(todo.id)} />
        </View>
      ))}
    </ScrollView>

    // <FlatList
    //   data={todoStore.todoList.todos}
    //   keyExtractor={(item) => item.id.toString()}
    //   renderItem={({ item }) => (
    //     <View style={styles.todoItem}>
    //       <Text style={item.completed ? styles.completedText : styles.text}>
    //         {item.text}
    //       </Text>
    //       <Button title="Toggle" onPress={() => todoStore.toggleTodo(item.id)} />
    //       <Button title="Delete" onPress={() => todoStore.removeTodo(item.id)} />
    //     </View>
    //   )}
    // />
  );
});

const styles = StyleSheet.create({
  todoItem: { flexDirection: "row", alignItems: "center" },
  text: { fontSize: 16 },
  completedText: { fontSize: 16, textDecorationLine: "line-through" },
});