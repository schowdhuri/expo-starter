import AsyncStorage from "@react-native-async-storage/async-storage";
import type { StorageKeys } from "@constants/storageKeys";

export async function set(key: StorageKeys, value: string | object) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  try {
    await AsyncStorage.setItem(key, value);
  } catch {}
}

export async function get(key: StorageKeys, json?: boolean) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value === null ? null : json ? JSON.parse(value) : value;
  } catch (ex) {
    console.error("Failed to read stored value", ex);
  }
}

export async function remove(key: StorageKeys) {
  return AsyncStorage.removeItem(key);
}
