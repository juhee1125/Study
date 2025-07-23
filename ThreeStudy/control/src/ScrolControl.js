import { Scroll, ScrollControls, useGLTF } from '@react-three/drei'
import React from 'react'
import Images from './Images'

const ScrolControl = () => {
    const model = useGLTF("./model/model.gltf")
  return (
    <ScrollControls pages={3} damping={0.4} infinite={true} horizontal>
        <ambientLight intensity={4} />
        <directionalLight />
        <Scroll>
            <primitive object={model.scene} position={[-1.5, 1, 0]} scale={0.5} />
            <Images />
        </Scroll>
        <Scroll html>
            <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
                to
            </h1>
            <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
                be
            </h1>
            <h1
                style={{
                position: "absolute",
                top: "198.5vh",
                left: "0.5vw",
                fontSize: "40vw",
                }}
            >
                home
            </h1>
        </Scroll>
    </ScrollControls>
  )
}

export default ScrolControl
