import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

export const TodoList: React.FC = observer(() => {
  const { todoStore } = useRootStore();
  const modalizeRef = useRef<Modalize>(null);

  const confirmDelete = (todoId: number) => {
    Alert.alert(
      "Точно удалить?",
      "Вы уверены, что хотите удалить эту задачу?",
      [
        {
          text: "Нет",
          onPress: () => console.log("Удаление отменено"),
          style: "cancel",
        },
        { text: "Да", onPress: () => todoStore.removeTodo(todoId) },
      ]
    );
  };

  const openModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {todoStore.todoList.todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text style={styles.text}>
              {todo.text}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => todoStore.completeTodo(todo.id)}
            >
              <Text style={styles.buttonText}>Завершить</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => confirmDelete(todo.id)}
            >
              <Text style={styles.buttonText}>Удалить</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.viewButton} onPress={openModal}>
        <Text style={styles.viewButtonText}>Посмотреть завершенные задачи</Text>
      </TouchableOpacity>

      <Portal>
        <Modalize ref={modalizeRef} modalHeight={400}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Завершенные задачи</Text>
            {todoStore.completedTodoList.todos.length > 0 ? (
              todoStore.completedTodoList.todos.map((todo) => (
                <View key={todo.id} style={styles.todoItem}>
                  <Text style={styles.completedText}>{todo.text}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noTasksText}>Нет завершенных задач</Text>
            )}
          </View>
        </Modalize>
      </Portal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  todoItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  text: { fontSize: 16, flex: 1 },
  completedText: { fontSize: 16, textDecorationLine: "line-through", flex: 1 },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: { fontSize: 14, color: "#000", textAlign: "center" },
  viewButton: {
    backgroundColor: "#888",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  viewButtonText: { fontSize: 16, color: "#fff", textAlign: "center" },
  modalContent: { padding: 20 },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  noTasksText: { fontSize: 16, color: "gray" },
});