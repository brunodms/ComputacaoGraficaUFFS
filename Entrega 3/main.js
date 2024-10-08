import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Esfera
const geometrys = new THREE.SphereGeometry(1, 24, 16);
const materials = new THREE.MeshBasicMaterial({ color: "rgb(100, 0, 200)" });
const sphere = new THREE.Mesh(geometrys, materials);
sphere.position.x = 0;
scene.add(sphere);

// Arestas da esfera
const geometryw = new THREE.SphereGeometry(1, 24, 16);
const materialw = new THREE.MeshBasicMaterial({
  color: "rgb(0, 0, 0)",
  wireframe: true,
});
const spherew = new THREE.Mesh(geometryw, materialw);
spherew.position.x = 0;
scene.add(spherew);

camera.position.z = 5;

function animate() {
  spherew.rotation.x += 0.01;
  spherew.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// Interações com o teclado
document.addEventListener("keydown", (event) => {
  switch (event.key) {
      // Apertar W para a esfera ir para cima
    case "w":
      sphere.position.y += 0.1;
      spherew.position.y += 0.1;
      break;
      // Apertar A para a esfera ir para a esquerda
    case "a":
      sphere.position.x -= 0.1;
      spherew.position.x -= 0.1;
      break;
      // Apertar S para s esfera ir para baixo
    case "s":
      sphere.position.y -= 0.1;
      spherew.position.y -= 0.1;
      break;
      // Apertar D para a esfera ir para a direita
    case "d":
      sphere.position.x += 0.1;
      spherew.position.x += 0.1;
      break;
      // Apertar X para a esfera ir para trás
    case "x":
      sphere.position.z -= 0.1;
      spherew.position.z -= 0.1;
      break;
      // Apertar X para a esfera vir para frente
    case "z":
      sphere.position.z += 0.1;
      spherew.position.z += 0.1;
      break;
  }
});

// Interações com o mouse
renderer.domElement.addEventListener("mousedown", (event) => {
    // Ao clicar no mouse é alterada a cor da esfera para algum RGB aleatorio
  sphere.material.color.setRGB(Math.random(), Math.random(), Math.random());
});
