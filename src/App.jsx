import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import Experience from "./Experience.jsx"
import { KeyboardControls, Loader } from "@react-three/drei"
import StartScreen from "./components/StartScreen.jsx"
import useGame from "./store/useGame.js"
import { Suspense } from "react"

export const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  // Optional animation key map
  // { name: "action1", keys: ["1"] },
  // { name: "action2", keys: ["2"] },
  // { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
]

export default function App() {
  const [isTouch, phase] = useGame((state) => [state.isTouch, state.phase])

  return (
    <div className="h-screen">
      <KeyboardControls map={keyboardMap}>
        {isTouch && <EcctrlJoystick buttonNumber={2} />}

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
      </KeyboardControls>
    </div>
  )
}
