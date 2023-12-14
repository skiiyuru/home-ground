import { Text3D } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useState } from "react"
import { Howl, Howler } from "howler"
import { playSound } from "../utils"
import useGame from "../store/useGame"

function LetterBlock(props) {
  const [hitSound] = useState(
    () =>
      new Howl({
        src: ["./sounds/letter.ogg"],
        preload: true,
        // autoplay: false,
        // loop: false,
        // volume: 1,
      })
  )

  const [isMobile] = useGame((state) => [state.isMobile])

  return (
    <RigidBody
      type={isMobile && "fixed"}
      colliders="cuboid"
      position={props.position}
      rotation-y={Math.PI}
      restitution={0.2}
      friction={1}
      onCollisionEnter={() => playSound(hitSound)}
    >
      <Text3D
        material={props.blockMaterial}
        font={"./fonts/bebas.json"}
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.035}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={5}
        castShadow
        receiveShadow
      >
        {props.value}
        {/* <meshStandardMaterial color={props.color} /> */}
      </Text3D>
    </RigidBody>
  )
}

export default function LetterBlocks(props) {
  const letters = props.str.split("")

  return (
    <group {...props}>
      {letters.length &&
        letters.map((letter, idx) => (
          <LetterBlock
            fixed={props.fixed}
            blockMaterial={props.blockMaterial}
            key={idx}
            value={letter}
            position={[-idx * 0.45, 0, 0]}
          />
        ))}
    </group>
  )
}
