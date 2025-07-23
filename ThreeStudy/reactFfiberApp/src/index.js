import ReactDOM from "react-dom/client";
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import TorusScene from "./TorusScene";
import PlaneScene from "./PlaneScene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Canvas>
            <TorusScene x={7}/>
            <PlaneScene x={5}/>
        </Canvas>
    </>
);
