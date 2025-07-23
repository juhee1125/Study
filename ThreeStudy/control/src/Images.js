import { Image, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'

const Images = () => {
    const {height, width} = useThree(state=>state.viewport)
    const scroll = useScroll()
    const groupRef = useRef()
    useFrame(()=>{
      groupRef.current.children[0].material.zoom = 1+scroll.range(0,0.33)/3
      groupRef.current.children[1].material.zoom = 1+scroll.range(0.33,0.33)
      groupRef.current.children[2].material.zoom = 1+scroll.range(0.33,0.33)
      groupRef.current.children[3].material.zoom = 1+scroll.range(0.33,0.33)
      groupRef.current.children[4].material.zoom = 1+scroll.range(2/3,1/3)/3
      groupRef.current.children[4].material.grayscale = 1+scroll.range(2/3,1/3)/3
      groupRef.current.children[5].material.zoom = 2-scroll.range(2/3,1/3)
      console.log(scroll.range(0,0.33))
    })
    // const three = useThree()
    // console.log(three)
  return (
    <group ref={groupRef}>
        <Image url="/images/1.jpg" scale={[4, height, 1]} 
        position={[-2, 0, 1]} 
        grayscale={0} 
        zoom={1} />
        <Image url="/images/2.jpg" scale={[1, 3, 1]} 
        position={[-2, -3, -height, 2]} />
        <Image url="/images/3.jpg" scale={[1, 2, 1]} 
        position={[-0.6, -height, 3]} />
        <Image url="/images/4.jpg" scale={0.5} 
        position={[0.75, -height, 3.5]} />
        <Image url="/images/5.jpg" scale={[1.5, 3, 1]} 
        position={[0, -height*1.5, 2.5]} 
        grayscale={1} />
        <Image url="/images/6.jpg" scale={[width, height/2, 1]} 
        position={[0, -height*2-height/4, 0]} />
    </group>
  )
}

export default Images
