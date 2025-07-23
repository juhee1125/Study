import { useState } from "react";
import { a, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  useFrame(() => {
    console.log(spring.x.get(), spring.y.get(), spring.z.get())
  })
  const [spring,api] = useSpring(()=>({
    from: { x: 0, y:0 ,z:1},

  }))
  const handleClick=()=>{
    api.start({
      to:{
        x:spring.x.get() === 1 ? 0 : 1,
        y:spring.y.get() === 1 ? 0 : 1,
        z:spring.y.get() === 0 ? 1 : 0,
      },
      
    })
  }
  return (
    <>
      <a.mesh onClick={handleClick} position-x={spring.x} position-y={spring.y} position-z={spring.z}>
        <boxGeometry />
        <a.meshBasicMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default Scene;
