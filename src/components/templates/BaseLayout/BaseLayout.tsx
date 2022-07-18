import { Platform } from "expo-modules-core";
import {
  Box,
  VStack,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "native-base";
import type { ReactNode } from "react";

interface BaseLayoutProps {
  avoidKeyboard?: boolean;
  isScrollable?: boolean;
  ContentComponent: ReactNode;
  HeaderComponent?: ReactNode;
  FooterComponent?: ReactNode;
}

export function BaseLayout(props: BaseLayoutProps) {
  const {
    avoidKeyboard = false,
    isScrollable = true,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
  } = props;

  let Content = ContentComponent;

  if (avoidKeyboard) {
    Content = (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        flex={1}
      >
        {ContentComponent}
      </KeyboardAvoidingView>
    );
  }

  if (isScrollable) {
    Content = <ScrollView flex={1}>{Content}</ScrollView>;
  } else {
    Content = <View flex={1}>{Content}</View>;
  }

  return (
    <VStack
      bgColor="white"
      flex={1}
      justifyContent="space-between"
      safeAreaTop={avoidKeyboard ? undefined : true}
      w="100%"
    >
      {HeaderComponent && <Box>{HeaderComponent}</Box>}
      {Content}
      {FooterComponent && <Box>{FooterComponent}</Box>}
    </VStack>
  );
}
