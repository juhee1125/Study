import { OrbitControls, PositionalAudio } from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [play, setplay] = useState(false)
  const clickHandler =()=>{
    setplay(!play)
  }
  return (
    <>
    <OrbitControls />
    {play && <PositionalAudio url="./sound/sound.mp3" autoplay loop distance={5} />}
    <mesh onClick={clickHandler}>
      <boxGeometry />
      <meshBasicMaterial color="purple" />
    </mesh>
    </>
  );
};

export default Scene;
