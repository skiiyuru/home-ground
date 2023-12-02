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

export default function Socials(props) {
  return (
    <>
      {items.map(({ src, z, label }, idx) => (
        <group
          key={"s" + idx}
          position-x={4.7}
          position-z={z}
          position-y={-0.45}
        >
          <Icon
            blockMaterial={props.blockMaterial}
            iconGeometry={props.geometry}
            src={src}
            position-y={2.4}
            label={label}
          />
        </group>
      ))}
    </>
  )
}
