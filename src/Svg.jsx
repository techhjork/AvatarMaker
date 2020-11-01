import React from "react";
import Colors from "./Components/Colors";
import Main from "./Components/Main";
export default function Svg(props: SVGSVGElement) {
  return (
    <svg
      id="svga-svgcanvas"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="svga-svg"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <Main />
      <Colors />
    </svg>
  );
}
