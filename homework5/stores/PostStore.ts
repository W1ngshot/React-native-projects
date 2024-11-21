import { makeAutoObservable } from "mobx";
import PostService from "../services/PostService";
import { Post } from "../types/Post";

export class PostStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;
  private readonly postService: PostService;

  constructor() {
    makeAutoObservable(this);
    this.postService = new PostService();
  }

  async fetchPosts() {
    this.loading = true;
    this.error = null;

    try {
      const posts = await this.postService.getItems();
      this.posts = posts;
    } catch (err) {
      this.error = "Failed to fetch posts";
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}