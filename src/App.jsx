import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import Experience from "./Experience.jsx"
import { Loader } from "@react-three/drei"

export default function App() {
  return (
    <>
      <EcctrlJoystick />

      <Canvas
        shadows
        // onPointerDown={(e) => {
        //   if (e.pointerType === "mouse") {
        //     e.target.requestPointerLock()
        //   }
        // }}
      >
        <Experience />
      </Canvas>

      <Loader />
    </>
  )
}
