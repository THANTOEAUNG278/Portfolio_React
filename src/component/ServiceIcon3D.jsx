import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const Box = () => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered) {
      mesh.current.rotation.y += 0.05;
      mesh.current.rotation.x += 0.03;
    } else {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={hovered ? 1.3 : 1}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={hovered ? "#22d3ee" : "#00ff66"}
        emissive={hovered ? new THREE.Color("#22d3ee") : new THREE.Color("#000")}
        emissiveIntensity={hovered ? 0.6 : 0}
      />
    </mesh>
  );
};

const ServiceIcon3D = () => {
  return (
    <div className="w-28 h-28 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4] }}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <Float speed={2} floatIntensity={0.6}>
          <Box />
        </Float>
      </Canvas>
    </div>
  );
};

export default ServiceIcon3D;
