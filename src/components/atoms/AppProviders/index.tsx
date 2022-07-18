import { NavigationContainer } from "@react-navigation/native";
import type { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "./ThemeProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProviders: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};
