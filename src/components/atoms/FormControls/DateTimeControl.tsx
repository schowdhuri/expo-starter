import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { Platform } from "expo-modules-core";
import {
  Box,
  FormControl,
  HStack,
  Icon,
  VStack,
  WarningOutlineIcon,
  Button,
} from "native-base";
import { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import type { DateTimeControlProps } from "./_types";

export function DateTimeControl<TFormFields>(
  props: DateTimeControlProps<TFormFields>
) {
  const {
    control,
    display = "default",
    helperText,
    id,
    isRequired,
    label,
    rules,
    ...fieldProps
  } = props;
  const [isOpen, setOpen] = useState(false);

  const isVisible = useMemo(() => {
    if (Platform.OS === "ios") {
      return true;
    }
    return isOpen;
  }, [isOpen]);

  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <FormControl
            isRequired={isRequired}
            isInvalid={Boolean(fieldState.error)}
          >
            <VStack mx={4}>
              {Platform.OS === "android" ? (
                <>
                  {label && <FormControl.Label>{label}</FormControl.Label>}
                  <Button
                    display="flex"
                    justifyContent="flex-start"
                    leftIcon={
                      <Icon as={MaterialIcons} name="calendar" size="md" />
                    }
                    onPress={() => setOpen(true)}
                    size="lg"
                    variant="outline"
                  >
                    {dayjs(value as Date).format("MM/DD/YYYY")}
                  </Button>

                  {isOpen && (
                    <DateTimePicker
                      {...fieldProps}
                      display={display}
                      testID={`datepicker-${id}`}
                      onChange={(_ev, val) => {
                        setOpen(false);
                        onChange(val);
                      }}
                      value={value as Date}
                    />
                  )}
                </>
              ) : (
                <HStack mt={2}>
                  {label && <FormControl.Label>{label}</FormControl.Label>}
                  <Box flex={1}>
                    {isVisible && (
                      <DateTimePicker
                        {...fieldProps}
                        display={display}
                        testID={`datepicker-${id}`}
                        onChange={(_ev, val) => {
                          setOpen(false);
                          onChange(val);
                        }}
                        value={value as Date}
                      />
                    )}
                  </Box>
                </HStack>
              )}
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
