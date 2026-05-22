import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const BackgroundScene = () => {
  const groupRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (groupRef.current) {
        const x = (e.clientX / window.innerWidth) * 0.5;
        const y = (e.clientY / window.innerHeight) * 0.5;
        groupRef.current.rotation.x = y;
        groupRef.current.rotation.y = x;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.1}
      />

      {/* Floating particles */}
      <mesh position={[0, 0, -30]}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Secondary rotating mesh */}
      <mesh position={[0, 0, -20]} rotation={[0.5, 0.5, 0]}>
        <icosahedronGeometry args={[30, 4]} />
        <meshStandardMaterial
          color="#c61dfa"
          emissive="#c61dfa"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#c61dfa" />
    </group>
  );
};

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ pointerEvents: 'none' }}
      >
        <BackgroundScene />
      </Canvas>

      {/* CSS gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-950/70 to-slate-950/50" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
