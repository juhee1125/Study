import "./style.css"
import * as THREE from "three"
//Scene
const scene = new THREE.Scene(); // 반환된 타입이 상수형 변수

// Mesh1(객체)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });

const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1

scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height
); // near value is 1, and far value is 2000
camera.position.z=3
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size

// clock
const clock = new THREE.Clock()

// Animate
const animate = ()=>{
    // GetElapsedTime (경과된 시간 획득)
    var elapsedTime = clock.getElapsedTime() 
    elapsedTime%=2
    // console.log(elapsedTime)
    // x축과 y축의 회전을 계속 갱신
    mesh.rotation.x=elapsedTime*Math.PI*3
    mesh.rotation.y=elapsedTime*Math.PI*(1/3)
    if (elapsedTime<2.0){
        mesh.position.z=elapsedTime
    }
    // else if (elapsedTime>2.0) {
    // elapsedTime=0 // 대입연산자로 할당(Asignment) 불가
    // }
    renderer.render(scene, camera); //display what the camera in the scene captured
    window.requestAnimationFrame(animate)
}
animate()