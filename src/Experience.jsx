import { KeyboardControls, useGLTF } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Perf } from "r3f-perf"
import Lights from "./components/Lights.jsx"
import CharacterModel from "./components/CharacterModel.jsx"

export default function Experience() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ]

  /**
   * Character url preset
   */
  const characterURL = "/models/Demon.glb"

  /**
   * Character animation set preset
   */
  const animationSet = {
    idle: "CharacterArmature|Idle",
    walk: "CharacterArmature|Walk",
    run: "CharacterArmature|Run",
    jump: "CharacterArmature|Jump",
    jumpIdle: "CharacterArmature|Jump_Idle",
    jumpLand: "CharacterArmature|Jump_Land",
    fall: "CharacterArmature|Duck", // This is for falling from high sky
    action1: "CharacterArmature|Wave",
    action2: "CharacterArmature|Death",
    action3: "CharacterArmature|HitReact",
    action4: "CharacterArmature|Punch",
  }

  const stadium = useGLTF("/models/stadium.glb")
  return (
    <>
      <Perf position="top-left" />

      <Lights />
      <Physics>
        {/* <Debug /> */}

        <KeyboardControls map={keyboardMap}>
          <Ecctrl animated debug>
            <EcctrlAnimation
              characterURL={characterURL}
              animationSet={animationSet}
            >
              <CharacterModel />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>

        <RigidBody type="fixed" colliders="trimesh">
          <primitive object={stadium.scene} scale={0.7} position-y={-5} />
        </RigidBody>
      </Physics>
    </>
  )
}
