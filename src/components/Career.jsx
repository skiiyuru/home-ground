import LetterBlocks from "./LetterBlocks"
import FlatText from "./FlatText"

const items = `
CO-FOUNDER | THE DISCOVERY CENTRE | 2017 - PRESENT \n 
FRONT-END DEVELOPER | DISCOVERY LABS | 2019 - PRESENT \n
DESIGN CONSULTANT | 2020 - PRESENT
`

export default function Career(props) {
  return (
    <group position-z={-6} position-y={1.56} {...props}>
      <LetterBlocks
        blockMaterial={props.blockMaterial}
        str={"CAREER"}
        position-x={1.5}
        scale={0.9}
      />

      <FlatText
        scale={0.27}
        value={items}
        position-z={-1.3}
        textAlign={"center"}
      />
    </group>
  )
}
