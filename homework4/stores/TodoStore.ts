import { makeAutoObservable } from "mobx";
import { TodoListModel } from "../models/TodoListModel";
import { TodoService } from "../services/TodoService";

export class TodoStore {
  todoList: TodoListModel;
  private todoService: TodoService;

  constructor() {
    makeAutoObservable(this);
    this.todoList = new TodoListModel();
    this.todoService = new TodoService(this.todoList);
  }

  addTodo(text: string) {
    const updatedTodoList = this.todoService.addNewTodo(text);
    this.todoList = updatedTodoList;
  };

  toggleTodo(id: number) {
    this.todoService.toggleTodoStatus(id);
  };

  removeTodo(id: number) {
    this.todoService.deleteTodo(id);
  };
}