import { useState } from "react";
import { a, useSpring } from "@react-spring/three";

const Scene = () => {
  const [click ,setClick] =useState(false)
  const {scale, color} =useSpring({
    from: {scale: click ? 1 : 2, color:click ? "orange" : "hotpink" },
    to: {
      scale: click ? 2 : 1, color:click ? "hotpink" : "orange"

    }
  })
  console.log(scale)
  const clickHandler = () => {
    setClick(!click)
  }
  return (
    <>
      <a.mesh onClick={clickHandler} scale={scale}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Scene;
