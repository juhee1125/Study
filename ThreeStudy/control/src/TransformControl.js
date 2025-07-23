import { TransformControls } from '@react-three/drei'
import React from 'react'

const TransformControl = () => {
  return (
    <TransformControls position-x={2} mode='rotate'>
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="purple" />
        </mesh>
    </TransformControls>
  )
}

export default TransformControl
