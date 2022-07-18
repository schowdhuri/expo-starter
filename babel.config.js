module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@atoms": "./src/components/atoms",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@icons": "./src/components/icons",
            "@images": "./src/images",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@pages": "./src/pages",
            "@state": "./src/state",
            "@services": "./src/services",
            "@templates": "./src/components/templates",
            "@types": "./src/types",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@graphql": "./src/graphql",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
