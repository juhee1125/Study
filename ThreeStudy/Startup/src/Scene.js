import { OrbitControls } from "@react-three/drei";
import { a, useSprings, useTrail } from "@react-spring/three";
import PhysicsScene from "./PhysicsScene";

const Scene = () => {

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      {/* directionalLight=직선광 */}
      <directionalLight position={[2,2,3]} castShadow />
      <PhysicsScene />

    </>
  );
};

export default Scene;
