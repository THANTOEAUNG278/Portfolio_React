import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import MyProject from "../component/MyProject";
import { useMediaQuery } from "react-responsive";

function Laptop() {
  const keyRows = [
    ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "Del"],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Back"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "Enter"],
    ["Ctrl", "Z", "X", "C", "V", "B", "N", "M", "Shift"],
    ["Space"],
  ];

  return (
    <group position={[0, -1, 0]} scale={1.4}>
      
      <group position={[0, 2.2, -3.2]} rotation={[-0.5, 0, 0]}>
        <mesh>
          <boxGeometry args={[5, 2.6, 0.15]} />
          <meshStandardMaterial color="#f2f2f2" />
        </mesh>

        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[4.6, 2.6]} />
          <meshStandardMaterial color="#ffffff" />
          <Html transform position={[0, 0, 0.01]}>
            <div
              style={{
                width: "340px",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                border: "6px solid gray",
                borderRadius: "6px",
              }}
            >
              <MyProject />
            </div>
          </Html>
        </mesh>
      </group>

    
      <mesh>
        <boxGeometry args={[6, 0.25, 4]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

 
      <mesh position={[0, 0.06, 0.4]}>
        <boxGeometry args={[5.4, 0.05, 2.4]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>

     
      {keyRows.map((row, rowIndex) => {
        let offsetX = -2.6; 

        return row.map((label, colIndex) => {
          const isSpace = label === "Space";
          const isShift = label === "Shift";
          const isEnter = label === "Enter";

          const width = isSpace ? 2.6 : isShift || isEnter ? 1.2 : 0.4;
          const x = offsetX + width / 2;
          offsetX += width + 0.1;

          const z = -0.6 + rowIndex * 0.45;

          return (
            <mesh key={`${rowIndex}-${colIndex}`} position={[x, 0.1, z]}>
              <boxGeometry args={[width, 0.1, 0.4]} />
              <meshStandardMaterial color="#dcdcdc" />

              <Html
                transform
                position={[0, 0.06, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <div
                  style={{
                    fontSize: "6px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: `${width * 100}px`,
                    userSelect: "none",
                  }}
                >
                  {label}
                </div>
              </Html>
            </mesh>
          );
        });
      })}

    
      <mesh position={[0, 0.12, 1.3]}>
        <boxGeometry args={[1.6, 0.05, 1]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>
    </group>
  );
}

export default function ThreeDLaptopOneFile() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%] h-[70vh]">
        <Canvas
          camera={{
            position: isMobile ? [0, 3.5, 16] : [0, 4, 12],
            fov: isMobile ? 50 : 45,
          }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={1} />

      
          <Laptop scale={isMobile ? 0.10 : 1.0} />

          <OrbitControls
            target={[0, 1, 0]}
            enableZoom={!isMobile}
            enableRotate={!isMobile}
          />
        </Canvas>
      </div>
    </div>
  );
}

