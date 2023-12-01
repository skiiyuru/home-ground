import { KeyboardControls, Stars } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Perf } from "r3f-perf"
import { Suspense } from "react"
import Avatar from "./components/Avatar.jsx"
import Ball from "./components/Ball.jsx"
import Bio from "./components/Bio.jsx"
import Career from "./components/Career.jsx"
import Lab from "./components/Lab.jsx"
import Lights from "./components/Lights.jsx"
import Projects from "./components/Projects.jsx"
import Socials from "./components/Socials.jsx"
import Stadium from "./components/Stadium.jsx"

export default function Experience() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    { name: "action1", keys: ["KeyF"] },
    { name: "action2", keys: ["KeyG"] },
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
    fall: "jumpIdle",
    action1: "open",
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
        <Suspense fallback={null}>
          <KeyboardControls map={keyboardMap}>
            <Ecctrl
              // capsuleHalfHeight={0.3}
              // capsuleRadius={0.3}
              // floatHeight={1}
              // scale={1.7}
              name="character"
              animated
              position={[0, 7, 0]}
              restitution={0}
            >
              <EcctrlAnimation
                characterURL={characterURL}
                animationSet={animationSet}
              >
                <Avatar />
              </EcctrlAnimation>
            </Ecctrl>
          </KeyboardControls>
        </Suspense>

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
