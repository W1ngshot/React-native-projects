import React from 'react';
import { TodoStore } from "./TodoStore";

class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);