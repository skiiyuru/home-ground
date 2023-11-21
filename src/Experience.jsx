import {
  Environment,
  KeyboardControls,
  Sky,
  Stars,
  useGLTF,
} from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Perf } from "r3f-perf"
import Lights from "./components/Lights.jsx"
import CharacterModel from "./components/CharacterModel.jsx"
import TextArea from "./components/TextArea.jsx"

const textScaleFactor = 1.5

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
      <color args={["#000909"]} attach={"background"} />

      <Perf position="top-left" />

      <Lights />

      <Sky />

      <Physics>
        {/* <Debug /> */}

        <KeyboardControls map={keyboardMap}>
          <Ecctrl animated debug position={[0, 7, 0]}>
            <EcctrlAnimation
              characterURL={characterURL}
              animationSet={animationSet}
            >
              <CharacterModel />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>

        <RigidBody type="fixed" colliders="trimesh">
          <primitive object={stadium.scene} scale={0.7} rotation-y={Math.PI} />
        </RigidBody>
      </Physics>

      {/* Bio */}
      <group position-z={10}>
        <TextArea
          scale={1 * textScaleFactor}
          value={"STEPHEN KIIYURU"}
          position={[0, 1.9, -4]}
        />
        <TextArea
          scale={0.41 * textScaleFactor}
          value={"CREATIVE DEVELOPER"}
          position={[0, 1.9, -5]}
        />
        <TextArea
          isParagraph
          scale={0.19 * textScaleFactor}
          value={`
          Creative developer living in Nairobi, freelancer, lead developer 
          at The Discovery Centre and a huge Manchester United fan :)`}
          position={[0.25, 1.9, -6]}
        />
      </group>
    </>
  )
}
