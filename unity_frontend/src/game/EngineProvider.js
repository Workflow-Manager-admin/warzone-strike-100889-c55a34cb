import React from "react";
import { Canvas } from "@react-three/fiber";

/**
 * PUBLIC_INTERFACE
 * EngineProvider: Wraps children with a Three.js (react-three-fiber) Canvas context.
 * This provides the base 3D "engine" context for gameplay scenes.
 *
 * @param {React.ReactNode} children - Components to render inside 3D canvas (arena, player, etc)
 * @returns {JSX.Element} Canvas with children
 */
function EngineProvider({ children, ...canvasProps }) {
  // For now, basic canvas with default 3D setup (future: add lighting, camera, etc.)
  return (
    <Canvas
      shadows
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 2, 8], fov: 60 }}
      {...canvasProps}
    >
      {children}
    </Canvas>
  );
}

export default EngineProvider;
