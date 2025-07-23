import { PivotControls } from '@react-three/drei'
import React from 'react'

// pivot = 축을 중심으로 회전
const PivotControl = () => {
  return (
    <PivotControls anchor={[-1,2,0]} depthTest={false} lineWidth={7}
    scale={2} axisColors={['red', 'green', 'cyan']}>
        <mesh position-x={2} scale={2}>
            <boxGeometry />
            <meshBasicMaterial color="purple" />
        </mesh>
    </PivotControls>
  )
}

export default PivotControl
