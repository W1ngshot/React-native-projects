import { makeAutoObservable } from "mobx";
import { TodoModel } from "./TodoModel";

export class TodoListModel {
  todos: TodoModel[] = [];
  completed: TodoModel[] = [];
  private nextId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  getTodoById(id: number): TodoModel | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  getNextId(): number {
    return this.nextId++;
  }
}
