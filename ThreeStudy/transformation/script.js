// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group()

// Mesh1(객체)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });

const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1

// Mesh2
const geometryT = new THREE.BoxGeometry(1, 1, 1)
const materialT = new THREE.MeshBasicMaterial({color:"green"})

const meshT = new THREE.Mesh(geometryT, materialT)
meshT.position.y = 2

// Mesh3
const geometryC = new THREE.CircleGeometry(3, 20);
const materialC = new THREE.MeshBasicMaterial({color: 0xffff00})

const circle = new THREE.Mesh(geometryC, materialC)
circle.position.z = -10
circle.position.x = -5

group.add(mesh, meshT, circle)
group.position.x = 3
// group.position.y = -1
scene.add(group);

// 좌표축(AxesHelper)
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, and far value is 2000
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size
renderer.render(scene, camera); //display what the camera in the scene captured

// 문)Mesh 추가