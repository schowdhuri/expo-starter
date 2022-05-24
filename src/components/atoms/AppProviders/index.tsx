import { FC } from "react";
import { RecoilRoot } from "recoil";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export const AppProviders: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
};
