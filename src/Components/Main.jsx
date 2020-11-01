import React, { Fragment } from "react";
import Avatar from "./Avatar";
import BacksSingle from "./Parts/Backs/Basic/BacksSingle";

export default function Main() {
  return (
    <Fragment>
      <g id="svga-group-wrapper">
        <BacksSingle />
        <Avatar />
      </g>
    </Fragment>
  );
}
