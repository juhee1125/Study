import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
import { useRef } from "react";

//1)react three rapier Github page: https://pmndrs.github.io/react-three-rapier/
//2)rapier official page:https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties

const PhysicsScene = () => {
  const cubeRef = useRef()
  const secondCubeRef = useRef()
  const cubeClickHandler = () => {
    // cubeRef.current.addForce(
    //   {x:-10, y:, z:0}
    // )
    // cubeRef.current.applyImpulseAtPoint(
    //   {x:0, y:7, z:0},
    //   {x:2, y:0, z:0},
    // )
    // cubeRef.current.addTorque(
    //   {x:0, y:5, z:0}
    // )
    cubeRef.current.applyTorqueImpulse(
      {x:0, y:5, z:0}
    )
  }
  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse(
      {x:8, y:0, z:0}
    )
  }
  return (
    <Physics>
      <RigidBody ref={cubeRef} onCollisionEnter={()=>{
        console.log("collision 발생")
      }} onCollisionExit={()=>console.log("충돌을 빠져나가다")}
      onSleep={()=>console.log("충돌에서 잠들다")}
      onWake={()=>console.log("잠든놈을 깨운다")}
      // friction : 마찰력
      gravityScale={1} restitution={1} friction={1}>
        <mesh castShadow position={[1.5, 1.5, 0]} onClick={cubeClickHandler}>
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
