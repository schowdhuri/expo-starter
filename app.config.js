import "dotenv/config";

export default {
  expo: {
    name: "expo-starter",
    slug: "expo-starter",
    version: "0.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    entryPoint: "./index",
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.example.app",
      supportsTablet: true,
    },
    android: {
      package: "com.example.app",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      storybookMode: process.env.STORYBOOK === "true",
      AUTH_HOST: process.env.AUTH_HOST,
      GRAPHQL_URL: process.env.GRAPHQL_URL,
    },
  },
};
