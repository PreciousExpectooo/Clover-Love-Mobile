import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVibrate = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Mask
      id="vibrate_svg__a"
      width={19}
      height={19}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M.211.211h18.028v18.028H.211z" />
    </Mask>
    <G mask="url(#vibrate_svg__a)">
      <Path
        fill="#640D6B"
        d="M.21 11.479V6.972h1.503v4.507zm2.254 1.502V5.469h1.503v7.512zm14.273-1.502V6.972h1.502v4.507zm-2.254 1.502V5.469h1.503v7.512zM6.22 15.986q-.62 0-1.06-.442a1.45 1.45 0 0 1-.442-1.06V3.966q0-.62.441-1.061a1.45 1.45 0 0 1 1.061-.442h6.01q.62 0 1.06.442.442.442.442 1.06v10.517q0 .62-.441 1.061a1.45 1.45 0 0 1-1.061.442z"
      />
    </G>
  </Svg>
);
export default SvgVibrate;
