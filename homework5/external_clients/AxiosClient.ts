import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class AxiosClient {
  static SUCCESS_STATUSES = [200, 201];
  static SERVER_ERROR = 500;

  api: AxiosInstance;

  constructor (config?: AxiosRequestConfig) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl();
    this.api.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getDefaultBaseUrl = () => {
    return 'https://jsonplaceholder.typicode.com'
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.get<T>(url, config);
  }
}