import { Gltf } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef, useState } from "react"
import { Howl, Howler } from "howler"
import { handleFall, playSound } from "../utils"
import { useFrame } from "@react-three/fiber"

export default function Ball() {
  const [hitSound] = useState(
    () =>
      new Howl({
        src: ["./sounds/ball.ogg"],
        preload: true,
        // autoplay: false,
        // loop: false,
        // volume: 1,
      })
  )

  const ref = useRef()

  useFrame((state, delta) => {
    handleFall(ref)
  })

  return (
    <RigidBody
      ref={ref}
      colliders={"ball"}
      restitution={1}
      // friction={1}
      position-y={7}
      position-x={-3}
      angularDamping={0.5}
      linearDamping={0.5}
      onCollisionEnter={(data) => {
        // console.log(data.other.colliderObject.parent.name)
        if (data.other.colliderObject.parent.name === "character") {
          playSound(hitSound)
        }
      }}
    >
      <Gltf scale={0.5} src="/models/ball.glb" castShadow />
    </RigidBody>
  )
}
