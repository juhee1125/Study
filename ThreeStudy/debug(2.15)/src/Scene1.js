import { useState } from "react";

const Scene1 = () => {
  const [active, setActive]=useState(false)
  const [cnt, setcnt]=useState(0)

  const colorChange=(cnt)=>{
    var color="#"+cnt
    console.log(color)
  }
  const clickHandler=()=>{
    setcnt(cnt+1)
    colorChange(cnt)
    setActive(!active)
  }
  return (
    <>
      <mesh onWheel={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={active?"red":"orange"}/>
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};

export default Scene1;
