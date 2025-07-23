import { OrbitControls, Environment, PerspectiveCamera, CubeCamera } from "@react-three/drei";
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

const Scene = () => {
  const cubeRef = useRef()
  // useFrame 내의 람다 함수를 호출
  // useFrame : 이전 프레임부터 현재까지의 간격
  useFrame((_,delta)=>{
    // rotation : 회전, scale : 크기변환, translate : 이동
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta
  })
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />
      {/* PerspectiveCamera : 원근감, OrthographicCamera : , makeDefault : 원점 */}
      {/* fov(field of view) : 시야각 */}
      {/* <PerspectiveCamera makeDefault position={[0,0,5]} fov={75}/> */}
      {/* resolution : 해상도 */}
      <CubeCamera resolution={1024} frames={1}>
        {(texture)=>(<mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial envMap={texture} roughness={0} metalness={0.9} />
        </mesh>)}
      </CubeCamera>
      <mesh ref={cubeRef} position-z={5}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
      {/* <mesh position-y={2} position-z={5}>
        <sphereGeometry />
        <meshBasicMaterial color="red"/>
      </mesh> */}
    </>
  );
};

export default Scene;
