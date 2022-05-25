import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import StorybookUIRoot from "./.ondevice/Storybook";
import App from "./src";

const Root = Constants.manifest.extra.storybookMode ? StorybookUIRoot : App;

export default registerRootComponent(Root);
