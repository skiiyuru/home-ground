import { useTexture } from "@react-three/drei"
import Icon from "./Icon"
import LetterBlocks from "./LetterBlocks"
import { degToRad } from "three/src/math/MathUtils"

export default function Socials(props) {
  const [github, mail, linkedIn, twitter] = useTexture([
    "./images/github.png",
    "./images/mail.png",
    "./images/in.png",
    "./images/x.png",
  ])

  const items = [
    {
      texture: github,
      z: -3.2,
      label: "github",
      link: "https://github.com/skiiyuru",
    },
    {
      texture: mail,
      z: -1.5,
      label: "mail",
      email: "steveknganga@gmail.com",
    },
    {
      texture: linkedIn,
      z: -4.9,
      label: "in",
      link: "https://www.linkedin.com/in/stephen-nganga-478a39180/",
    },
    {
      texture: twitter,
      z: -6.5,
      label: "x",
      link: "https://twitter.com/snkiiyuru",
    },
  ]
  return (
    <>
      <LetterBlocks
        position={[-7.2, 2.55, -2.5]}
        rotation-y={degToRad(270)}
        scale={0.9}
        // position={[7.2, 4.4, -11.5]}
        // rotation-y={degToRad(90 + 42)}
        blockMaterial={props.blockMaterial}
        str={"contacts"}
        fixed
      />
      {items.map((data, idx) => (
        <group
          key={"s" + idx}
          position-x={-8.5} // -8.5, 4.2, 4.1
          position-z={data.z}
          position-y={1.45}
        >
          <Icon
            blockMaterial={props.blockMaterial}
            iconGeometry={props.geometry}
            position-y={2.4}
            data={data}
          />
        </group>
      ))}
    </>
  )
}
