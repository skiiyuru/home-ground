import { degToRad } from "three/src/math/MathUtils"
import LetterBlocks from "./LetterBlocks"
import Card from "./Card"
import { useTexture } from "@react-three/drei"

export default function Skills(props) {
  const [skills] = useTexture(["./images/skills.png"])

  const data = {
    title: "Skills and Knowledge",
    // description: "Technologies and languages that I use in my to build stuff.",
    // link: "https://www.oxford.co.ke/",
    // position: [-12.3, 6.6, -4],
    position: [8.5, 5.7, -12],
    texture: skills,
    sections: [
      {
        title: "web",
        children: ["react", "tailwind", "three.js"],
      },
      {
        title: "machine learning",
        children: ["python", "pytorch", "fast.ai"],
      },
      {
        title: "Design",
        children: ["Figma", "Affinity", "Blender"],
      },
    ],
  }

  return (
    <>
      <LetterBlocks
        // position={[-10.9, 6.6, -2.5]}
        // rotation-y={degToRad(90)}
        scale={0.9}
        position={[7.2, 4.4, -11.5]}
        rotation-y={degToRad(90 + 42)}
        blockMaterial={props.blockMaterial}
        str={"skills"}
      />

      <Card
        forSkills
        data={data}
        position={data.position}
        geometry={props.geometry}
        material={props.material}
      />
    </>
  )
}
