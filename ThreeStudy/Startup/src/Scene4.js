import { useState } from "react";
import { a, useSpring } from "@react-spring/three";
let n =0
const Scene = () => {
  const [clicked, setClicked] = useState(false);
  const { x, y, color } = useSpring({
    from: { color: "hotpink" ,x: -2 },
    to: [
      { color: "yellow", x: 2 }, 
      { color: "cyan", y: 2 },
      { color: "greenyellow", x: -2 }, 
      { color: "hotpink", y: -2 },
    ],
    loop:() => 3 > n++,
    delay: 1000,
    pause: clicked,
    config: {mass: 200, tension: 700, friction: 5, damping: false },
    onStart:()=>console.log('onStart'),
    onRest:()=>console.log('onRest'),
    onPause:()=>console.log('onPause'),
    onResume:()=>console.log('onResume'),
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <a.mesh position-x={x} rotation-x={x} onClick={clickHandler}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Scene;
