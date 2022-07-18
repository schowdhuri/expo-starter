import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button, VStack, Icon } from "native-base";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { InputControl, PasswordControl } from ".";

export default {
  title: "atoms/FormControls",
  component: InputControl,
} as ComponentMeta<typeof InputControl>;

export const KitchenSink: ComponentStory<typeof InputControl> = () => {
  const { control, handleSubmit } = useForm<FormValuesType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValuesType) => {
    console.log(values);
  };

  return (
    <VStack space={4}>
      <InputControl
        control={control}
        id="email"
        label="Email"
        placeholder="Enter your email"
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="email" />}
            size={5}
            ml={2}
            color="muted.400"
          />
        }
      />
      <PasswordControl
        control={control}
        id="password"
        label="Password"
        placeholder="Set a password"
        helperText="Min 4 characters"
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </VStack>
  );
};

const formSchema = zod.object({
  email: zod.string().email().min(1, { message: "Email Required" }),
  password: zod.string().min(4, { message: "Password too short" }),
});

type FormValuesType = zod.infer<typeof formSchema>;
