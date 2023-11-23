import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"

export default function Projects() {
  return (
    <>
      <group position={[8, 2.5, -6]} rotation-y={degToRad(90)} scale={0.7}>
        {/* <LetterBlocks str={"CLIENT"} position-y={0.3} /> */}
        <LetterBlocks str={"PROJECTS"} />
      </group>
    </>
  )
}
