import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"
import { useTexture } from "@react-three/drei"

export default function Projects(props) {
  const [imla, longhorn, oxford, discovery] = useTexture([
    "./images/imla.png",
    "./images/longhorn.png",
    "./images/oxford.png",
    "./images/discovery.png",
  ])

  const items = [
    {
      title: "Imla",
      description: "A transcription tool fine-tuned for African languages.",
      link: "https://imla.io/",
      position: [8.5, 4.2, -5.6],
      texture: imla,
      roles: ["Designer", "UI Developer"],
    },
    {
      title: "Longhorn Digital",
      description:
        "Personalized eLearning material for the schooling generation.",
      link: "https://longhornpublishers.com/longhorn-digital/",
      position: [8.5, 4.2, -2.5],
      texture: longhorn,
      roles: ["Designer", "UI Developer"],
    },
    {
      title: "Oxford University Press",
      description: "Interactive STEM content that supplements text books.",
      link: "https://www.oxford.co.ke/",
      position: [10.8, 5.7, -5.6],
      texture: oxford,
      roles: ["Designer", "UI Developer"],
    },
    {
      title: "The Discovery Centre",
      description:
        "Fostering children’s curiosity and interest in STEM through fun and interactive experiences.",
      link: "https://www.thediscoverycentre.co.ke/",
      position: [10.8, 5.7, -2.5],
      texture: discovery,
      roles: ["Co-founder", "Teacher"],
    },
  ]

  return (
    <>
      <group
        position={[7.2, 2.6, -6]}
        rotation-y={degToRad(90)}
        // rotation-z={degToRad(10)}
        scale={0.9}
      >
        <LetterBlocks
          blockMaterial={props.blockMaterial}
          str={"PROJECTS"}
          // fixed
        />
      </group>

      {items.map((item) => (
        <Card
          key={item.title}
          data={item}
          position={item.position}
          geometry={props.geometry}
          material={props.material}
        />
      ))}
    </>
  )
}
