import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCardio = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Mask
      id="cardio_svg__a"
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
    <G mask="url(#cardio_svg__a)">
      <Path
        fill="#E65C19"
        d="m8.249 9.77-.639-.958a.7.7 0 0 0-.263-.244.7.7 0 0 0-.357-.094H2.07a4.2 4.2 0 0 1-.281-.94q-.076-.45-.076-.938 0-1.766 1.183-2.948Q4.08 2.464 5.845 2.464q.975 0 1.859.414a4.45 4.45 0 0 1 1.521 1.164q.639-.75 1.521-1.164a4.3 4.3 0 0 1 1.86-.414q1.764 0 2.948 1.184 1.183 1.182 1.183 2.948 0 .488-.075.939t-.282.939h-4.47l-1.295-1.916a.7.7 0 0 0-.291-.253.9.9 0 0 0-.385-.085.66.66 0 0 0-.423.141.76.76 0 0 0-.253.366zm.976 6.479-1.09-.977a83 83 0 0 1-3.23-3.024q-1.257-1.257-1.971-2.272H6.54l1.295 1.916a.7.7 0 0 0 .292.253.9.9 0 0 0 .384.085.66.66 0 0 0 .423-.141.76.76 0 0 0 .254-.366l1.014-3.061.657.976q.094.15.263.244a.7.7 0 0 0 .357.094h4.037q-.714 1.015-1.972 2.272a83 83 0 0 1-3.23 3.024z"
      />
    </G>
  </Svg>
);
export default SvgCardio;
