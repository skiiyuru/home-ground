import { KeyboardControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import { Suspense, useMemo } from "react"
import { BoxGeometry, MeshBasicMaterial, Vector3 } from "three"
import Experience from "./Experience.jsx"
import StartScreen from "./components/StartScreen.jsx"
import useGame from "./store/useGame.js"

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
  { name: "action4", keys: ["1"] },
]

export default function App() {
  const [isTouch, phase] = useGame((state) => [state.isTouch, state.phase])

  const boxGeometry = useMemo(() => new BoxGeometry(0.25, 0.5, 1), [])
  const activeMaterial = useMemo(
    () => new MeshBasicMaterial({ color: 0xffffff, wireframe: false }),
    []
  )

  return (
    <div className="h-screen">
      <KeyboardControls map={keyboardMap}>
        {isTouch && (
          <EcctrlJoystick
            buttonNumber={2}
            buttonTop1Props={{
              scale: new Vector3(0.7, 0.7, 0.7),
              // geometry: boxGeometry,
              material: activeMaterial,
            }}
            buttonTop2Props={{
              scale: new Vector3(1, 1, 1),
              geometry: boxGeometry,
              material: activeMaterial,
            }}
          />
        )}

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
