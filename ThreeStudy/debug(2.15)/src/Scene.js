import { OrbitControls } from "@react-three/drei";
import {button, useControls} from 'leva'

const Scene = () => {
  const {position, color, wireframe, scale} = useControls({
    position:{value:{x:0, y:0, z:0}, min:-10, max:10, step:0.01},
    color:"green",
    wireframe:false,
    얍:button(()=>console.log("눌렸어")),
    scale:{options:[1,2,3]}
  })
  // console.log(levaControls)
  return (
    <>
      <OrbitControls />

      <ambientLight />
      <directionalLight position={[0, 2, 4]} />

      <mesh position={[position.x, position.y, position.z]}
      scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
    </>
  );
};
export default Scene;
