import { degToRad } from "three/src/math/MathUtils"
import FlatText from "./FlatText"
import Icon from "./Icon"

const items = [
  {
    src: "./textures/github.png",
    z: 1,
    label: "github",
  },
  {
    src: "./textures/mail.png",
    z: 3,
    label: "mail",
  },
  {
    src: "./textures/in.png",
    z: -1,
    label: "in",
  },
  {
    src: "./textures/x.png",
    z: -3,
    label: "x",
  },
]

export default function Socials() {
  return (
    <>
      {items.map(({ src, z, label }, idx) => (
        <group key={"s" + idx} position-x={5.5} position-z={z}>
          <Icon src={src} position-y={2.4} label={label} />
          {/* <FlatText
            position-x={-0.5}
            rotation-z={degToRad(-90)}
            position-y={1.9}
            scale={0.25}
            value={label}
          /> */}
        </group>
      ))}
    </>
  )
}
