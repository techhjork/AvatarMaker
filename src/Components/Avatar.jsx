import React, { Fragment } from "react";
import Head from "./Head";
import Body from "./Parts/Body/Body";
import Cloth from "./Parts/Clothes/Basic/Cloth";
import ChinShaodw from "./Parts/Face/Shape/ChinShadow/ChinShadow";
export default function Avatar() {
  return (
    <Fragment>
      <g
        id="svga-group-subwrapper"
        data-updown="0"
        data-leftright="0"
        data-dist="0"
        data-scalex="1"
        data-scaley="1"
        data-rotate="0"
      >
        <g
          id="svga-group-hair-back"
          data-updown="0"
          data-leftright="0"
          data-dist="0"
          data-scalex="1"
          data-scaley="1"
          data-rotate="0"
        >
          <path
            id="SvgjsPath3460"
            d="M100.5,100.5h-1v-1h1V100.5z"
            data-colored="true"
            data-filltype="tone"
            data-stroketype="none"
            fill="#2a232b"
            stroke-width="none"
            opacity="1"
          ></path>
        </g>
        <Body />
        <ChinShaodw />
        <Cloth />
        <Head />
      </g>
    </Fragment>
  );
}
