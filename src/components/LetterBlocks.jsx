import { Text3D } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

function LetterBlock(props) {
  return (
    <RigidBody
      colliders="cuboid"
      position={props.position}
      rotation-y={Math.PI}
      restitution={0}
      friction={1}
      // type="fixed"
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
            blockMaterial={props.blockMaterial}
            key={idx}
            value={letter}
            position={[-idx * 0.5, 0, 0]}
          />
        ))}
    </group>
  )
}
