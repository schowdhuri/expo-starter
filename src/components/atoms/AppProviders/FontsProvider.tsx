import {
  Epilogue_100Thin,
  Epilogue_100Thin_Italic,
  Epilogue_300Light,
  Epilogue_300Light_Italic,
  Epilogue_400Regular,
  Epilogue_400Regular_Italic,
  Epilogue_500Medium,
  Epilogue_500Medium_Italic,
  Epilogue_700Bold,
  Epilogue_700Bold_Italic,
  Epilogue_800ExtraBold,
  Epilogue_800ExtraBold_Italic,
  Epilogue_900Black,
  Epilogue_900Black_Italic,
} from "@expo-google-fonts/epilogue";
import { useFonts } from "expo-font";
import type { FC } from "react";

export const FontsProvider: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Epilogue_100Thin,
    Epilogue_100Thin_Italic,
    Epilogue_300Light,
    Epilogue_300Light_Italic,
    Epilogue_400Regular,
    Epilogue_400Regular_Italic,
    Epilogue_500Medium,
    Epilogue_500Medium_Italic,
    Epilogue_700Bold,
    Epilogue_700Bold_Italic,
    Epilogue_800ExtraBold,
    Epilogue_800ExtraBold_Italic,
    Epilogue_900Black,
    Epilogue_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <></>;
  }
  return <>{children}</>;
};
