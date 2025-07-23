import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Tube } from "@react-three/drei";
import * as THREE from 'three';

const root = ReactDOM.createRoot(document.getElementById("root"));
const creatingCanvasHandler = (state) =>{
  console.log("cnavas가 생성되었어요", state)
  state.gl.setClearColor(new THREE.Color("rgb(255, 255, 0)"),0.5)
}
root.render(
  <>
  {/* 
  frustum : near와 far 사이 공간
    near clipping plane, far clipping plane
  fov(Field of View) : 시야각
  */}
  {/* 
  gl : graphic library
  alpha : 투명도
   */}
    <Canvas gl={{antialias:false, alpha:true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [2, 2, 6],
      }}
      onCreated={creatingCanvasHandler}
    >
      <Scene />
    </Canvas>
  </>
);
