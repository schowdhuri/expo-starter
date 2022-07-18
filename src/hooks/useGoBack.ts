import type { Routes } from "@constants/routes";
import { useNavigation } from "@hooks/useNavigation";
import type { RootStackParams } from "@types";

export function useGoBack() {
  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (routeName?: Routes, routeParams?: any) => {
    try {
      navigation.pop();
    } catch {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else if (routeName) {
        navigation.navigate(routeName as keyof RootStackParams, routeParams);
      }
    }
  };
}
