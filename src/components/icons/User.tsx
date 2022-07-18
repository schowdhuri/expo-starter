import Svg, { Path, Circle } from "react-native-svg";
import type { IconProps } from "./_types";

export function User(props: IconProps) {
  const { height, width } = props;

  return (
    <Svg height={height} width={width}>
      <Circle
        cx="20.9997"
        cy="21.0016"
        r="18.6667"
        stroke="#B69056"
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M26.222 14.8902C26.222 17.7743 23.884 20.1124 20.9998 20.1124C18.1157 20.1124 15.7776 17.7743 15.7776 14.8902C15.7776 12.006 18.1157 9.66797 20.9998 9.66797C23.884 9.66797 26.222 12.006 26.222 14.8902Z"
        stroke="#B69056"
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M8.16626 33.8337V33.8337C8.16626 28.7711 12.2703 24.667 17.3329 24.667H24.6663C29.7289 24.667 33.8329 28.7711 33.8329 33.8337V33.8337"
        stroke="#B69056"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}
