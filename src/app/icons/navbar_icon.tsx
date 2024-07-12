import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 26" fill="none" {...props}>
    <path fill="#333" d="M8 8h20v1H8zM8 17h20v1H8z" />
  </svg>
);
export default SvgComponent;
