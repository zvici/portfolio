"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

function AnimatedModel() {
  const gltf = useGLTF("/model.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];

      if (firstAction) {
        firstAction.setLoop(THREE.LoopRepeat, Infinity);
        firstAction.timeScale = 0.7;
        firstAction.play();
      }
    }
  }, [actions]);

  return <primitive object={gltf.scene} scale={1} position={[0, -1, 0]} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "532px" }}>
      <Canvas
        camera={{
          position: [-2, 0, 3],
          fov: 35,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <AnimatedModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={true} />
        <mesh rotation={[0, 0, 0]} position={[0, -1.11, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} />
          <meshStandardMaterial color="#444" />
        </mesh>
      </Canvas>
    </div>
  );
}
