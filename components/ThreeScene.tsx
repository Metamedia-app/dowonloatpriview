'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle field
function Particles({ count = 2000 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.02;
      points.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4f8ef7"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating glowing orb
function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.4;
      meshRef.current.position.x = Math.cos(t * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.z += 0.002;
    }
    if (lightRef.current) {
      lightRef.current.position.y = Math.sin(t * 0.5) * 0.4;
      lightRef.current.position.x = Math.cos(t * 0.3) * 0.3;
      lightRef.current.intensity = 2 + Math.sin(t * 0.8) * 0.5;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} color="#4f8ef7" intensity={2.5} distance={8} />
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <icosahedronGeometry args={[1.4, 3]} />
        <meshStandardMaterial
          color="#1a3a7a"
          emissive="#4f8ef7"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          wireframe={false}
        />
      </mesh>
    </>
  );
}

// Rotating torus ring
function TorusRing() {
  const torusRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, -2]}>
      <torusGeometry args={[2.2, 0.04, 16, 120]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={0.8}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

// Second ring — outer
function TorusRing2() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.2;
      ref.current.rotation.z += delta * 0.1;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]} rotation={[0.5, 0, 0]}>
      <torusGeometry args={[3.0, 0.025, 16, 120]} />
      <meshStandardMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={0.6}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#4f8ef7" intensity={1} />
      <pointLight position={[-5, -3, -5]} color="#7c3aed" intensity={0.8} />
      <Particles count={1800} />
      <GlowOrb />
      <TorusRing />
      <TorusRing2 />
    </Canvas>
  );
}
