import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"
import { useTexture } from "@react-three/drei"

export default function Lab(props) {
  const [race, dog, portal, mask] = useTexture([
    "./images/race.png",
    "./images/dog.png",
    "./images/portal.png",
    "./images/mask.png",
  ])

  const items = [
    {
      title: "Marble Race",
      description:
        "A fun obstacle race game. Can you beat the 11.5 sec high score?",
      link: "https://sk-marble-race.vercel.app/",
      position: [8.5, 4.2, 5.5],
      texture: race,
    },
    {
      title: "Dog Vision",
      description:
        "A deep learning model that identifies the breed of a dog from an image.",
      link: "https://dog-vision.streamlit.app/",
      position: [8.5, 4.2, 2.5],
      texture: dog,
    },
    {
      title: "Portal",
      description: "Creating a custom shader using perlin noise.",
      link: "https://kiiyuru-portal.vercel.app/",
      position: [10.8, 5.7, 5.5],
      texture: portal,
    },
    {
      title: "Facemask Detector",
      description:
        "A deep learning model that identifies whether a person in an image is wearing a facemask or not.",
      link: "https://huggingface.co/spaces/skiiyuru/facemask_detector",
      position: [10.8, 5.7, 2.5],
      texture: mask,
    },
  ]

  return (
    <>
      <group position={[7.2, 2.6, 3.3]} rotation-y={degToRad(90)} scale={0.9}>
        <LetterBlocks
          blockMaterial={props.blockMaterial}
          str={"LAB"}
          // fixed
        />
      </group>

      {items.map((item) => (
        <Card
          key={item.title + "-lab"}
          data={item}
          position={item.position}
          geometry={props.geometry}
          material={props.material}
        />
      ))}
    </>
  )
}
