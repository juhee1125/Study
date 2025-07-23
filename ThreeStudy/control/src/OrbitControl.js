import React from 'react'
import {OrbitControls} from '@react-three/drei'

const OrbitControl = () => {
  return(
    // <></> = 프레그먼트
    <>
    <OrbitControls 
    // enableDamping={true} dampingFactor={0.05}
    // autoRotate={true} autoRotateSpeed={40} 
    // Azimuth = 방위각, Polar = 극각
    maxAzimuthAngle={Math.PI/2}
    minAzimuthAngle={-Math.PI/2}
    maxPolarAngle={Math.PI/2}
    minPolarAngle={-Math.PI/2}
    />
    <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#8900f7" />
    </mesh>
    </>
  )
}

export default OrbitControl
