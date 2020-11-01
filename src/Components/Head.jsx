import React, { Fragment } from "react";
import LeftEar from "./Parts/Face/Ears/LeftEar/LeftEar.jsx";
import RightEar from "./Parts/Face/Ears/RightEar/RightEar.jsx";
import FaceShape from "./Parts/Face/Shape/FaceShape.jsx";
import Mouth from "./Parts/Face/Mouth/Mouth.jsx";
import LeftEye from "./Parts/Eyes/EyeShape/LeftEye/LeftEye.jsx";
import RightEye from "./Parts/Eyes/EyeShape/RightEye/RightEye.jsx";
import FaceLight from "./Parts/FaceLight/FaceLight.jsx";
import LeftEyeBrow from "./Parts/Eyes/EyeBrows/LeftEyeBrow/LeftEyeBrow.jsx";
import RightEyeBrow from "./Parts/Eyes/EyeBrows/RightEyeBrow/RightEyeBrow.jsx";
import Nose from "./Parts/Face/Nose/Nose.jsx";
import Beard from "./Parts/Hair/Beard/Beard.jsx";
import Mustache from "./Parts/Hair/Mustache/Mustache.jsx";
import OnHead from "./Parts/Hair/OnHead/OnHead.jsx";
import Glasses from "./Parts/Eyes/Glasses/Glasses.jsx";
export default function Head() {
  return (
    <Fragment>
      <g
        id="svga-group-head"
        data-updown="0"
        data-leftright="0"
        data-dist="0"
        data-scalex="1"
        data-scaley="1"
        data-rotate="0"
      >
        <LeftEar />
        <RightEar />
        <FaceShape />
        <Mouth />
        <LeftEye />
        <RightEye />
        {/* FaceLight */}
        <FaceLight />

        <LeftEyeBrow />
        <RightEyeBrow />
        <Nose />
        {/* <Beard /> */}
        <Mustache />
        <OnHead />
        <Glasses />
      </g>
    </Fragment>
  );
}
