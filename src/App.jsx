import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import Experience from "./Experience.jsx"

export default function App() {
  return (
    <>
      <EcctrlJoystick />

      <Canvas shadows>
        <Experience />
      </Canvas>
    </>
  )
}
