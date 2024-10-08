import * as THREE from "three";

const cena = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Function to generate a random color
function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Cubo
const geometriaCubo = new THREE.BoxGeometry(1, 1, 1);
const materialCubo = new THREE.MeshBasicMaterial();
const cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cubo.material.color.setStyle(getRandomColor());
cubo.position.x = -5;
cena.add(cubo);

// Cubo wireframe
const materialCuboWire = new THREE.MeshBasicMaterial({
  color: "rgb(0, 0, 0)",
  wireframe: true,
});
const cuboWire = new THREE.Mesh(geometriaCubo, materialCuboWire);
cuboWire.position.x = -5;
cena.add(cuboWire);

// Esfera 
const geometriaEsfera = new THREE.SphereGeometry(1, 24, 16);
const materialEsfera = new THREE.MeshBasicMaterial();
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
esfera.material.color.setStyle(getRandomColor());
esfera.position.x = -2;
cena.add(esfera);

// Esfera wireframe
const materialEsferaWire = new THREE.MeshBasicMaterial({
  color: "rgb(0, 0, 0)",
  wireframe: true,
});
const esferaWire = new THREE.Mesh(geometriaEsfera, materialEsferaWire);
esferaWire.position.x = -2;
cena.add(esferaWire);

const materialEsfera2 = new THREE.MeshBasicMaterial();
const esfera2 = new THREE.Mesh(geometriaEsfera, materialEsfera2);
esfera2.material.color.setStyle(getRandomColor());
esfera2.position.x = 2;
cena.add(esfera2);

const esferaWire2 = new THREE.Mesh(geometriaEsfera, materialEsferaWire);
esferaWire2.position.x = 2;
cena.add(esferaWire2);

const materialCubo2 = new THREE.MeshBasicMaterial();
const cubo2 = new THREE.Mesh(geometriaCubo, materialCubo2);
cubo2.material.color.setStyle(getRandomColor());
cubo2.position.x = 5;
cena.add(cubo2);

const cuboWire2 = new THREE.Mesh(geometriaCubo, materialCuboWire);
cuboWire2.position.x = 5;
cena.add(cuboWire2);

// Configura posição inicial da câmera
camera.position.z = 10;

let flag = 1;
let contadorTranslacao = 0;

// No primeiro: realizar uma operação de translação nos 3 eixos;
function manipularTranslacao() {
  const velocidade = 0.01;
  const tamanhoQuadrado = 2;

  if (contadorTranslacao < tamanhoQuadrado) {
    cubo.translateX(-velocidade);
    cuboWire.translateX(-velocidade);
    cubo2.translateX(velocidade);
    cuboWire2.translateX(velocidade);
    contadorTranslacao += velocidade;
  } else if (contadorTranslacao < 2 * tamanhoQuadrado) {
    cubo.translateY(-velocidade);
    cuboWire.translateY(-velocidade);
    cubo2.translateY(velocidade);
    cuboWire2.translateY(velocidade);
    contadorTranslacao += velocidade;
  } else if (contadorTranslacao < 3 * tamanhoQuadrado) {
    cubo.translateX(velocidade);
    cuboWire.translateX(velocidade);
    cubo2.translateX(-velocidade);
    cuboWire2.translateX(-velocidade);
    contadorTranslacao += velocidade;
  } else if (contadorTranslacao < 4 * tamanhoQuadrado) {
    cubo.translateY(velocidade);
    cuboWire.translateY(velocidade);
    cubo2.translateY(-velocidade);
    cuboWire2.translateY(-velocidade);
    contadorTranslacao += velocidade;
  } else {
    contadorTranslacao = 0;
  }
}

// No segundo: realizar uma operação de escalonamento nos 3 eixos;
function manipularEscalonamento() {
  if (flag === 1) {
    esfera.scale.x += 0.01;
    esfera.scale.y += 0.01;
    esfera.scale.z += 0.01;

    esferaWire.scale.x += 0.01;
    esferaWire.scale.y += 0.01;
    esferaWire.scale.z += 0.01;

    cubo2.scale.x += 0.01;
    cubo2.scale.y += 0.01;
    cubo2.scale.z += 0.01;

    cuboWire2.scale.x += 0.01;
    cuboWire2.scale.y += 0.01;
    cuboWire2.scale.z += 0.01;
  } else {
    esfera.scale.x -= 0.01;
    esfera.scale.y -= 0.01;
    esfera.scale.z -= 0.01;

    esferaWire.scale.x -= 0.01;
    esferaWire.scale.y -= 0.01;
    esferaWire.scale.z -= 0.01;

    cubo2.scale.x -= 0.01;
    cubo2.scale.y -= 0.01;
    cubo2.scale.z -= 0.01;

    cuboWire2.scale.x -= 0.01;
    cuboWire2.scale.y -= 0.01;
    cuboWire2.scale.z -= 0.01;
  }

  if (esfera.scale.x > 1.5) {
    flag = 2;
  }
  if (esfera.scale.x < 0.5) {
    flag = 1;
  }
}

// Função de animação
function animar() {
  manipularTranslacao();
  manipularEscalonamento();

// No terceiro: Realizar uma operação de rotação nos 3 eixos;
  esfera2.rotation.x += 0.01;
  esfera2.rotation.y += 0.01;
  esfera2.rotation.z += 0.01;
  esferaWire2.rotation.x += 0.01;
  esferaWire2.rotation.y += 0.01;
  esferaWire2.rotation.z += 0.01;


// No quarto: realizar as 3 operações(translação, escalonamento, rotação);
  cubo2.rotation.x += 0.01;
  cubo2.rotation.y += 0.01;
  cubo2.rotation.z += 0.01;
  cuboWire2.rotation.x += 0.01;
  cuboWire2.rotation.y += 0.01;
  cuboWire2.rotation.z += 0.01;

  renderizador.render(cena, camera);
}

// Inicia o loop de animação
renderizador.setAnimationLoop(animar);
