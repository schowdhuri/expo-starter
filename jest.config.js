module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/SvgMock.js",
    "^asap$": "<rootDir>/src/utils/asap.js",
    "^asap/raw$": "<rootDir>/src/utils/asap.js",
  },
};
