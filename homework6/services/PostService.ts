import LocalRepository from "../repositories/LocalRepository";
import PostRepository from "../repositories/PostRepository";
import { Post } from "../types/Post";

export default class PostService {
  private postRepository: PostRepository;
  private localRepository: LocalRepository<Post>;

  constructor() {
    this.postRepository = new PostRepository();
    this.localRepository = new LocalRepository<Post>('posts');
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.getItems();
    return posts.slice(0, 10);
  }

  async getSavedPosts(): Promise<Post[]> {
    const posts = await this.localRepository.getItems();
    return posts;
  }

  async setSavedPosts(posts: Post[]): Promise<void> {
    await this.localRepository.setItems(posts);
  }

  async removeSavedPosts(): Promise<void> {
    await this.localRepository.removeAll();
  }
}