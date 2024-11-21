import PostRepository from "../repositories/PostRepository";
import { Post } from "../types/Post";

export default class PostService {
  postRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async getItems(): Promise<Post[]> {
    const posts = await this.postRepository.getItems();
    return posts.slice(0, 10);
  }
}