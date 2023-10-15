import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("0x000000");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040);
scene.add(light);

/*const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); */


window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

function cones1(){
  const geometry = new THREE.CylinderGeometry( 0.5, 1.5, 2.5, 32 ); 
  const material = new THREE.MeshBasicMaterial( {color:0xa6a6a6} ); 
  const sidePart = new THREE.Mesh( geometry, material );
  sidePart.rotation.z=99;
  return sidePart;
}

function cones2(){
  const geometry = new THREE.CylinderGeometry( 1.5, 0.5, 2.5, 32 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0xa6a6a6} ); 
  const sidePart = new THREE.Mesh( geometry, material );
  sidePart.rotation.z=99;
  return sidePart;
}

function innerBody(){
  const geometry = new THREE.CylinderGeometry( 1.1, 1.1, 4.5, 32 );
  const texture = new THREE.TextureLoader().load("grey_wall.jpg");
  const material = new THREE.MeshStandardMaterial( {
    map:texture,
    } ); 
  const cylinder = new THREE.Mesh( geometry, material );
  cylinder.rotation.z=98.99;
  return cylinder;
}


function innerCones1(){
  const geometry = new THREE.CylinderGeometry( 0.1, 1.1, 2.1, 32 ); 
  const material = new THREE.MeshBasicMaterial( {color:0x000000} ); 
  const sidePart = new THREE.Mesh( geometry, material );
  sidePart.rotation.z=99;
  return sidePart;
}

function innerCones2(){
  const geometry = new THREE.CylinderGeometry( 1.1, 0.1, 2.1, 32 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
  const sidePart = new THREE.Mesh( geometry, material );
  sidePart.rotation.z=99;
  return sidePart;
}

 
function createWheels() {
    const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2.5, 10 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0X565656} ); 
    const wheel = new THREE.Mesh( geometry, material ); 
    return wheel;
    }

function wheelCover(){
  const geometry = new THREE.BoxGeometry( 5.2, 3, 0.5 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0x654321} ); 
  const cube = new THREE.Mesh( geometry, material ); 
  return cube;
}

function createEngine(){
  const geometry = new THREE.BoxGeometry( 2.5, 2, 2.5 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0xF2E34C} ); 
  const cube = new THREE.Mesh( geometry, material ); 
  return cube;
}

function createTube(){
  const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0x808080} ); 
  const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );
  cylinder.rotation.x=99;
  return cylinder;
}


function createTorpedo() {
  const torpedo = new THREE.Group();

  const backWheel1 = createWheels();
  backWheel1.position.y = -1;
  backWheel1.position.x = 7;
  torpedo.add(backWheel1);  
  

  const backWheel2 = createWheels();
  backWheel2.position.y = -1;
  backWheel2.position.x = 8;
  torpedo.add(backWheel2);

  const backWheel3 = createWheels();
  backWheel3.position.y = -1;
  backWheel3.position.x = 9;
  torpedo.add(backWheel3);

  const backWheel0 = createWheels();
  backWheel0.position.y = -1;
  backWheel0.position.x = 6;
  torpedo.add(backWheel0);
  
  const frontWheel0 = createWheels();
  frontWheel0.position.y = -1;  
  frontWheel0.position.x = -6;
  torpedo.add(frontWheel0);
  
  const frontWheel1 = createWheels();
  frontWheel1.position.y = -1;  
  frontWheel1.position.x = -7;
  torpedo.add(frontWheel1);
  
  const frontWheel2 = createWheels();
  frontWheel2.position.y = -1;  
  frontWheel2.position.x = -8;
  torpedo.add(frontWheel2);
  
  const frontWheel3 = createWheels();
  frontWheel3.position.y = -1;  
  frontWheel3.position.x = -9;
  torpedo.add(frontWheel3);

  const geometry = new THREE.CylinderGeometry( 1.5, 1.5, 5, 32 );
  const material = new THREE.MeshBasicMaterial( {color: 0xa6a6a6} ); 
  const cylinder = new THREE.Mesh( geometry, material );
  cylinder.rotation.z=98.99;
  
  
  cylinder.position.x=0;
  cylinder.position.y=-0.5;
  cylinder.position.z=2.3;
  torpedo.add(cylinder);

  const tube = createTube();
  tube.position.z=3.5;
  tube.position.y=-0.5;
  torpedo.add(tube);

  const cone1 = cones1();
  cone1.position.z= 2.3;
  cone1.position.y = -0.38;
  cone1.position.x = 3.75;
  torpedo.add(cone1);

  const cone2 = cones2();
  cone2.position.z = 2.3;
  cone2.position.y = -0.64;
  cone2.position.x = -3.75;
  torpedo.add(cone2);

  const innerPart = innerBody();
  innerPart.position.x=0;
  innerPart.position.y=-0.5;
  innerPart.position.z=2.3;
  torpedo.add(innerPart);

  const innerCone1 = innerCones1();
  innerCone1.position.z= 2.3;
  innerCone1.position.y = -0.38;
  innerCone1.position.x = 3.3;
  torpedo.add(innerCone1);

  const innerCone2 = innerCones2();
  innerCone2.position.z = 2.3;
  innerCone2.position.y = -0.64;
  innerCone2.position.x = -3.3;
  torpedo.add(innerCone2);

  const frontCube = wheelCover();
  frontCube.position.x=-7.5;
  frontCube.position.y=-1;
  frontCube.position.z=0.75;
  torpedo.add(frontCube);

  const backCube = wheelCover();
  backCube.position.x=7.5;
  backCube.position.y=-1;
  backCube.position.z=0.75;
  torpedo.add(backCube);

  const engineBlock1 = createEngine();
  engineBlock1.position.x=-6.4;
  engineBlock1.position.y=-1;
  engineBlock1.position.z=2;
  torpedo.add(engineBlock1);

  const engineBlock2 = createEngine();
  engineBlock2.position.x=6.2;
  engineBlock2.position.y=-1;
  engineBlock2.position.z=2.2;
  torpedo.add(engineBlock2);

  return torpedo;

}

const torpedo = createTorpedo();
scene.add(torpedo);
camera.position.z=5;

const controls = new OrbitControls(camera,renderer.domElement);

function animation(){
    controls.update();
    requestAnimationFrame(animation);
    renderer.render(scene,camera);
}

animation();