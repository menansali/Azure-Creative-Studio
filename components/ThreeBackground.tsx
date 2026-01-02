import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../types';

const FloatingBlob = ({ position, color, scale, speed }: { position: [number, number, number], color: string, scale: number, speed: number }) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1} color="#38bdf8" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main Hero Blob - Right Side */}
        <FloatingBlob position={[3, 0, 0]} color="#0ea5e9" scale={2.2} speed={1.5} />
        
        {/* Secondary Blob - Left Background */}
        <FloatingBlob position={[-4, 2, -5]} color="#0369a1" scale={1.5} speed={2} />
        
        {/* Small Accent Blob */}
        <FloatingBlob position={[-2, -3, 2]} color="#7dd3fc" scale={0.8} speed={3} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;