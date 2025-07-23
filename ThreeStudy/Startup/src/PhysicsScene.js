import React from 'react'
import { Physics, RigidBody } from "@react-three/rapier";

const PhysicsScene = () => {
  return (
    // gravity=중력, 9.81=중력가속도(g)
    // F(힘)=m(질량)a(가속도)
    <Physics gravity={[0,-9.81,0]}>
        <RigidBody>
            <mesh castShadow position={[0,1.5,0]}>
                <boxGeometry />
                <meshStandardMaterial color="#CC3941" />
            </mesh>
        </RigidBody>
        <RigidBody type='fixed'>
            <mesh rotation-x={-Math.PI*0.5} position-y={-1} receiveShadow>
                <boxGeometry args={[8,8,0.35]} />
                <meshStandardMaterial color="#C7CAC7" />
            </mesh>
        </RigidBody>
    </Physics>
  )
}

export default PhysicsScene
