/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "*.svg" {
  // import type { SvgProps } from "react-native-svg";
  // const content: React.FC<SvgProps>;
  const content: any;
  export default content;
}
