import type { IAlertProps } from "native-base";
import {
  Alert,
  useToast,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Text,
} from "native-base";
import type { InterfaceToastProps } from "native-base/lib/typescript/components/composites/Toast/types";

export function useToastMessage() {
  const toast = useToast();

  const ToastAlert = ({
    id,
    status,
    variant,
    title,
    description,
    isClosable,
    ...rest
  }: InterfaceToastProps & IAlertProps) => (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status ?? "info"}
      variant={variant ?? "left-accent"}
      mx={2}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === "solid"
                  ? "lightText"
                  : variant !== "outline"
                  ? "darkText"
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text
          px={6}
          color={
            variant === "solid"
              ? "lightText"
              : variant !== "outline"
              ? "darkText"
              : null
          }
        >
          {description}
        </Text>
      </VStack>
    </Alert>
  );

  return {
    ...toast,
    show: (toastData: InterfaceToastProps & IAlertProps) => {
      toast.show({
        ...toastData,
        placement: toastData.placement ?? "top",
        render: ({ id }) => {
          return <ToastAlert id={id} {...toastData} />;
        },
      });
    },
  };
}
