import { Gltf } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export default function Ball() {
  return (
    <RigidBody colliders={"ball"} restitution={0.5} friction={1}>
      <Gltf
        scale={0.5}
        position-y={2}
        position-x={-3}
        src="/models/ball.glb"
        castShadow
      />
    </RigidBody>
  )
}
