import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Insights from "./components/Insights";
//import {OrbitControls} from '@react-three/drei';

function Box(props) {
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) =>
      (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  const mesh = useRef(null);
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Meshes() {
  return (
    <>
      <Canvas style={{ height: "50vh" }}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Box position={[-3, 0, 0]} />
        <Box position={[3, 0, 0]} />
      </Canvas>

      <Insights />
    </>
  );
}
