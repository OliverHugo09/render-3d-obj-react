import { useLoader } from '@react-three/fiber';
import { MTLLoader, OBJLoader } from 'three-stdlib';

export default function ModelWithMTL() {
  const materials = useLoader(MTLLoader, '/models/tree.mtl');
  const obj = useLoader(OBJLoader, '/models/tree.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.5} />;
}