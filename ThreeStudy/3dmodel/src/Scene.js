import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import Bike from "./Bike";

const Scene = () => {
  return (
    <>
      {/* 주변광 */}
      <ambientLight intensity={4}/>
      <OrbitControls />
      {/* Suspense = 네트워크가 늦어지면 model은 멈추고 나머지만 보여짐 */}
      {/* fallback = fallback부터 보여지고 그다음 model로 교체 (동시에 출력x) */}
      {/* scale = 크기조정, rotation = 회전, translation = 이동 */}
      <Suspense fallback={
      <mesh scale-y={2} scale-x={4} rotation-x={20}>
        <boxGeometry />
        <meshBasicMaterial wireframe/>
      </mesh>
      }>
      {/* hyper에서 변환할 파일이 있는 경로로 이동해준 다음 `npx gltfjsx 파일명`*/}
      {/* <Bike/> */}
        <Model/>
      </Suspense>
    </>
  );
};

export default Scene;