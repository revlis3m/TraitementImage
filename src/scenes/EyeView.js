// src/scenes/EyeView.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../styles/Scene.css';

const EyeView = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scène
    const scene = new THREE.Scene();

    // Caméra
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio); // Ajuster la densité de pixels
    currentMount.appendChild(renderer.domElement);

    // Lumière
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Contrôles de la souris
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Inertia
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 1000;

    // Charger le modèle GLB
    const loader = new GLTFLoader();
    loader.load(
      '/models/eye.glb', // Chemin du fichier GLB
      (gltf) => {
        const object = gltf.scene;
        // Agrandir le modèle
        object.scale.set(130, 130, 130); // Ajustez les valeurs pour la mise à l'échelle souhaitée
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      light.position.copy(camera.position); // Faire suivre la lumière à la caméra
      renderer.render(scene, camera);
    };
    animate();

    // Réajuster la taille du rendu lors du redimensionnement de la fenêtre
    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="threejs-container" ref={mountRef}></div>;
};

export default EyeView;
