import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { soundFx } from '../utils/soundEffects';

export default function ThreeHeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch (e) {
      console.warn("WebGL unsupported:", e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isDark = document.documentElement.classList.contains('dark');

    // 2. Quantum Cyber Hologram Geometries

    // Outer Geodesic Sphere
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x06b6d4 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.5
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x6366f1 : 0x4f46e5,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x14b8a6 : 0x0d9488,
      transparent: true,
      opacity: 0.4
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Inner Crystalline Core
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xa855f7 : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.7
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Dynamic Floating Particle Cloud
    const particleCount = 160;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: isDark ? 0x38bdf8 : 0x0ea5e9,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Smooth Mouse Tracking & Interaction
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let pulseScale = 1.0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.8;
      targetY = y * 1.8;
    };

    const handleClick = () => {
      pulseScale = 1.15;
      soundFx.playClick();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('click', handleClick);

    // 4. Dynamic Theme Sync
    const observer = new MutationObserver(() => {
      const isNowDark = document.documentElement.classList.contains('dark');
      outerMat.color.setHex(isNowDark ? 0x06b6d4 : 0x0284c7);
      innerMat.color.setHex(isNowDark ? 0xa855f7 : 0x7c3aed);
      ringMat1.color.setHex(isNowDark ? 0x6366f1 : 0x4f46e5);
      ringMat2.color.setHex(isNowDark ? 0x14b8a6 : 0x0d9488);
      particleMat.color.setHex(isNowDark ? 0x38bdf8 : 0x0ea5e9);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // 5. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Main Loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.015;

      if (!prefersReducedMotion) {
        mouseX += (targetX - mouseX) * 0.06;
        mouseY += (targetY - mouseY) * 0.06;

        outerMesh.rotation.y += 0.003;
        outerMesh.rotation.x = mouseY * 0.4;
        outerMesh.rotation.z = mouseX * 0.4;

        ring1.rotation.z += 0.005;
        ring1.rotation.x += 0.002;

        ring2.rotation.y += 0.004;
        ring2.rotation.z -= 0.003;

        innerMesh.rotation.y -= 0.006;
        innerMesh.rotation.x += 0.003;

        particles.rotation.y += 0.0012;

        // Pulse decay
        if (pulseScale > 1.0) {
          pulseScale += (1.0 - pulseScale) * 0.1;
        }
        const breath = 1.0 + Math.sin(time) * 0.03;
        outerMesh.scale.setScalar(breath * pulseScale);
        innerMesh.scale.setScalar(breath * pulseScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleClick);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[380px] md:min-h-[480px] flex items-center justify-center relative cursor-pointer"
      aria-label="Interactive 3D quantum core"
      role="img"
    />
  );
}
