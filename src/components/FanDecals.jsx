import { Decal, useTexture } from "@react-three/drei"
import FlatText from "./FlatText"
import Sticker from "./Sticker"

const size = 2

export default function FanDecals(props) {
  const texture = useTexture("./images/crest.png")

  return (
    <>
      <FlatText
        rotation-y={Math.PI}
        position={[0.17, 3.7, 12]}
        scale={0.7}
        value={"RED DEVILS"}
      />

      <mesh
        rotation-y={Math.PI}
        position={[0.2, 2.4, 12]}
        material={props.material}
        geometry={props.geometry}
        scale={[1 * size, 1 * size, 0.1]}
      >
        <Sticker
          position={[0, 0, 0.1]}
          rotation={[0, 0, 0]}
          scale={1}
          texture={texture}
          transparentMaterial
        />
      </mesh>
    </>
  )
}
