import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
import { useRef } from "react";

//1)react three rapier Github page: https://pmndrs.github.io/react-three-rapier/
//2)rapier official page:https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties

const PhysicsScene = () => {
  const firstcubeRef = useRef()
  const secondCubeRef = useRef()
  const firstcubeClickHandler = () => {
    firstcubeRef.current.applyImpulse(
      {x:-100, y:0, z:0}
    )
  }
  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse(
      {x:5, y:0, z:0}
    )
  }
  return (
    <Physics>
      <Debug />
      <RigidBody ref={firstcubeRef} mass={0.5}>
        <mesh castShadow position={[1.5, 1.5, 0]} onClick={firstcubeClickHandler}
        scale={3}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>
      <RigidBody ref={secondCubeRef}>
        <mesh position={[-1.5,1.5,0]} onClick={secondCubeClickHandler}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default PhysicsScene;
