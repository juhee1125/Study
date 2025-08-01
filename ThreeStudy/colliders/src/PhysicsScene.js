import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

const PhysicsScene = () => {
  const cubeRef = useRef();
  const spinner = useRef();
  const isJump = useRef(false);

  const allKeys = useKeyboardControls((keys) => keys);
  console.log(allKeys);

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };

  const cubeMovementHandler = () => {
    if (allKeys.forward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: -0.3 });
    }
    if (allKeys.backward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: 0.3 });
    }
    if (allKeys.leftward) {
      cubeRef.current.applyImpulse({ x: -1, y: 0, z: 0 });
    }
    if (allKeys.rightward) {
      cubeRef.current.applyImpulse({ x: 1, y: 0, z: 0 });
    }

    if (isJump.current) {
      if (allKeys.jump) {
        console.log("jump");
        cubeRef.current.applyImpulse({ x: 0, y: 40, z: 0 });
        isJump.current = false;
      }
    }
  };

  useFrame((state) => {
    const getElapsedTime = state.clock.getElapsedTime();
    // console.log(getElapsedTime);

    //1) setNextKinematicTranslation({x:0,y:0,z:0}) //Moving
    //2) setNextKinematicRotation(Quaternion)    //Rotating

    //A) Moving the Spinner
    spinner.current.setNextKinematicTranslation({
      x: 0,
      y: Math.abs(Math.sin(getElapsedTime)),
      z: 0,
    });

    //A) Rotating the Spinner
    const eulerRotationAngle = new THREE.Euler(0, getElapsedTime, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotationAngle);
    spinner.current.setNextKinematicRotation(quaternionRotation);

    //cube Movement Handler
    cubeMovementHandler();
  });

  return (
    <>
      <Physics>
        <Debug />
        <RigidBody
          ref={cubeRef}
          position={[2.5, 2.5, 0]}
          onCollisionEnter={() => (isJump.current = true)}
          onCollisionExit={() => (isJump.current = false)}
        >
          <mesh castShadow onClick={cubeClickHandler}>
            <boxGeometry args={[1.75, 1.75, 1.75]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody ref={spinner} position-y={-0.65} type="kinematicPosition">
          <mesh receiveShadow>
            <boxGeometry args={[1, 0.35, 15]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          restitution={0.5}
        >
          <mesh receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
