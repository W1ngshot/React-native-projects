import LocalClient from "../external_clients/LocalClient";

export default class LocalRepository<T> {
  localClient: LocalClient;
  tableName: string;

  constructor(tableName: string) {
    this.localClient = new LocalClient();
    this.tableName = tableName;
  }

  async getItems(): Promise<T[]> {
    const items = await this.localClient.get<T[]>(this.tableName);
    return items || [];
  }

  async setItems(items: T[]): Promise<void> {
    await this.localClient.set<T[]>(this.tableName, items);
  }

  async removeAll(): Promise<void> {
    await this.localClient.removeAll(this.tableName);
  }
}