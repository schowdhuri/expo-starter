import { NativeBaseProvider } from "native-base";
import type { FC } from "react";
import { theme } from "@constants/theme";
import { FontsProvider } from "./FontsProvider";

export const ThemeProvider: FC = ({ children }) => {
  return (
    <FontsProvider>
      <NativeBaseProvider initialWindowMetrics={INSET} theme={theme}>
        {children}
      </NativeBaseProvider>
    </FontsProvider>
  );
};

const INSET = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};
