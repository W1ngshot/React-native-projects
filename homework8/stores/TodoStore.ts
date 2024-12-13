import { makeAutoObservable } from "mobx";
import { TodoListModel } from "../models/TodoListModel";
import { TodoService } from "../services/TodoService";

export class TodoStore {
  todoList: TodoListModel;
  completedTodoList: TodoListModel;
  private todoService: TodoService;

  constructor() {
    makeAutoObservable(this);
    this.todoList = new TodoListModel();
    this.completedTodoList = new TodoListModel();
    this.todoService = new TodoService(this.todoList, this.completedTodoList);
  }

  addTodo(text: string) {
    const updatedTodoList = this.todoService.addNewTodo(text);
    this.todoList = updatedTodoList;
  };

  completeTodo(id: number) {
    this.todoService.completeTodo(id);
  };

  removeTodo(id: number) {
    this.todoService.deleteTodo(id);
  };
}