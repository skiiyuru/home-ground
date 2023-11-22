import { SpotLight } from "@react-three/drei"

export default function Lights() {
  return (
    <>
      <directionalLight
        intensity={0.7}
        color={"#FFFFED"}
        castShadow
        shadow-bias={-0.0004}
        position={[-20, 20, 20]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
      <ambientLight intensity={0.2} />
      {/* <SpotLight
        position={[0, 5, 0]}
        distance={5}
        angle={2}
        attenuation={10}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}
    </>
  )
}
