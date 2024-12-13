import { makeAutoObservable } from "mobx";

export class TodoModel {
  id: number;
  text: string;
  completed: boolean;

  constructor(id: number, text: string, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
    makeAutoObservable(this);
  }
}