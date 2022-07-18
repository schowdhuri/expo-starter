import decode from "jwt-decode";
import { useQuery } from "react-query";
import { QueryKeys } from "@constants/queryKeys";
import { loadAuthTokens } from "@services/authTokenStorage";
import type { AccessTokenPayload } from "@types";

interface AuthInfoPayload {
  userData: AccessTokenPayload["data"];
}

export function useAuth() {
  return useQuery(QueryKeys.Auth, async () => getAuthInfo(), {
    staleTime: 0,
    retry: false,
  });
}

async function getAuthInfo(): Promise<AuthInfoPayload> {
  const tokens = await loadAuthTokens();
  const payload: AccessTokenPayload = decode<AccessTokenPayload>(
    tokens.accessToken
  );
  return { userData: payload.data };
}
