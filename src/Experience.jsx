import { Physics, RigidBody } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import { useMemo } from "react"
import {
  BoxGeometry,
  ColorManagement,
  MeshBasicMaterial,
  MeshNormalMaterial,
} from "three"
import Ball from "./components/Ball.jsx"
import Bio from "./components/Bio.jsx"
import Career from "./components/Career.jsx"
import FanDecals from "./components/FanDecals.jsx"
import Lab from "./components/Lab.jsx"
import Lights from "./components/Lights.jsx"
import Player from "./components/Player.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import Socials from "./components/Socials.jsx"
import Stadium2 from "./components/Stadium2.jsx"
import { Box } from "@react-three/drei"

export default function Experience() {
  // Optimizations
  ColorManagement.enabled = false
  const boxGeometry = useMemo(() => new BoxGeometry(), [])
  const cardMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        color: "#88A7B0",
        transparent: true,
      }),
    []
  )
  const blockMaterial = useMemo(() => new MeshNormalMaterial(), [])

  return (
    <>
      {/* <color args={["#1D2B44"]} attach={"background"} /> */}

      {/* <Perf position="top-left" /> */}

      <Lights />

      <Physics timeStep="vary" gravity={[0, -9.807 * 1.5, 0]}>
        <Player />

        <Stadium2 />

        <Ball />

        <Bio blockMaterial={blockMaterial} />

        <Career blockMaterial={blockMaterial} rotation-y={Math.PI} />

        <Socials geometry={boxGeometry} blockMaterial={blockMaterial} />

        <Projects
          blockMaterial={blockMaterial}
          geometry={boxGeometry}
          material={cardMaterial}
        />

        <Lab
          blockMaterial={blockMaterial}
          geometry={boxGeometry}
          material={cardMaterial}
        />

        <Skills
          blockMaterial={blockMaterial}
          geometry={boxGeometry}
          material={cardMaterial}
        />

        {/* floor */}
        <RigidBody type="fixed" position-y={-10}>
          <Box args={[20, 2, 24]} />
        </RigidBody>
      </Physics>
      <FanDecals material={cardMaterial} geometry={boxGeometry} />

      {/* <Effects /> */}

      {/* <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      /> */}

      {/* <Sparkles
        position={[5, 4, 8]}
        size={10}
        count={10}
        scale={1.2}
        noise={1}
      />
      <Sparkles
        position={[-5, 4, 8]}
        size={10}
        count={10}
        scale={1.2}
        noise={1}
      /> */}
    </>
  )
}
