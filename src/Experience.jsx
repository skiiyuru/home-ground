import { KeyboardControls, Sky, useGLTF } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Perf } from "r3f-perf"
import { Suspense } from "react"
import Bio from "./components/Bio.jsx"
import Career from "./components/Career.jsx"
import CharacterModel from "./components/CharacterModel.jsx"
import Lights from "./components/Lights.jsx"
import Socials from "./components/Socials.jsx"
import Projects from "./components/Projects.jsx"

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

      <Physics timeStep="vary">
        {/* Character */}
        <KeyboardControls map={keyboardMap}>
          <Ecctrl name="character" animated position={[0, 7, 0]}>
            <EcctrlAnimation
              characterURL={characterURL}
              animationSet={animationSet}
            >
              <Suspense fallback={null}>
                <CharacterModel />
              </Suspense>
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>

        {/* Map */}
        <Suspense fallback={null}>
          <RigidBody
            type="fixed"
            colliders="trimesh"
            restitution={0.2}
            friction={1}
          >
            <primitive
              object={stadium.scene}
              scale={0.7}
              // rotation-y={Math.PI}
            />
          </RigidBody>
        </Suspense>

        <Bio />

        <Career rotation-y={Math.PI} />

        <Socials />

        {/* <Projects /> */}
      </Physics>
    </>
  )
}
