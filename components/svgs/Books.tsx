import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBooks = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Mask
      id="books_svg__a"
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
    <G mask="url(#books_svg__a)">
      <Path
        fill="#7E818C"
        d="M8 13.333a6.4 6.4 0 0 0-1.733-.983A5.5 5.5 0 0 0 4.333 12q-.7 0-1.375.183-.675.184-1.291.517a.64.64 0 0 1-.675-.017.64.64 0 0 1-.325-.583V4.067q0-.185.091-.35a.57.57 0 0 1 .275-.25 7 7 0 0 1 1.6-.6 7.3 7.3 0 0 1 1.7-.2q.967 0 1.892.25A7.2 7.2 0 0 1 8 3.667v8.066a7 7 0 0 1 1.783-.8 6.8 6.8 0 0 1 3.059-.166q.575.099 1.158.3v-8q.25.083.492.175.241.09.475.225a.57.57 0 0 1 .275.25.7.7 0 0 1 .091.35V12.1q0 .383-.325.583a.64.64 0 0 1-.675.017 6 6 0 0 0-1.291-.517A5.2 5.2 0 0 0 11.667 12a5.5 5.5 0 0 0-1.934.35Q8.8 12.7 8 13.333M9.333 10V3.667L12.667.333V7zm-2.666 1.083v-6.6a6 6 0 0 0-1.142-.358A5.8 5.8 0 0 0 4.333 4q-.615 0-1.2.117A6 6 0 0 0 2 4.467v6.616a6.6 6.6 0 0 1 2.333-.416q.6 0 1.175.1t1.159.316"
      />
    </G>
  </Svg>
);
export default SvgBooks;
