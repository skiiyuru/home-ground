import { Decal } from "@react-three/drei"

export default function Sticker(props) {
  return (
    <Decal {...props}>
      <meshBasicMaterial
        transparent={props.transparentMaterial}
        toneMapped={false}
        map={props.texture}
        polygonOffset
        polygonOffsetFactor={-1} // The material should take precedence over the original
      />
    </Decal>
  )
}
