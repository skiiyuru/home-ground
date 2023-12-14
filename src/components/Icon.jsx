import { Decal, Html, useKeyboardControls, useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useEffect, useState } from "react"
import { degToRad } from "three/src/math/MathUtils"
import Sticker from "./Sticker"
import useGame from "../store/useGame"
import { useFrame } from "@react-three/fiber"

const size = 1.5

export default function Icon(props) {
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
        <Sticker
          // debug
          position={[-0.15, 0, 0]}
          rotation={[0, degToRad(270), 0]}
          scale={0.8}
          texture={props.data.texture}
        />

        {showHint && (
          <Html
            className="bg-slate-800/75 text-white text-center tracking-wider text-lg p-3 rounded-xl whitespace-nowrap select-none"
            position={[0, 0, 0]}
            center
            distanceFactor={8}
          >
            {props.data.label === "mail"
              ? props.data.email
              : `Press ${isMobile ? "2" : "F"} to open`}
          </Html>
        )}
      </mesh>

      <CuboidCollider
        name={props.data.label}
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
