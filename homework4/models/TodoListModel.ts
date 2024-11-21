import { makeAutoObservable } from "mobx";
import { TodoModel } from "./TodoModel";

export class TodoListModel {
  todos: TodoModel[] = [];
  private nextId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.toggle();
    }
  }

  getNextId(): number {
    return this.nextId++;
  }
}
