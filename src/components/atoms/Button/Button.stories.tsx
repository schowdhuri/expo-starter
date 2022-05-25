import type { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyButton } from "./Button";

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default MyButtonMeta;

export const Basic: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);
