import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProviders } from "../src/components/atoms/AppProviders";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const Stack = createNativeStackNavigator();

export const decorators = [
  (Story) => (
    <AppProviders>
      <Stack.Navigator>
        <Stack.Screen name="Storybook" component={Story} />
      </Stack.Navigator>
    </AppProviders>
  ),
];
