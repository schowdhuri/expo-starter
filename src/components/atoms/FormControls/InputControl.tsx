import { FormControl, VStack, Input, WarningOutlineIcon } from "native-base";
import { Controller } from "react-hook-form";
import type { InputControlProps } from "./_types";

export function InputControl<TFormFields>(
  props: InputControlProps<TFormFields>
) {
  const { control, helperText, label, rules, ...textFieldProps } = props;
  return (
    <Controller
      control={control}
      name={textFieldProps.id}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        return (
          <FormControl
            isRequired={props.isRequired}
            isInvalid={Boolean(fieldState.error)}
          >
            <VStack mx={4}>
              {label && <FormControl.Label>{label}</FormControl.Label>}
              <Input
                {...textFieldProps}
                onBlur={onBlur}
                onChangeText={onChange}
                size={textFieldProps.size ?? "md"}
                value={value as string}
              />

              {helperText && (
                <FormControl.HelperText>{helperText}</FormControl.HelperText>
              )}

              {fieldState.error?.message && (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {fieldState.error?.message}
                </FormControl.ErrorMessage>
              )}
            </VStack>
          </FormControl>
        );
      }}
    />
  );
}
