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
  anglePower: 5,
  intensity: 1,
  opacity: 0.2,
  "shadow-mapSize": [1024, 1024],
}

export default function Lights() {
  const ref = useRef()
  const ref2 = useRef()
  // const ref3 = useRef()
  // const ref4 = useRef()
  // const ref5 = useRef()
  // const ref6 = useRef()
  // const ref7 = useRef()
  // const ref8 = useRef()
  // useHelper(ref, SpotLightHelper, "cyan")
  // useHelper(ref2, SpotLightHelper, "cyan")
  // useHelper(ref3, SpotLightHelper, "cyan")
  // useHelper(ref4, SpotLightHelper, "cyan")
  // useHelper(ref5, SpotLightHelper, "cyan")
  // useHelper(ref6, SpotLightHelper, "cyan")
  // useHelper(ref7, SpotLightHelper, "cyan")
  // useHelper(ref8, SpotLightHelper, "cyan")
  return (
    <>
      {/* <directionalLight
        intensity={0.45}
        color={"#E5F4ED"}
        castShadow
        shadow-bias={-0.0004}
        position={[-10, 20, 20]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-mapSize={[1024, 1024]}
      /> */}

      <ambientLight intensity={0.2} />

      {/* front */}
      {/* <SpotLight position={[6.1, 5.2, 10]} {...floodLightConfig} /> */}
      {/* <SpotLight position={[-6.1, 5.2, 10]} {...floodLightConfig} /> */}
      {/*  */}
      <SpotLight position={[-12.6, 9.2, 16]} {...floodLightConfig} />
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
