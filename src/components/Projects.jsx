import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"

export default function Projects() {
  return (
    <>
      <group position={[8, 2.5, -6]} rotation-y={degToRad(90)} scale={0.9}>
        <LetterBlocks str={"PROJECTS"} />
      </group>

      <Card position={[10.2, 5, -6.5]} />
      <Card position={[10.2, 5, -2.5]} />

      <Card position={[12.5, 6.75, -6.5]} />
      <Card position={[12.5, 6.75, -2.5]} />
    </>
  )
}
