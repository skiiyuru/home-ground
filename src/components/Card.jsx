import { Html, useKeyboardControls } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useEffect, useState } from "react"
import { degToRad } from "three/src/math/MathUtils"
import Sticker from "./Sticker"
import useGame from "../store/useGame"

const size = 4

export default function Card(props) {
  const [showHint, setShowHint] = useState(false)
  const [isMobile] = useGame((state) => [state.isMobile])

  const openLink = useKeyboardControls((state) => state.action4)

  useEffect(() => {
    // let timer

    if (showHint && openLink && props.data.link) {
      setTimeout(() => {
        window.open(props.data.link)
        // setShowHint(false)
      }, 1500)
    }

    // return () => {
    //   clearTimeout(timer)
    // }
  }, [openLink])

  return (
    <RigidBody
      type="fixed"
      // colliders="cuboid"
      restitution={0.2}
      friction={1}
      {...props}
      rotation-y={props.forSkills ? degToRad(360) : degToRad(180)}
    >
      <mesh
        geometry={props.geometry}
        material={props.material}
        scale={[0.05 * size, 0.4 * size, 0.7 * size]}
        castShadow
        receiveShadow
      >
        <Sticker
          position={[0.5, 0.02, 0]} // Position of the decal
          rotation={[0, degToRad(90), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[1, 0.95, 1]} // Scale of the decal
          texture={props.data.texture}
        />

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
            {props?.data?.title && (
              <div className="text-2xl">{props?.data?.title}</div>
            )}
            {props?.data?.description && <div>{props?.data?.description}</div>}

            {props?.data?.roles && (
              <div className="flex gap-2">
                {props?.data?.roles.map((role, idx) => (
                  <div
                    key={role + idx}
                    className=" border-solid border-2
                    border-white text-sm px-2 py-1 
                    rounded-lg
                    "
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}

            {props?.data?.sections && (
              <div className="flex flex-col gap-3">
                {props?.data?.sections.map((section) => (
                  <div key={section.title}>
                    <div className="">{section.title}</div>
                    <div className="flex gap-2">
                      {section.children.map((label, idx) => (
                        <div
                          key={label + idx}
                          className=" border-solid border-2
                          border-white text-sm px-2 py-1 
                          rounded-lg justify
                          "
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {props?.data?.link && (
              <div className="text-gray-400 text-sm">
                {" "}
                Press {isMobile ? '"2"' : '"F"'} to open
              </div>
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
