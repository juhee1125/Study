import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <mesh>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Scene;
