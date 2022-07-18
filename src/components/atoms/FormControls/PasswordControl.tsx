import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Icon } from "native-base";
import { useState } from "react";
import type { InputControlProps } from "./_types";
import { InputControl } from "./InputControl";

export function PasswordControl<TFormFields>(
  props: InputControlProps<TFormFields>
) {
  const [isVisible, setVisible] = useState(false);
  return (
    <InputControl
      {...props}
      type={isVisible ? "text" : "password"}
      InputRightElement={
        <Icon
          as={
            <MaterialIcons name={isVisible ? "visibility" : "visibility-off"} />
          }
          size={8}
          mr={2}
          color="muted.400"
          onPress={() => setVisible(!isVisible)}
        />
      }
    />
  );
}
