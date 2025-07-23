import { useGLTF, useTexture, MeshPortalMaterial, RoundedBox, Text, OrbitControls, CameraControls } from "@react-three/drei";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import {easing} from 'maath'

const Scene = () => {
  const [active, setActive] = useState(false)
  const meshPortalMaterialRef = useRef()
  const cameraControlRef = useRef()
  const model = useGLTF("./model/1.glb")
  const texture = useTexture("./texture/1.png")
  const doubleClickHandler = ()=> {
    setActive(!active)
  }
  useFrame((_,delta)=>{
    easing.damp(meshPortalMaterialRef.current, "blend", active? 1:0.02, delta)
  })
  useEffect(()=>{
    if(active) cameraControlRef.current.setLookAt(0,0,3,0,0,true)
    else cameraControlRef.current.setLookAt(0,0,5,0,0,true)
  },[active])

  return (
    <>
      <CameraControls ref={cameraControlRef} />
      <Text font="./font/bold.ttf" position={[0,1.5,0.1]}
      fontSize={0.6} color="white">
        Eggs
        <meshLambertMaterial toneMapped={false} />
      </Text>
      <RoundedBox args={[3,4,0.1]} radius={0.1} onDoubleClick={doubleClickHandler}>
        <MeshPortalMaterial blend={active? 1:0} ref={meshPortalMaterialRef}>
          <primitive object={model.scene} position-y={0.6} />
          <mesh>
            <sphereGeometry args={[3,64,64]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
};

export default Scene;
