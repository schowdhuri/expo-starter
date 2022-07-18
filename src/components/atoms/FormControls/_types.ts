import type {
  IOSNativeProps,
  AndroidNativeProps,
} from "@react-native-community/datetimepicker";
import type { IInputProps, ICheckboxProps } from "native-base";
import type { Control, ControllerProps, Path } from "react-hook-form";

export interface InputControlProps<TFormFields>
  extends IInputProps,
    Pick<ControllerProps, "rules"> {
  control: Control<TFormFields, object>;
  helperText?: string;
  id: Path<TFormFields>;
  label?: string;
}

export interface CheckboxControlProps<TFormFields>
  extends Omit<ICheckboxProps, "value">,
    Pick<ControllerProps, "rules"> {
  control: Control<TFormFields, object>;
  helperText?: string;
  id: Path<TFormFields>;
  isRequired?: boolean;
  label?: string;
}

export interface DateTimeControlProps<TFormFields>
  extends Omit<IOSNativeProps | AndroidNativeProps, "value">,
    Pick<ControllerProps, "rules"> {
  control: Control<TFormFields, object>;
  display?: "default" | "clock" | "calendar";
  helperText?: string;
  id: Path<TFormFields>;
  isRequired?: boolean;
  label?: string;
  mode: "date" | "time";
}
