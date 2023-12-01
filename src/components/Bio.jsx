import LetterBlocks from "./LetterBlocks"
import FlatText from "./FlatText"

export default function Bio(props) {
  return (
    <group position-z={6} position-y={1.56} {...props}>
      <group position-x={1.5} scale={0.9}>
        <LetterBlocks
          blockMaterial={props.blockMaterial}
          str={"KIIYURU"}
          position-y={1.3}
        />
        <LetterBlocks blockMaterial={props.blockMaterial} str={"STEPHEN"} />
      </group>

      <FlatText position-z={-0.7} scale={0.45} value={"CREATIVE DEVELOPER"} />
      <FlatText
        position-x={0.3}
        position-z={-1.2}
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
