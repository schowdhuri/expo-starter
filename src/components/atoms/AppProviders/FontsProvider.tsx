import {
  AlegreyaSansSC_100Thin,
  AlegreyaSansSC_100Thin_Italic,
  AlegreyaSansSC_300Light,
  AlegreyaSansSC_300Light_Italic,
  AlegreyaSansSC_400Regular,
  AlegreyaSansSC_400Regular_Italic,
  AlegreyaSansSC_500Medium,
  AlegreyaSansSC_500Medium_Italic,
  AlegreyaSansSC_700Bold,
  AlegreyaSansSC_700Bold_Italic,
  AlegreyaSansSC_800ExtraBold,
  AlegreyaSansSC_800ExtraBold_Italic,
  AlegreyaSansSC_900Black,
  AlegreyaSansSC_900Black_Italic,
} from "@expo-google-fonts/alegreya-sans-sc";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import type { FC } from "react";

export const FontsProvider: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    AlegreyaSansSC_100Thin,
    AlegreyaSansSC_100Thin_Italic,
    AlegreyaSansSC_300Light,
    AlegreyaSansSC_300Light_Italic,
    AlegreyaSansSC_400Regular,
    AlegreyaSansSC_400Regular_Italic,
    AlegreyaSansSC_500Medium,
    AlegreyaSansSC_500Medium_Italic,
    AlegreyaSansSC_700Bold,
    AlegreyaSansSC_700Bold_Italic,
    AlegreyaSansSC_800ExtraBold,
    AlegreyaSansSC_800ExtraBold_Italic,
    AlegreyaSansSC_900Black,
    AlegreyaSansSC_900Black_Italic,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <></>;
  }
  return <>{children}</>;
};
