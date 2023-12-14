import LetterBlocks from "./LetterBlocks"
import FlatText from "./FlatText"
import { degToRad } from "three/src/math/MathUtils"

export default function Bio(props) {
  return (
    <group position-z={6} position-y={1.56} {...props}>
      <group position-x={1.5} scale={0.9}>
        <LetterBlocks blockMaterial={props.blockMaterial} str={"STEPHEN"} />
        <LetterBlocks
          blockMaterial={props.blockMaterial}
          str={"KIIYURU"}
          // position-y={0.1}
          rotation-x={degToRad(90)}
          position-z={-1.3}
        />
      </group>

      <FlatText
        rotation-x={-Math.PI * 0.5}
        rotation-z={-Math.PI}
        position-z={-1.8}
        scale={0.45}
        value={"CREATIVE DEVELOPER"}
      />
      <FlatText
        rotation-x={-Math.PI * 0.5}
        rotation-z={-Math.PI}
        position-x={0.3}
        position-z={-2.3}
        scale={0.27}
        value={`
           Creative developer living in Nairobi, Co-founder of
           The Discovery Centre and a huge Manchester United fan :)`}
        // position-z={0.5}
        textAlign={"center"}
      />
    </group>
  )
}
