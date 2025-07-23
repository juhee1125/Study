import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAnimations, useGLTF } from "@react-three/drei";

const Model = () => {
    // const model = useLoader(GLTFLoader,"./model/dog.glb")
    const model = useGLTF("./model/dog.glb")
    const animation = useAnimations(model.animations, model.scene)
    console.log(model)
    console.log('animation: ' ,animation)
    // actions 뒤에 무엇을 넣냐에 따라 효과가 달라짐
    useEffect(() => {
        // animation.actions.Idle.play()
        // animation.actions.ClickedOn.play()
        // animation.actions.Congratulate.play()
        animation.actions.Pleased.play()
    },[])
    return(
        <primitive position-x={0.1} position-y={-0.4} position-z={-0.2} object={model.scene}/>
    )
}
// pre(미리)load(가져온다)
useGLTF.preload("./model/dog.glb")
export default Model