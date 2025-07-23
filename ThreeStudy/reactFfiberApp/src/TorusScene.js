import React from "react";

const TorusScene = ({x}) => {
    return(
        <mesh position-x={x}>
            <torusKnotGeometry/>
            <meshNormalMaterial/>
        </mesh>
    );
}

export default TorusScene