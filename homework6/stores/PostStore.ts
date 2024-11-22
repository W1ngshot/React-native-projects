import { makeAutoObservable } from "mobx";
import PostService from "../services/PostService";
import { Post } from "../types/Post";

export class PostStore {
  posts: Post[] = [];
  savedPosts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;
  localLoading: boolean = false;
  localError: string | null = null;
  private readonly postService: PostService;

  constructor() {
    makeAutoObservable(this);
    this.postService = new PostService();
  }

  async fetchPosts() {
    this.loading = true;
    this.error = null;

    try {
      const posts = await this.postService.getPosts();
      this.posts = posts;
    } catch (error) {
      this.error = "Failed to fetch posts";
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  async fetchSavedPosts() {
    this.localLoading = true;
    this.localError = null;

    try {
      const posts = await this.postService.getSavedPosts();
      this.savedPosts = posts;
    } catch (error) {
      this.localError = "Failed to fetch local posts";
      console.error(error);
    } finally {
      this.localLoading = false;
    }
  }

  async setSavedPost(post: Post) {
    try {
      const updatedPosts = [...this.savedPosts, post];
      await this.postService.setSavedPosts(updatedPosts);
      this.savedPosts = updatedPosts;
    } catch (error) {
      console.error("Failed to local save post", error);
    }
  }

  async removeAllSaved() {
    try {
      await this.postService.removeSavedPosts();
      this.savedPosts = [];
    } catch (error) {
      console.error("Failed to remove all local posts", error);
    }
  }
}