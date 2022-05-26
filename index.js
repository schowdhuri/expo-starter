/* eslint-disable import/no-named-as-default */
import Constants from "expo-constants";
import { registerRootComponent } from "expo";
import StorybookUIRoot from "./.ondevice/Storybook";
import App from "./src";

const Root = Constants.manifest.extra.storybookMode ? StorybookUIRoot : App;

export default registerRootComponent(Root);
