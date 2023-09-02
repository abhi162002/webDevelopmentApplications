import { useEffect } from 'react';
import * as THREE from 'three';

import SceneInit from './lib/SceneInit';
import { UserButton } from '@clerk/clerk-react';

function App() {
    const test = new SceneInit('myThreeJsCanvas');
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    const sphereGeometry = new THREE.SphereGeometry(16, 16, 16);
    const sphereMaterial = new THREE.MeshNormalMaterial();
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

    const coneGeometry = new THREE.ConeGeometry(16, 16, 16);
    const coneMaterial = new THREE.MeshNormalMaterial();
    const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);

    const cylinderGeometry = new THREE.CylinderGeometry(16, 16, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial();
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

  useEffect(() => {
    test.initialize();
    test.animate();
  }, []);

  const showBox = () => {
    test.scene.add(boxMesh);
  };
  const showSphere = () => {
    test.scene.add(sphereMesh);
  };
  const showCone = () => {
    test.scene.add(coneMesh);
  };
  const showCylinder = () => {
    test.scene.add(cylinderMesh);
  };
  const clearScreen = () => {
    test.scene.remove(cylinderMesh);
    test.scene.remove(boxMesh);
    test.scene.remove(sphereMesh);
    test.scene.remove(coneMesh);
  };

  return (
    <>
      <div>
        <div className="md:flex md:justify-center">
          <div className="md:flex md:justify-center mb-10">
            <UserButton></UserButton>
          </div>
          <div id="shapes" className="text-center">
            <button id="sq" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2" onClick={showBox}>
              Square
            </button>
            <button id="sp" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2" onClick={showSphere}>
              Sphere
            </button>
            <button id="co" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2" onClick={showCone}>
              Cone
            </button>
            <button id="cy" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2" onClick={showCylinder}>
              Cylinder
            </button>
            <button id="clear" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2" onClick={clearScreen}>
              Clear Screen
            </button>
          </div>
        </div>

        <canvas id="myThreeJsCanvas" />
      </div>
    </>
  );
}

export default App;