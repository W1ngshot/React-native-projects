import { makeAutoObservable } from "mobx";
import { TodoListModel } from "../models/TodoListModel";
import { TodoModel } from "../models/TodoModel";

export class TodoService {
  private todoListModel: TodoListModel;
  private completedTodoListModel: TodoListModel;

  constructor(todoListModel: TodoListModel, completedTodoListModel: TodoListModel) {
    this.todoListModel = todoListModel;
    this.completedTodoListModel = completedTodoListModel;
    makeAutoObservable(this);
  }

  addNewTodo(text: string): TodoListModel {
    const newTodo = new TodoModel(this.todoListModel.getNextId(), text);
    this.todoListModel.addTodo(newTodo);
    return this.todoListModel;
  }

  completeTodo(id: number) {
    const todo = this.todoListModel.getTodoById(id);
    if (todo)
    {
      const newCompleted = new TodoModel(this.completedTodoListModel.getNextId(), todo.text, true);
      this.completedTodoListModel.addTodo(newCompleted);
      this.todoListModel.removeTodo(id);
    }
  }
  

  deleteTodo(id: number) {
    this.todoListModel.removeTodo(id);
  }
}