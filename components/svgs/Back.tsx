import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBack = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Mask
      id="back_svg__a"
      width={28}
      height={28}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h28v28H0z" />
    </Mask>
    <G mask="url(#back_svg__a)">
      <Path
        fill="#1C1B1F"
        d="m16.333 21-7-7 7-7 1.634 1.633L12.6 14l5.367 5.367z"
      />
    </G>
  </Svg>
);
export default SvgBack;
