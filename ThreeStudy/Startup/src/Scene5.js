import {a, useSprings} from "@react-spring/three"
import {OrbitControls} from "@react-three/drei"

const Scene = () => {
  const items=[
    {initialPosition:[-3.5,0,0], finalPosition:[-1.5,0,0]},
    {initialPosition:[0,3.5,0], finalPosition:[0,0,0]},
    {initialPosition:[3.5,0,0], finalPosition:[1.5,0,0]}
  ]
  // const springs = useSprings(5,[
  //   {from:{position:[-3.6,0,0]},to:{position:[-1.5,0,0]}},
  //   {from:{position:[0,3.5,0]},to:{position:[0,0,0]}},
  //   {from:{position:[3.5,0,0]},to:{position:[1.5,0,0]}},
  //   {from:{position:[0,4.5,0]},to:{position:[2.5,0,0]}},
  //   {from:{position:[3.5,4.5,0]},to:{position:[-2.5,0,0]}}
  // ])
  const springs = useSprings(items.length, 
    items.map(i=>({
      from:{position:i.initialPosition},
      to:{position:i.finalPosition}
    }))
  )
  const colors=["orange","red","blue"]

  return (
    <>
      <OrbitControls />
      {springs.map(({position}, idx)=> <a.mesh key={Math.random()} scale={0.5} position={position}>
        <boxGeometry />
        <meshBasicMaterial color={colors[idx]} />
      </a.mesh>)}
    </>
  );
};

export default Scene;
