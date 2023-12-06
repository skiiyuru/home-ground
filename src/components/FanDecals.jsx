import { Decal, useTexture } from "@react-three/drei"
import FlatText from "./FlatText"
import Sticker from "./Sticker"

const crestSize = 2
const playerSize = 3

export default function FanDecals(props) {
  const [crest, player] = useTexture([
    "./images/crest.png",
    "./images/player.png",
  ])

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
        scale={[1 * crestSize, 1 * crestSize, 0.1]}
      >
        <Sticker
          position={[0, 0, 0.1]}
          rotation={[0, 0, 0]}
          scale={1}
          texture={crest}
          transparentMaterial
        />
      </mesh>

      <mesh
        rotation-y={Math.PI}
        position={[0.2, 2.4, -12]}
        material={props.material}
        geometry={props.geometry}
        scale={[1 * playerSize, 1 * playerSize, 0.1]}
      >
        <Sticker
          // debug
          position={[0, 0, -0.1]}
          rotation={[0, 0, 0]}
          scale={1}
          texture={player}
          transparentMaterial
        />
      </mesh>
    </>
  )
}
