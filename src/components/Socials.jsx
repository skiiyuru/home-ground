import { useTexture } from "@react-three/drei"
import Icon from "./Icon"

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
      z: 1,
      label: "github",
      link: "https://github.com/skiiyuru",
    },
    {
      texture: mail,
      z: 3,
      label: "mail",
      email: "steveknganga@gmail.com",
    },
    {
      texture: linkedIn,
      z: -1,
      label: "in",
      link: "https://www.linkedin.com/in/stephen-nganga-478a39180/",
    },
    {
      texture: twitter,
      z: -3,
      label: "x",
      link: "https://twitter.com/snkiiyuru",
    },
  ]
  return (
    <>
      {items.map((data, idx) => (
        <group
          key={"s" + idx}
          position-x={4.7}
          position-z={data.z}
          position-y={-0.45}
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
