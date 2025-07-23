import * as THREE from 'three'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'

const Scene = () => {
  const cubeRef = useRef()
  const { lerp } = THREE.MathUtils
  useFrame(()=>{
    cubeRef.current.position.x = lerp(cubeRef.current.position.x, 1, 0.01)
  })
  
  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
