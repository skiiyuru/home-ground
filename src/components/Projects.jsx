import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"

const items = [
  {
    title: "Imla",
    description: "A transcription tool fine-tuned for African languages.",
    link: "https://imla.io/",
    position: [10, 5, -6.5],
    img: "./images/imla.png",
    roles: ["UI Design", "UI Development"],
  },
  {
    title: "Longhorn Digital",
    description: "Interactive STEM content that supplements text books.",
    link: "https://longhornpublishers.com/longhorn-digital/",
    position: [10, 5, -2.5],
    img: "./images/longhorn.png",
    roles: ["UI Design", "UI Development"],
  },
  {
    title: "Oxford University Press",
    description: "Interactive STEM content that supplements text books.",
    link: "https://www.oxford.co.ke/",
    position: [12.5, 6.75, -6.5],
    img: "./images/oxford.png",
    roles: ["UI Design", "UI Development"],
  },
  {
    title: "The Discovery Centre",
    description:
      "Fostering children’s curiosity and interest in STEM through fun and interactive experiences.",
    link: "imla.io",
    position: [12.5, 6.75, -2.5],
    img: "./images/discovery.png",
    roles: ["Co-founder", "Teacher"],
  },
]

export default function Projects() {
  return (
    <>
      <group position={[8, 2.5, -6]} rotation-y={degToRad(90)} scale={0.9}>
        <LetterBlocks str={"PROJECTS"} />
      </group>

      {items.map((item) => (
        <Card key={item.title} data={item} position={item.position} />
      ))}
    </>
  )
}
