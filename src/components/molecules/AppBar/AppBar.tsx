import { Box, useTheme } from "native-base";
import { LeftCenterRight } from "./LeftCenterRight";
import { TitleHeader } from "./TitleHeader";

interface AppBarProps {
  onGoBack?: () => void;
  title?: string;
  LeftComponent?: JSX.Element;
  RightComponent?: JSX.Element;
  safeAreaTop?: boolean;
  variant: "title" | "lwidget-rwidget";
}

export function AppBar(props: AppBarProps) {
  const {
    onGoBack,
    title,
    LeftComponent,
    RightComponent,
    safeAreaTop,
    variant,
  } = props;
  const { colors } = useTheme();
  return (
    <Box
      bgColor={colors.white}
      borderBottomColor={colors.gray[100]}
      borderBottomWidth={1}
      px={2}
      py={1}
      safeAreaTop={safeAreaTop}
      shadow={4}
      style={{
        shadowColor: colors.gray[300],
        shadowOffset: {
          height: 4,
          width: 0,
        },
      }}
    >
      {variant === "title" && title && (
        <TitleHeader onGoBack={onGoBack} title={title} />
      )}
      {variant === "lwidget-rwidget" && (
        <LeftCenterRight
          LeftComponent={LeftComponent}
          RightComponent={RightComponent}
        />
      )}
    </Box>
  );
}
