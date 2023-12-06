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
    },
    {
      texture: mail,
      z: 3,
      label: "mail",
    },
    {
      texture: linkedIn,
      z: -1,
      label: "in",
    },
    {
      texture: twitter,
      z: -3,
      label: "x",
    },
  ]
  return (
    <>
      {items.map(({ texture, z, label }, idx) => (
        <group
          key={"s" + idx}
          position-x={4.7}
          position-z={z}
          position-y={-0.45}
        >
          <Icon
            blockMaterial={props.blockMaterial}
            iconGeometry={props.geometry}
            texture={texture}
            position-y={2.4}
            label={label}
          />
        </group>
      ))}
    </>
  )
}
