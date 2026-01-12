import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import MyProject from "../component/MyProject";

function Laptop() {

  const keyRows = [
    ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "Del"],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9",  "Back"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "Enter"],
    ["Ctrl",  "Z", "X", "C", "V", "B", "N", "M",  "Shift"],
    [ "Space",]
  ];

  return (
    <group position={[0, -1, 0]} scale={1.4}>
    
      <group position={[0, 2.2, -3.2]} rotation={[-0.5, 0, 0]}>
        <mesh>
          <boxGeometry args={[5, 2, 0.15]} />
          <meshStandardMaterial color="#f2f2f2" />
        </mesh>
        <mesh position={[0, 0, 0.075]}>
          <planeGeometry args={[4.6, 2.8]} />
          <meshStandardMaterial color="#ffffff" />
          <Html transform position={[0, 0, 0.01]}>
            <div
              style={{
                width: "350px",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bold",
                background: "#fff",
                color: "#000",
                 border: "8px solid gray",  
                borderRadius: "6px", 
              }}
            >
              <MyProject/>
            </div>
          </Html>
        </mesh>
      </group>

      <mesh>
        <boxGeometry args={[6, 0.2, 4]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      <mesh position={[0, 0.05, 0.4]}>
        <boxGeometry args={[5.4, 0.05, 2.4]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>


      {keyRows.map((row, rowIndex) =>
        row.map((label, colIndex) => {
    
          const isSpace = label === "Space";
          const isShift = label === "Shift";
          const isEnter = label === "Enter";
          const width = isSpace ? 2.0 : isShift ? 1.2 : isEnter ? 1.2 : 0.4;

          const x = -2.5 + colIndex * 0.5 + (isSpace ? 0.5 : 0);
          const z = -0.5 + rowIndex * 0.45;

          return (
            <mesh key={`${rowIndex}-${colIndex}`} position={[x, 0.10, z]}>
              <boxGeometry args={[width, 0.1, 0.4]} />
              <meshStandardMaterial color="#dcdcdc" />
              <Html transform position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <div
                  style={{
                    fontSize: "6px",
                    fontWeight: "bold",
                    color: "#000",
                    textAlign: "center",
                    userSelect: "none", 
                    width: `${width * 100}px`,
                  }}
                >
                  {label}
                </div>
              </Html>
            </mesh>
          );
        })
      )}

     
      <mesh position={[0, 0.12, 1.3]}>
        <boxGeometry args={[1.6, 0.05, 1]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>
    </group>
  );
}

export default function ThreeDLaptopOneFile() {
  return (
    <div className="flex items-center justify-center">
      <div  style={{ width: "80%", height: "80vh", background: "" }}>
        <Canvas camera={{ position: [0, 4, 12], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <Laptop />
          <OrbitControls target={[0, 1, 0]} />
        </Canvas>
      </div>
    </div>
  );
}