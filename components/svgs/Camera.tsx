import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCamera = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Mask
      id="camera_svg__a"
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
    <G mask="url(#camera_svg__a)">
      <Path
        fill="#640D6B"
        d="m8.624 6.502 2.63-4.507q1.709.45 3.032 1.653a7.07 7.07 0 0 1 1.925 2.854zM6.54 8.38 3.967 3.873a7.7 7.7 0 0 1 2.357-1.578 7.2 7.2 0 0 1 3.465-.554q.318.03.582.066zm-4.582 2.723a9 9 0 0 1-.179-.92 7 7 0 0 1-.066-.958q0-1.334.432-2.516a7.5 7.5 0 0 1 1.221-2.16l3.793 6.554zm5.258 5.352a7.25 7.25 0 0 1-3.043-1.652 7 7 0 0 1-1.934-2.855h7.568zm2.01.282a5 5 0 0 1-.574-.038q-.29-.037-.554-.075l3.813-6.554 2.572 4.507a7.7 7.7 0 0 1-2.357 1.578 7.2 7.2 0 0 1-2.9.582m5.858-2.836-3.793-6.554h5.202q.112.45.178.92t.066.958q0 1.314-.46 2.516a8.6 8.6 0 0 1-1.193 2.16"
      />
    </G>
  </Svg>
);
export default SvgCamera;
