import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProviders } from "./components/atoms/AppProviders";
import { Routes } from "./constants/Routes";
import { Home } from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={Home} />
      </Stack.Navigator>
    </AppProviders>
  );
}
