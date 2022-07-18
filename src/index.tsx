import { AppProviders } from "@atoms/AppProviders";
import { AppNavigator } from "./Navigator";

export default function App() {
  return (
    <AppProviders>
      <AppNavigator />
    </AppProviders>
  );
}
