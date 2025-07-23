import { Cloud, OrbitControls, Sky, Sparkles, Stars, useHelper, Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'
import {useControls} from 'leva'

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <directionalLight castShadow />
      <Environment background files={"./envMap/1.hdr"}>
        {/* <Lightformer position-z={-1} scale={5} color="#ffff00" /> */}
      </Environment>
      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
