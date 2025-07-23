import { Cloud, OrbitControls, Sparkles, Stars, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'

const Scene = () => {
  const lightRef = useRef() //useRef : 하단에 참조하도록 도와줌
  useHelper(lightRef, THREE.DirectionalLightHelper, 0.5)
  return (
    <>
      <OrbitControls />
      {/* 빛이 전체적으로(전체면적) 다 비춰짐 */}
      {/* <ambientLight /> */}
      {/* 빛이 한쪽면에 비춰짐(x포지션 양수는 오른쪽, 음수는 반대(y,z 동일)) */}
      {/* <directionalLight position={[0,-1,0]} /> */}
      {/* castShadow에서 보낸 그림자를 receiveshadow에서 받도록 */}
      {/* 그림자 */}
      <directionalLight castShadow ref={lightRef} />
      {/* 그림자를 만들 객체 */}
      {/* <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh> */}
      {/* <Sparkles count={100} speed={1} color="yellow" size={2} opacity={3}/> */}
      <Stars radius={2} depth={50} count={5000} factor={4} saturation={0} fade speed={3} />
      <Cloud width={10} depth={1.5} segments={2} depthTest={false} />
      {/* 그림자를 띄울 부분 */}
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </>
  );
};

export default Scene;
