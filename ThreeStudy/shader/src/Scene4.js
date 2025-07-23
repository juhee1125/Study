import { GradientTexture, MeshDistortMaterial, MeshWobbleMaterial, Environment, MeshReflectorMaterial, OrbitControls, useCursor } from "@react-three/drei";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

const Scene = () => {
  const [hover, setHover] = useState(false)
  const planeRef = useRef()
  useCursor(hover)
  const { lerp } = THREE.MathUtils
  useFrame(()=>{
    planeRef.current.material.distort = 
    lerp(planeRef.current.material.distort,
      hover ? 0.4:0,
      hover ? 0.05:0.01)
  })
  // useEffect(()=>{
  //   if (hover) {
  //     planeRef.current.material.distort = lepf()
  //   } else {
  //     planeRef.current.material.distort = 0
  //   }
  // }, [hover])

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {/* <Environment background files="./envMap/1.hdr" /> */}

      {/* <mesh> */}
        {/* x,y,z,폭,높이,깊이 */}
        {/* <boxGeometry args={[1,1,1,32,32,32]}/>  */}
        {/* <meshBasicMaterial color="#F76E53" /> */}
        {/* <MeshWobbleMaterial color="#F76E53" factor={3} speed={7}/>
      </mesh> */}
      <mesh ref={planeRef} onPointerOver={()=>setHover(true)} onPointerOut={()=>setHover(false)}>
        <planeGeometry args={[2,3,64,64]} /> 
        {/* 왜곡의 정도 */}
        <MeshDistortMaterial speed={3} distort={0.3}>
          <GradientTexture colors={["aquamarine", "hotpink"]} stops={[0,1]}/>
        </MeshDistortMaterial>
      </mesh>

      {/* <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} /> */}
        {/* blur = 주파수,저주파 */}
        {/* <MeshReflectorMaterial resolution={256} color="Gray"
        blur={[1000, 1000]} mixBlur={1} mirror={0.5} /> */}
      {/* </mesh> */}
    </>
  );
};

export default Scene;
