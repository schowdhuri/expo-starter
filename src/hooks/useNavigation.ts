import { useNavigation as useReactNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParams } from "@types";

export function useNavigation() {
  return useReactNavigation<NativeStackNavigationProp<RootStackParams>>();
}
