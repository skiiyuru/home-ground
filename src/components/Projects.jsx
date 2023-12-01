import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"

const items = [
  {
    title: "Imla",
    description: "A transcription tool fine-tuned for African languages.",
    link: "https://imla.io/",
    position: [8.5, 4.2, -5.6],
    img: "./images/imla.png",
    roles: ["Design", "UI Development"],
  },
  {
    title: "Longhorn Digital",
    description: "Interactive STEM content that supplements text books.",
    link: "https://longhornpublishers.com/longhorn-digital/",
    position: [8.5, 4.2, -2.5],
    img: "./images/longhorn.png",
    roles: ["Design", "UI Development"],
  },
  {
    title: "Oxford University Press",
    description: "Interactive STEM content that supplements text books.",
    link: "https://www.oxford.co.ke/",
    position: [10.8, 5.7, -5.6],
    img: "./images/oxford.png",
    roles: ["Design", "UI Development"],
  },
  {
    title: "The Discovery Centre",
    description:
      "Fostering children’s curiosity and interest in STEM through fun and interactive experiences.",
    link: "imla.io",
    position: [10.8, 5.7, -2.5],
    img: "./images/discovery.png",
    roles: ["Co-founder", "Teacher"],
  },
]

export default function Projects() {
  return (
    <>
      <group
        position={[7.2, 2.99, -6]}
        rotation-y={degToRad(90)}
        // rotation-z={degToRad(10)}
        scale={0.9}
      >
        <LetterBlocks str={"PROJECTS"} />
      </group>

      {items.map((item) => (
        <Card key={item.title} data={item} position={item.position} />
      ))}
    </>
  )
}
