import decode from "jwt-decode";
import { StorageKeys } from "@constants/storageKeys";
import * as storage from "./storage";

export async function saveAuthTokens(tokens: {
  accessToken: string;
  refreshToken: string;
}) {
  await Promise.all([
    storage.set(StorageKeys.AccessToken, tokens.accessToken),
    storage.set(StorageKeys.RefreshToken, tokens.refreshToken),
  ]);
}

export async function loadAuthTokens(): Promise<{
  accessToken: string;
  refreshToken: string;
}> {
  const [accessToken, refreshToken] = await Promise.all([
    storage.get(StorageKeys.AccessToken),
    storage.get(StorageKeys.RefreshToken),
  ]);

  if (!accessToken || !refreshToken) {
    throw new Error("Tokens not found");
  }
  // test both tokens
  const [at, rt] = await Promise.all([
    decode(accessToken),
    decode(refreshToken),
  ]);
  if (!at || !rt) {
    throw new Error("Invalid tokens");
  }
  // TODO: check exp
  return { accessToken, refreshToken };
}

export async function clearAuthTokens() {
  await Promise.all([
    storage.remove(StorageKeys.AccessToken),
    storage.remove(StorageKeys.RefreshToken),
  ]);
}
