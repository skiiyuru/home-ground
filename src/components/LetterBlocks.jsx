import { Text3D } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import {
  MeshStandardMaterial,
  ColorManagement,
  MeshNormalMaterial,
} from "three"

ColorManagement.enabled = false
const material = new MeshNormalMaterial({
  // color: "white",
  // metalness: 0,
  // roughness: 0,
})

function LetterBlock(props) {
  return (
    <RigidBody
      colliders="cuboid"
      position={props.position}
      rotation-y={Math.PI}
      restitution={0.2}
      friction={1}
    >
      <Text3D
        material={material}
        font={"./fonts/bebas.json"}
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
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
            key={idx}
            value={letter}
            position={[-idx * 0.5, 1.9, 0]}
          />
        ))}
    </group>
  )
}
