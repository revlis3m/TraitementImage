// src/components/HeartModel.js
import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

const Model = () => {
  const materials = useLoader(MTLLoader, '/models/HumanHeart_OBJ.mtl');
  const obj = useLoader(OBJLoader, '/models/HumanHeart_OBJ.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.1} />;
};

const HeartModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default HeartModel;
