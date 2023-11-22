import { Decal, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { degToRad } from "three/src/math/MathUtils"

export default function Icon(props) {
  const texture = useTexture(props.src ?? "./textures/github.png")

  return (
    <RigidBody
      // type="fixed"
      colliders="cuboid"
      restitution={0.2}
      friction={1}
      {...props}
    >
      <mesh scale={1.5}>
        {/* <sphereGeometry args={[0.3, 64, 64]} /> */}
        <boxGeometry args={[0.15, 0.5, 0.5]} />
        <meshNormalMaterial />
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[0, 0, 0]} // Position of the decal
          rotation={[0, degToRad(270), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={0.4} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
      </mesh>
    </RigidBody>
  )
}
