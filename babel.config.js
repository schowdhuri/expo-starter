module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@src": "./src",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@templates": "./src/components/templates",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@state": "./src/state",
            "@types": "./src/types",
            "@utils": "./src/utils",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
