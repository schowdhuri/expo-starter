import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./_types";

export function Search(props: IconProps) {
  const { width, height } = props;

  return (
    <Svg width={width} height={height}>
      <Path
        d="M7.506 12.667c3.015 0 5.46-2.388 5.46-5.334C12.966 4.388 10.52 2 7.506 2S2.047 4.388 2.047 7.333c0 2.946 2.444 5.334 5.46 5.334ZM14.33 14l-2.968-2.9"
        stroke="#828282"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
