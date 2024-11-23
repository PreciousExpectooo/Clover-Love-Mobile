import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEdit = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Mask
      id="edit_svg__a"
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
    <G mask="url(#edit_svg__a)">
      <Path
        fill="#640D6B"
        d="M1.713 18.24v-3.006h15.024v3.005zm1.503-4.508V10.54l8.413-8.395a1.484 1.484 0 0 1 1.052-.432q.3 0 .582.113a1.5 1.5 0 0 1 .507.338l1.033 1.052q.225.206.328.488t.104.582q0 .281-.104.554a1.4 1.4 0 0 1-.328.498l-8.395 8.394zm9.465-8.413 1.051-1.052-1.051-1.051-1.052 1.051z"
      />
    </G>
  </Svg>
);
export default SvgEdit;
