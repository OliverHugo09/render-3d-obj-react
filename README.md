# 🧱 3D Model Viewer en React

Este proyecto es una aplicación web creada con **React + Vite** para visualizar modelos 3D en formatos `.glb`, `.obj` y `.mtl` usando **Three.js** con **@react-three/fiber** y **@react-three/drei**.

---

## 🎯 Características

- ✅ Renderiza modelos `.glb` directamente
- ✅ Soporte para modelos `.obj` con sus archivos `.mtl`
- ✅ Compatible con texturas externas (`.jpg`)
- ✅ Controles orbitales para navegación 3D
- ✅ Iluminación con entorno básico (`Environment`)
- ✅ Componentes reutilizables para cada tipo de modelo

---

## 🚀 Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- [@react-three/drei](https://github.com/pmndrs/drei)

---

## 📦 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/OliverHugo09/render-3d-obj-react.git
cd render-3d-obj-react

# 2. Instala las dependencias
npm install

# 3. Ejecuta el servidor de desarrollo
npm run dev
```

---

## 🧩 Componentes

### `ModelViewerGLB.jsx`

Visualiza modelos en formato `.glb`:

```jsx
import { useGLTF } from "@react-three/drei";

export default function ModelViewerGLB() {
  const { scene } = useGLTF("/models/ninja.glb");
  return <primitive object={scene} scale={1} />;
}
```

---

### `ModelViewerOBJ.jsx`

Renderiza modelos `.obj` + `.mtl`:

```jsx
import { useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { MTLLoader, OBJLoader } from "three-stdlib";

export default function ModelViewerOBJ() {
  const group = useRef();
  const { scene } = useThree();
  const materials = useLoader(MTLLoader, "/models/robot.mtl");
  const obj = useLoader(OBJLoader, "/models/robot.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => {
    group.current.add(obj);
  }, [obj]);

  return <group ref={group} />;
}
```

---

## 🖼 Carga de modelos

Coloca tus archivos `.glb`, `.obj`, `.mtl`, `.jpg` en la carpeta `public/models/` y referencia así:

```js
const { scene } = useGLTF("/models/ninja.glb");
```

> ℹ️ Asegúrate de que las rutas sean correctas y que los archivos estén en la carpeta `public` para que Vite los sirva correctamente.

---

## 💡 Iluminación y entorno

Para una mejor apariencia del modelo (como brillos metálicos o reflejos), puedes usar el entorno preconfigurado:

```jsx
import { Environment } from "@react-three/drei";

<Environment preset="city" />;
```

> Puedes probar otros presets como `"sunset"`, `"night"`, `"warehouse"`...

---

## ⚠️ Consideraciones

- Los navegadores **no permiten guardar archivos directamente en la carpeta `public/` o `assets/`** desde el cliente. Para eso necesitarías una solución con backend o almacenamiento en la nube.
- Puedes cargar imágenes desde el cliente y usarlas como textura, pero no se "guardarán" en disco local del proyecto.
- No es posible renderizar `.blend` directamente en el navegador. Debes exportar tus modelos desde Blender en formato `.glb`, `.obj`, `.fbx`, etc.

---

## 📌 Por hacer

- [ ] Subida dinámica de modelos desde el navegador
- [ ] Soporte para más formatos (`.fbx`, `.stl`, `.gltf`)
- [ ] Texturizado dinámico con imágenes cargadas por el usuario
- [ ] Animaciones y controles más avanzados

---
