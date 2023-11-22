import LetterBlocks from "./LetterBlocks"
import FlatText from "./FlatText"

export default function Bio(props) {
  return (
    <group position-z={6.5} {...props}>
      <group position-x={1.7}>
        <LetterBlocks str={"STEPHEN"} position-y={0.7} />
        <LetterBlocks str={"KIIYURU"} />
      </group>

      <group position-y={1.9}>
        <FlatText position-z={-1} scale={0.5} value={"CREATIVE DEVELOPER"} />
        <FlatText
          position-z={-1.7}
          scale={0.27}
          value={`
          Innovative techie living in Nairobi, freelancer, lead developer 
          at The Discovery Centre and a huge Manchester United fan :)`}
          // position-z={0.5}
          textAlign={"center"}
        />
      </group>
    </group>
  )
}
