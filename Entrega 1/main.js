import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sphere rgb
const geometrys = new THREE.SphereGeometry(1, 32, 16);
const materials = new THREE.MeshBasicMaterial({ color: "rgb(100, 0, 200)", wireframe: true });
const sphere = new THREE.Mesh(geometrys, materials);
sphere.position.x = 3;
scene.add(sphere);

// Cube HEX
const geometryc = new THREE.BoxGeometry(1, 1, 1);
const materialc = new THREE.MeshBasicMaterial({ color: 0xff0000});
const cube = new THREE.Mesh(geometryc, materialc);
scene.add(cube);

// Prism rbg%
const geometryp = new THREE.SphereGeometry(1, 5, 2);
const materialp = new THREE.MeshBasicMaterial({ color: "rgb(0%,15%,100%)"});
const prism = new THREE.Mesh(geometryp, materialp);
prism.position.x = -3;
scene.add(prism);


camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    prism.rotation.x += 0.01;
    prism.rotation.y += 0.01;
    renderer.render(scene, camera);
}renderer.setAnimationLoop(animate);