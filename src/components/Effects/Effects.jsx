import { Bloom, EffectComposer } from "@react-three/postprocessing"

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom minmapBlur luminanceThreshold={1} intensity={1.42} radius={0.72} />
    </EffectComposer>
  )
}
