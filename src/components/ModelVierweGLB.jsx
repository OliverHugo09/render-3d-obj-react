import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/ninja.glb');
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewerGLB() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" background={false} />
      <Model />
      <OrbitControls />
    </Canvas>
    </div>
  );
}
