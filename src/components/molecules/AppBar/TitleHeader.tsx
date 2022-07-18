import { Ionicons } from "@expo/vector-icons";
import { HStack, Icon, IconButton, Text, useTheme } from "native-base";

interface TitleWithBackProps {
  onGoBack?: () => void;
  title: string;
}

export function TitleHeader(props: TitleWithBackProps) {
  const { onGoBack, title } = props;
  const { colors } = useTheme();
  return (
    <HStack alignItems="center">
      <IconButton
        icon={
          <Icon
            size="lg"
            as={Ionicons}
            name="arrow-back"
            color={colors.gray[700]}
          />
        }
        onPress={onGoBack}
        testID="title-header"
      />
      <Text
        color={colors.primary[500]}
        fontSize={20}
        fontWeight="bold"
        lineHeight={20}
      >
        {title}
      </Text>
    </HStack>
  );
}
