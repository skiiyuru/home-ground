import { degToRad } from "three/src/math/MathUtils"
import FlatText from "./FlatText"
import Icon from "./Icon"

const items = [
  {
    src: "./textures/github.png",
    z: 1,
    label: "skiiyuru",
  },
  {
    src: "./textures/mail.png",
    z: 2,
    label: "skiiyuru",
  },
  {
    src: "./textures/in.png",
    z: -1,
    label: "skiiyuru",
  },
  {
    src: "./textures/x.png",
    z: -2,
    label: "snkiiyuru",
  },
]

export default function Socials() {
  return (
    <>
      {items.map(({ src, z, label }, idx) => (
        <group key={"s" + idx} position-x={5} position-z={z}>
          <Icon src={src} position-y={2.2} />
          <FlatText
            position-x={-0.5}
            rotation-z={degToRad(-90)}
            position-y={1.9}
            scale={0.25}
            value={label}
          />
        </group>
      ))}
    </>
  )
}
