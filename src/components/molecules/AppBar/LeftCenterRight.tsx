import { HStack } from "native-base";

interface LeftCenterRightProps {
  CenterComponent?: JSX.Element;
  LeftComponent?: JSX.Element;
  RightComponent?: JSX.Element;
}

export function LeftCenterRight(props: LeftCenterRightProps) {
  const {
    CenterComponent,
    LeftComponent,
    RightComponent: RightComonent,
  } = props;
  return (
    <HStack alignItems="center" w="100%">
      {LeftComponent}
      {CenterComponent}
      {RightComonent}
    </HStack>
  );
}
