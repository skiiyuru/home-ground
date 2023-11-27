import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"

export default function Lab() {
  return (
    <>
      <group position={[8, 2, 4]} rotation-y={degToRad(90)} scale={0.9}>
        <LetterBlocks str={"LAB"} />
      </group>

      <Card position={[10, 5, 2.9]} />
      <Card position={[10, 5, 6.9]} />

      <Card position={[12.5, 6.75, 2.9]} />
      <Card position={[12.5, 6.75, 6.9]} />
    </>
  )
}
