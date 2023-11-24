import { KeyboardControls, Sky, SoftShadows, Stars } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
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
import Map from "./components/Map.jsx"

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

  return (
    <>
      <color args={["#000909"]} attach={"background"} />

      <Perf position="top-left" />

      <Lights />

      {/* <SoftShadows
        frustum={3.75}
        // size={0.005}
        // near={9.5}
        samples={17}
        rings={11}
      /> */}

      <Sky
        distance={450000}
        sunPosition={[0, 0, 0]}
        inclination={0}
        azimuth={0.25}
      />

      <Stars
        radius={100}
        depth={50}
        count={777}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

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
          {/* <Stadium /> */}
          <Map />
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
