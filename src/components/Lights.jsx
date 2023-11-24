import { SpotLight, useDepthBuffer, useHelper } from "@react-three/drei"
import { useRef } from "react"
import { SpotLightHelper } from "three"

const floodLightConfig = {
  castShadow: true,
  color: "#E5F4ED",
  penumbra: 0.2,
  radiusTop: 0.5,
  radiusBottom: 40,
  distance: 80,
  angle: 0.9,
  attenuation: 20,
  attenuation: 20,
  anglePower: 5,
  intensity: 0.5,
  opacity: 0.2,
}

export default function Lights() {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const ref7 = useRef()
  const ref8 = useRef()
  useHelper(ref, SpotLightHelper, "cyan")
  useHelper(ref2, SpotLightHelper, "cyan")
  useHelper(ref3, SpotLightHelper, "cyan")
  useHelper(ref4, SpotLightHelper, "cyan")
  return (
    <>
      <ambientLight intensity={0.015} />

      {/* front */}
      <SpotLight ref={ref} position={[6.1, 5.2, 10]} {...floodLightConfig} />
      <SpotLight ref={ref2} position={[-6.1, 5.2, 10]} {...floodLightConfig} />
      {/* back */}
      <SpotLight ref={ref3} position={[6.1, 5.2, -10]} {...floodLightConfig} />
      <SpotLight ref={ref4} position={[-6.1, 5.2, -10]} {...floodLightConfig} />
    </>
  )
}
