import {
  Checkbox as NBCheckbox,
  FormControl,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { Controller } from "react-hook-form";
import type { CheckboxControlProps } from "./_types";

export function CheckboxControl<TFormFields>(
  props: CheckboxControlProps<TFormFields>
) {
  const { children, control, helperText, isRequired, rules, ...fieldProps } =
    props;
  return (
    <Controller
      control={control}
      name={fieldProps.id}
      rules={rules}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <FormControl
            isRequired={isRequired}
            isInvalid={Boolean(fieldState.error)}
          >
            <VStack mx={4}>
              <NBCheckbox
                {...fieldProps}
                isChecked={value as boolean}
                onChange={onChange}
                value={fieldProps.id}
              >
                {children}
              </NBCheckbox>
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
