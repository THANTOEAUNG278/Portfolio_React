import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Earths = ({ weather }) => {
  const color =
    weather === "Rain" ? "#1e40af" :
    weather === "Snow" ? "#e5e7eb" :
    weather === "Clear" ? "#38bdf8" :
    "#020617";

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} />
      <mesh rotation={[0.3, 0.5, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Earths;
