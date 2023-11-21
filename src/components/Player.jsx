import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody, useRapier } from "@react-three/rapier"
import { useEffect, useRef, useState } from "react"
import { Vector3 } from "three"
import useGame from "../stores/useGame"

export default function Player() {
  const ball = useRef()
  const [subscribeKeys, getKeys] = useKeyboardControls()
  const { rapier, world } = useRapier()
  const rapierWorld = world.raw()

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10))
  const [smoothedCameraTarget] = useState(() => new Vector3())

  const joystickPosition = useGame((state) => state.position)
  const updateJump = useGame((state) => state.updateJump)

  function jump() {
    // prevent double jump
    const origin = ball.current.translation()
    origin.y -= 0.31
    const direction = { x: 0, y: -1, z: 0 }
    const ray = new rapier.Ray(origin, direction)
    const hit = rapierWorld.castRay(ray, 10, true)

    if (hit?.toi < 0.15) {
      ball.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
    }
  }

  useEffect(() => {
    updateJump(jump)
  }, [])

  function reset() {
    ball.current.setTranslation({ x: 0, y: 1, z: 0 })
    ball.current.setLinvel({ x: 0, y: 0, z: 0 }) // remove linear velocity/force
    ball.current.setAngvel({ x: 0, y: 0, z: 0 }) // remove angular velocity/force
  }

  useEffect(() => {
    // listen to jump key press
    const unsubscribeJump = subscribeKeys(
      // selector
      (state) => state.jump,
      // instruction
      (value) => {
        if (value) {
          jump()
        }
      }
    )

    return () => {
      unsubscribeJump()
    }
  }, [])

  useFrame((state, delta) => {
    // Controls
    const { forward, back, left, right } = getKeys()
    const { x: jX, y: jY } = joystickPosition

    const impulse = { x: 0, y: 0, z: 0 }
    const torque = { x: 0, y: 0, z: 0 }

    const impulseStrength = 0.6 * delta
    const torqueStrength = 0.2 * delta

    if (forward || jY > 0) {
      impulse.z -= impulseStrength
      torque.x -= torqueStrength
    }

    if (back || jY < 0) {
      impulse.z += impulseStrength
      torque.x += torqueStrength
    }

    if (left || jX < 0) {
      impulse.x -= impulseStrength
      torque.z += torqueStrength
    }

    if (right || jX > 0) {
      impulse.x += impulseStrength
      torque.z -= torqueStrength
    }

    ball.current.applyImpulse(impulse)
    ball.current.applyTorqueImpulse(torque)

    // update camera
    const ballPosition = ball.current.translation()
    const cameraPosition = new Vector3().copy(ballPosition)
    cameraPosition.x += 4
    cameraPosition.y += 5
    cameraPosition.z += 7

    const cameraTarget = new Vector3().copy(ballPosition)
    cameraTarget.y += 0.25

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

    state.camera.position.copy(smoothedCameraPosition)
    state.camera.lookAt(smoothedCameraTarget)
  })

  return (
    <RigidBody
      ref={ball}
      colliders="ball"
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      // to simulate air friction
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color={"mediumpurple"} />
      </mesh>
    </RigidBody>
  )
}
