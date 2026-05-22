import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RotatingClock() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Clock circle */}
      <mesh>
        <torusGeometry args={[2, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Hour hand */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.15, 1, 0.1]} />
        <meshStandardMaterial
          color="#c61dfa"
          emissive="#c61dfa"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Minute hand */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#ff006e"
          emissive="#ff006e"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Center dot */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#39ff14"
          emissive="#39ff14"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

export function FloatingParticles() {
  const particlesRef = useRef();

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.0008;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }

  return (
    <group ref={particlesRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          color="#00d4ff"
          sizeAttenuation
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export function PulsingOrb() {
  const orbRef = useRef();

  useFrame(({ clock }) => {
    if (orbRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
      orbRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={orbRef}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshStandardMaterial
        color="#c61dfa"
        emissive="#c61dfa"
        emissiveIntensity={0.8}
        wireframe
      />
    </mesh>
  );
}
