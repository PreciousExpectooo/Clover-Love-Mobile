import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropdown = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={5}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M5 5 0 0h10z" />
  </Svg>
);
export default SvgDropdown;
