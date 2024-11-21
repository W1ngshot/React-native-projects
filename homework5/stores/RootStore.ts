import React from 'react';
import { PostStore } from './PostStore';

class RootStore {
  postStore: PostStore;

  constructor() {
    this.postStore = new PostStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);