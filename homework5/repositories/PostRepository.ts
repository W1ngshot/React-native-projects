import AxiosClient from "../external_clients/AxiosClient";
import { Post } from "../types/Post";

export default class PostRepository {
  apiClient;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  async getItems(): Promise<Post[]> {
    const response = await this.apiClient.get<Post[]>('/posts');
    return response.data;
  }
}