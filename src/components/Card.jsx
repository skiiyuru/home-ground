import { Decal, Html, useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useState } from "react"
import { degToRad } from "three/src/math/MathUtils"

const size = 4

export default function Card(props) {
  const texture = useTexture(props?.data?.img ?? "./textures/github.png")
  const [showHint, setShowHint] = useState(false)

  return (
    <RigidBody
      type="fixed"
      // colliders="cuboid"
      restitution={0.2}
      friction={1}
      {...props}
      rotation-y={degToRad(180)}
    >
      <mesh
        geometry={props.geometry}
        material={props.material}
        scale={[0.05 * size, 0.4 * size, 0.7 * size]}
        castShadow
        receiveShadow
      >
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[0.5, 0.02, 0]} // Position of the decal
          rotation={[0, degToRad(90), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[1, 0.95, 1]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
        {showHint && (
          <Html
            position={[0, -1, 0]}
            className="bg-slate-900/75 text-white 
             tracking-wider  p-3 
            rounded-lg select-none w-72 flex flex-col gap-3"
            center
            distanceFactor={8}
            // occlude={[boxRef, sphereRef]}
          >
            <div className="text-2xl">{props?.data?.title}</div>
            <div>{props?.data?.description}</div>
            <div className="flex gap-2">
              {props?.data?.roles &&
                props?.data?.roles.map((role, idx) => (
                  <div
                    key={role + idx}
                    className=" border-solid border-2
                    border-white text-sm px-2 py-1 
                    rounded-lg justify
                    "
                  >
                    {role}
                  </div>
                ))}
            </div>
            {props?.data?.link && (
              <div className="text-gray-400 text-sm">Press "F" to open</div>
            )}
          </Html>
        )}
      </mesh>

      <CuboidCollider
        name={props.label}
        args={[0.6, 0.7, 0.8]}
        sensor
        onIntersectionEnter={(data) => {
          // console.log(data.other.colliderObject.parent.name)
          if (data.other.colliderObject.parent.name === "character") {
            setShowHint(true)
          }
        }}
        onIntersectionExit={() => setShowHint(false)}
        // position-y={4}
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
