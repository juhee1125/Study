import React, { useRef } from "react";
import {useLoader} from "@react-three/fiber"
//import { SphereGeometry } from "three";
import * as THREE from 'three'
import { useEffect } from "react";
const Particles =()=>{
        const ref = useRef(null)
        const texture = useLoader(THREE.TextureLoader,"./img/등불.jpg")

        useEffect(() => {
            const count=1000
            const positions = new Float32Array(count*32)
            // 4byte = 32bit, 1byte = 8bit
            // float = 4byte
            const colors = new Float32Array(count*32)

            for (let i = 0; i < positions.length; i++) {
                positions[i] = (Math.random()-0.5)*10
                colors[i] = Math.random()
            }
            // XYZ UV RGB
            ref.current.setAttribute("position",new THREE.BufferAttribute(positions, 3)) // XYZ
            ref.current.setAttribute("color",new THREE.BufferAttribute(colors, 3)) // RGB
        }, [])
    return(
        <points>
            <sphereGeometry/>
            <bufferGeometry ref={ref}/>
            <pointsMaterial size={0.1} vertexColors color={"yellow"} map={texture}
            transparent alphaMap={texture} depthWrite={false}
            />
        </points>
    );
};

export default Particles