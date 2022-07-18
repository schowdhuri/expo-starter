const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

defaultConfig.resolver.resolverMainFields = [
  "sbmodern",
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

// svg support
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  "svg",
];
defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

defaultConfig.watchFolders = [...defaultConfig.watchFolders, "./.ondevice"];

module.exports = defaultConfig;
