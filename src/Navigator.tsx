import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import { Routes } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { Home } from "@pages/Home";
import type { RootStackParams } from "./types";

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigator: FC = ({ children }) => {
  const { isSuccess: isAuthed } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthed ? (
        <>
          <Stack.Screen name={Routes.Home} component={Home} />
        </>
      ) : (
        <>{/* <Stack.Screen name={Routes.Profile} component={Profile} /> */}</>
      )}
      {children}
    </Stack.Navigator>
  );
};
