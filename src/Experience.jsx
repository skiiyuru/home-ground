import {
  Gltf,
  KeyboardControls,
  Sky,
  SoftShadows,
  Stars,
} from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Perf } from "r3f-perf"
import { Suspense } from "react"
import Bio from "./components/Bio.jsx"
import Career from "./components/Career.jsx"
import CharacterModel from "./components/CharacterModel.jsx"
import Lab from "./components/Lab.jsx"
import Lights from "./components/Lights.jsx"
import Projects from "./components/Projects.jsx"
import Socials from "./components/Socials.jsx"
import Stadium from "./components/Stadium.jsx"
import Ball from "./components/Ball.jsx"
import Avatar from "./components/Avatar.jsx"

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
  const characterURL = "/models/sk.glb"

  /**
   * Character animation set preset
   */
  const animationSet = {
    idle: "idle",
    walk: "walk",
    run: "run",
    jump: "jump",
    jumpIdle: "jumpIdle",
    jumpLand: "jumpLand",
    fall: "fall",
    action1: "pressButton",
    action2: "pass",
    // action3: "",
    // action4: "",
  }

  return (
    <>
      <color args={["#000909"]} attach={"background"} />

      <Perf position="top-left" />

      <Lights />

      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <Physics timeStep="vary">
        {/* Character */}
        <KeyboardControls map={keyboardMap}>
          <Ecctrl
            name="character"
            animated
            position={[0, 12, 0]}
            scale={1}
            // floatHeight={0.3}
          >
            <EcctrlAnimation
              characterURL={characterURL}
              animationSet={animationSet}
            >
              <Suspense fallback={null}>
                {/* <CharacterModel /> */}
                <Avatar />
              </Suspense>
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>

        {/* Stadium */}
        <Suspense fallback={null}>
          <Stadium />
          <Ball />
        </Suspense>

        <Bio />

        <Career rotation-y={Math.PI} />

        <Socials />

        <Projects />

        <Lab />
      </Physics>
    </>
  )
}
