import LetterBlocks from "./LetterBlocks"
import FlatText from "./FlatText"

const items = `
2017 | STEM TEACHER | THE DISCOVERY CENTRE \n 
2019 | FRONT-END DEVELOPER | DISCOVERY LABS\n
2021 | LEAD DEVELOPER | DISCOVERY LABS
`

export default function Career(props) {
  return (
    <group position-z={-6.5} {...props}>
      <LetterBlocks str={"CAREER"} position-x={1.5} />

      <FlatText scale={0.27} value={items} position-z={-1.5} position-y={1.9} />
    </group>
  )
}
