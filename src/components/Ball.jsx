import { Gltf } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export default function Ball() {
  return (
    <RigidBody
      colliders={"ball"}
      restitution={1}
      // friction={1}
      position-y={7}
      position-x={-3}
      angularDamping={1}
      linearDamping={1}
    >
      <Gltf scale={0.4} src="/models/ball.glb" castShadow />
    </RigidBody>
  )
}
