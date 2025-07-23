import { OrbitControls } from "@react-three/drei";
import Custom from "./Custom";
import Custom1 from "./Custom1";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <axesHelper args={[1]}/>
      <gridHelper args={[20,20,0x00ff00,'white']}/>
  <Custom1 />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
