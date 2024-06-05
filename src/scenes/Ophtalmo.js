// src/scenes/Ophtalmo.js
import React, { useRef, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import rainbowTexture from '../assets/textures/rainbow.jpg';
import '../styles/Ophtalmo.css';

const Ophtalmo = () => {
  const { user } = useContext(UserContext);
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(rainbowTexture);

    // Sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth movement
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="department-container">
      <h1>Département Ophtalmologie</h1>
      <p>Nom: {user.name}</p>
      <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
      <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
      <div ref={mountRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default Ophtalmo;
