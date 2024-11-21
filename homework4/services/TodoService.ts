import { makeAutoObservable } from "mobx";
import { TodoListModel } from "../models/TodoListModel";
import { TodoModel } from "../models/TodoModel";

export class TodoService {
  private todoListModel: TodoListModel;

  constructor(todoListModel: TodoListModel) {
    this.todoListModel = todoListModel;
    makeAutoObservable(this);
  }

  addNewTodo(text: string): TodoListModel {
    const newTodo = new TodoModel(this.todoListModel.getNextId(), text);
    this.todoListModel.addTodo(newTodo);
    return this.todoListModel;
  }

  toggleTodoStatus(id: number) {
    this.todoListModel.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoListModel.removeTodo(id);
  }
}