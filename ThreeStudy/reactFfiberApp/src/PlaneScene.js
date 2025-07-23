import React from "react";

const PlaneScene = ({x}) => {
    return(
        <mesh position-x={x}>
            <planeGeometry/>
            <meshNormalMaterial/>
        </mesh>
    );
}

export default PlaneScene