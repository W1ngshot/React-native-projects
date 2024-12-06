import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalClient {
  async get<T>(tableName: string): Promise<T | null> {
    const data = await AsyncStorage.getItem(tableName);
    return data ? (JSON.parse(data) as T) : null;
  }

  async set<T>(key: string, data: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async removeAll(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}