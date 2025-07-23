import React from 'react'
import {CameraControls, Grid} from "@react-three/drei";
import {useRef} from "react";
import {button, buttonGroup, useControls} from "leva";
import * as THREE from 'three'

const CameraControl = () => {
  const CameraControlRef = useRef()
  const {DEG2RAD} = THREE.MathUtils
  console.log(DEG2RAD) //Degree(각도) => Radian
  //2phi = 360, 2*3.14 = 6.28, 360 = 6.28
  const cameraControls = useControls("카메라 제어",
  {horizentalRotation:
    buttonGroup({
      label:"수평 R", opts:{
        "45deg":()=>CameraControlRef.current.rotate(45*DEG2RAD,0,true),
        "-90deg":()=>CameraControlRef.current.rotate(-90*DEG2RAD,0,true),
        "360deg":()=>CameraControlRef.current.rotate(360*DEG2RAD,0,true)
      }
    }),
    verticalRotation:
    buttonGroup({
      label:"수직 R", opts:{
        "20deg":()=>CameraControlRef.current.rotate(0,20*DEG2RAD,true),
        "-40deg":()=>CameraControlRef.current.rotate(0,-40*DEG2RAD,true)
      }
    }),
    // truck = 평행이동
    truckGroup:
    buttonGroup({
      label:"truck", opts:{
        "(1,0)":()=>CameraControlRef.current.truck(1,0,true),
        "(-1,0)":()=>CameraControlRef.current.truck(-1,0,true),
        "(0,1)":()=>CameraControlRef.current.truck(0,1,true),
        "(0,-1)":()=>CameraControlRef.current.truck(0,-1,true)
      }
    }),
    zoomGroup:
    buttonGroup({
      label:"zoom", opts:{
        "0.25":()=>CameraControlRef.current.zoom(0.25,true),
        "-0.25":()=>CameraControlRef.current.zoom(-0.25,true)
      }
    }),
    lookAtBox:button(()=>{
      CameraControlRef.current.setLookAt(0,1,3,9,9,9,true)
    })
  })
  return (
    <>
    {/* smoothTime = 적용시간 */}
    <CameraControls ref={CameraControlRef} smoothTime={0.1}/>
    <Grid args={[30,30]} cellSize={0.25} cellColor="#6f6f6f"
    sectionSize={1} fadeDistance={20} fadeStrength={0.75} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh>
    </>
  )
}

export default CameraControl
