import { GraphQLClient } from "graphql-request";
import { StorageKeys } from "@constants/storageKeys";
import * as storage from "@services/storage";
import { GRAPHQL_URL } from "@constants/apiHosts";

const client = new GraphQLClient(GRAPHQL_URL);

export const useFetchData = <TDocument, TVariables>(
  query: string
): ((variables?: TVariables) => Promise<TDocument>) => {
  return async (variables?: TVariables) => {
    const token = await storage.get(StorageKeys.AccessToken);

    return client.request<TDocument, TVariables>(query, variables, {
      Authorization: `Bearer ${token}`,
    });
  };
};
