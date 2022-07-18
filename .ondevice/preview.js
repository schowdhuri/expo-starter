import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProviders } from "../src/components/atoms/AppProviders";

export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
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
