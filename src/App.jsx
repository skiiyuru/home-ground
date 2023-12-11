import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import Experience from "./Experience.jsx"
import { Loader } from "@react-three/drei"
import StartScreen from "./components/StartScreen.jsx"
import useGame from "./store/useGame.js"
import { Suspense } from "react"

export default function App() {
  const [isTouch, phase] = useGame((state) => [state.isTouch, state.phase])

  return (
    <div className="h-screen">
      {isTouch && <EcctrlJoystick />}

      <Canvas
        shadows
        // onPointerDown={(e) => {
        //   if (e.pointerType === "mouse") {
        //     e.target.requestPointerLock()
        //   }
        // }}
      >
        <Suspense fallback={null}>
          {phase === "ready" && <Experience />}
        </Suspense>
      </Canvas>

      {/* <Loader /> */}

      {phase === "intro" && <StartScreen />}
    </div>
  )
}
