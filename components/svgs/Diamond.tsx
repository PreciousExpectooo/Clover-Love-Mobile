import * as React from "react";
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiamond = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Mask
      id="diamond_svg__a"
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
    <G mask="url(#diamond_svg__a)">
      <Path
        fill="url(#diamond_svg__b)"
        d="M6.133 5.5 7.9 2h.2l1.767 3.5zM7.5 13.4 1.75 6.5H7.5zm1 0V6.5h5.75zm2.467-7.9L9.233 2h3.434l1.75 3.5zm-9.384 0L3.333 2h3.434L5.033 5.5z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="diamond_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 5.7 -6.41667 0 8 7.7)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.675} stopColor="#552059" />
        <Stop offset={1} stopColor="#E65C19" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgDiamond;
