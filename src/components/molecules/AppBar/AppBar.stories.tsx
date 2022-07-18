import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Box, Icon, Text } from "native-base";
import { AppBar } from ".";

export default {
  title: "molecules/AppBar",
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

export const TitleHeader: ComponentStory<typeof AppBar> = (args) => (
  <AppBar {...args} onGoBack={() => console.log("back")} variant="title" />
);

TitleHeader.args = {
  title: "Back",
};

export const LeftRight: ComponentStory<typeof AppBar> = () => (
  <AppBar
    variant="lwidget-rwidget"
    title="Funds"
    LeftComponent={
      <Box flex={2}>
        <Text fontSize={20} fontWeight="bold" lineHeight={24}>
          Search Logs
        </Text>
      </Box>
    }
    RightComponent={
      <Box flex={2} alignItems="flex-end">
        <Icon as={MaterialCommunityIcons} name="card-search-outline" />
      </Box>
    }
  />
);
