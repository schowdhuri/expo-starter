import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { AUTH_HOST } from "@constants/apiHosts";
import { StorageKeys } from "@constants/storageKeys";
import * as storage from "@services/storage";

export const axiosAuthInstance = axios.create({
  baseURL: AUTH_HOST,
  headers: { "Content-Type": "application/json" },
});

export const axiosVerifiedAuthInstance = axios.create({
  baseURL: AUTH_HOST,
  headers: { "Content-Type": "application/json" },
});

axiosVerifiedAuthInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await storage.get(StorageKeys.AccessToken);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
