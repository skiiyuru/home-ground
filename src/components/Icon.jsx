import { Decal, Html, useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useState } from "react"
import { degToRad } from "three/src/math/MathUtils"

const size = 1.5

export default function Icon(props) {
  const texture = useTexture(props.src ?? "./textures/github.png")
  const [showHint, setShowHint] = useState(false)

  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"
      // restitution={0.2}
      // friction={1}
      {...props}
    >
      <mesh
        material={props.blockMaterial}
        geometry={props.iconGeometry}
        scale={[0.1 * size, 0.5 * size, 0.5 * size]}
        castShadow
        receiveShadow
      >
        {/* <sphereGeometry args={[0.3, 64, 64]} /> */}
        {/* <boxGeometry args={[0.07, 0.5, 0.5]} /> */}
        {/* <meshNormalMaterial /> */}
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-0.15, 0, 0]} // Position of the decal
          rotation={[0, degToRad(270), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={0.8} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
        {showHint && (
          <Html
            className="bg-slate-800/75 text-white text-center tracking-wider text-lg p-3 rounded-xl whitespace-nowrap select-none"
            position={[0, 0, 0]}
            center
            distanceFactor={8}
          >
            Press "F" to open
          </Html>
        )}
      </mesh>

      <CuboidCollider
        name={props.label}
        args={[0.8, 0.7, 0.5]}
        sensor
        onIntersectionEnter={(data) => {
          // console.log(data.other.colliderObject.parent.name)
          if (data.other.colliderObject.parent.name === "character") {
            setShowHint(true)
          }
        }}
        onIntersectionExit={() => setShowHint(false)}
        position-y={4}
      />
    </RigidBody>
  )
}

/* 
CollisionPayload: {
    collider: RapierCollider;
    colliderObject?: Object3D;
    *other: CollisionTarget; the other object involved in the event
    rigidBody?: RapierRigidBody;
    rigidBodyObject?: Object3D;
    *target: CollisionTarget; the object firing the event
}
*/
