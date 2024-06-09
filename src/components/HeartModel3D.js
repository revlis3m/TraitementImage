// src/components/HeartModel3D.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const HeartModel3D = () => {
  const { scene } = useGLTF('/path/to/your/3d/model.glb');
  
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={0.5} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default HeartModel3D;
