import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMovies = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Mask
      id="movies_svg__a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </Mask>
    <G mask="url(#movies_svg__a)">
      <Path
        fill="#7E818C"
        d="M5.333 14v-1.333H2.667q-.55 0-.942-.392a1.28 1.28 0 0 1-.392-.942v-8q0-.55.392-.941Q2.117 2 2.667 2h10.666q.55 0 .942.392.392.391.392.941v8q0 .55-.392.942a1.28 1.28 0 0 1-.942.392h-2.666V14zm-2.666-2.667h10.666v-8H2.667z"
      />
    </G>
  </Svg>
);
export default SvgMovies;
