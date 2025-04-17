import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ModelWithMTL from './ModelWithMTL';

export default function ModelViewer() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <ModelWithMTL />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
