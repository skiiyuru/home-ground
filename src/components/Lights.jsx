import { Sky } from "@react-three/drei"
import { useRef } from "react"

const floodLightConfig = {
  castShadow: true,
  color: "#E5F4ED",
  penumbra: 0.2,
  radiusTop: 0.5,
  radiusBottom: 40,
  distance: 80,
  angle: 0.9,
  attenuation: 20,
  anglePower: 5,
  intensity: 1,
  opacity: 0.2,
  // "shadow-mapSize": [1024 * 1, 1024 * 1],
}

export default function Lights() {
  const ref = useRef()

  // useHelper(ref, DirectionalLightHelper, "cyan")
  // useHelper(ref2, SpotLightHelper, "cyan")

  const sunPosition = [-15, 15, 20]

  return (
    <>
      <Sky
        distance={450000}
        sunPosition={sunPosition}
        inclination={0}
        azimuth={0.25}
      />

      <directionalLight
        ref={ref}
        intensity={0.5}
        castShadow
        shadow-bias={-0.0004}
        position={sunPosition}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-mapSize={[512, 512]}
      />

      <ambientLight intensity={0.1} />

      {/* front */}
      {/* <SpotLight position={[6.1, 5.2, 10]} {...floodLightConfig} /> */}
      {/* <SpotLight position={[-6.1, 5.2, 10]} {...floodLightConfig} /> */}
      {/*  */}
      {/* <SpotLight ref={ref} position={[-10.7, 8, 13.1]} {...floodLightConfig} /> */}
      {/* <SpotLight ref={ref} position={[12.6, 9.2, 16]} {...floodLightConfig} /> */}

      {/* back */}
      {/* <SpotLight position={[6.1, 5.2, -10]} {...floodLightConfig} /> */}
      {/* <SpotLight position={[-6.1, 5.2, -10]} {...floodLightConfig} /> */}
      {/*  */}
      {/* <SpotLight
        ref={ref2}
        position={[-12.6, 9.2, -16]}
        {...floodLightConfig}
      /> */}
      {/* <SpotLight position={[12.6, 9.2, -16]} {...floodLightConfig} /> */}
    </>
  )
}
