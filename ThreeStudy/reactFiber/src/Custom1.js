import React from "react";
import { MeshBasicMaterial } from "three";
import * as THREE from 'three';

const Custom1 =()=>{
    return(
        <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, Math.PI/2]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="hotpink" />
        </mesh>
    )
}
export default Custom1