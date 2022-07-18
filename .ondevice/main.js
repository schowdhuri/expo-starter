module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    // "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};

// Note: https://github.com/react-native-datetimepicker/datetimepicker/issues/184
// @storybook/addon-ondevice-controls depends on `@react-native-community/datetimepicker`
// which breaks EAS builds
