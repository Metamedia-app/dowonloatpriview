'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingSphere({
  position,
  color,
  size,
  speed,
  emissive,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  emissive?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initY = position[1];

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.position.y = initY + Math.sin(t) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.15;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.004;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive || color}
        emissiveIntensity={0.15}
        roughness={0.15}
        metalness={0.3}
      />
    </mesh>
  );
}

function StarShape({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.3;
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.35, 0]} />
      <meshStandardMaterial
        color="#7B2FFF"
        emissive="#7B2FFF"
        emissiveIntensity={0.35}
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
}

export default function PhoneSpheresScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} color="#EEF2FF" />
      <pointLight position={[3, 4, 3]} color="#4361EE" intensity={3} />
      <pointLight position={[-3, -2, 2]} color="#7B2FFF" intensity={2} />
      <pointLight position={[0, 0, 5]} color="#ffffff" intensity={1} />

      {/* Big blue sphere top right */}
      <FloatingSphere position={[2.2, 1.8, -0.5]} color="#4CC9F0" size={0.75} speed={0.5} />
      {/* Purple mid left */}
      <FloatingSphere position={[-2.2, 0.5, -0.3]} color="#7B2FFF" size={0.6} speed={0.6} />
      {/* Pink bottom right */}
      <FloatingSphere position={[2.0, -1.5, 0.2]} color="#F72585" size={0.45} speed={0.8} />
      {/* Yellow small top left */}
      <FloatingSphere position={[-1.8, 2.1, 0.1]} color="#F48C06" size={0.38} speed={0.7} />
      {/* Green small bottom left */}
      <FloatingSphere position={[-1.5, -1.8, -0.2]} color="#06D6A0" size={0.35} speed={0.9} />
      {/* Cyan tiny */}
      <FloatingSphere position={[1.0, 2.4, 0.5]} color="#4361EE" size={0.28} speed={1.1} />

      {/* Star shape */}
      <StarShape position={[2.6, -0.4, 0.3]} />
    </Canvas>
  );
}
