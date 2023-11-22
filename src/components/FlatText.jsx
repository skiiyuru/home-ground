import { Text } from "@react-three/drei"

export default function TextArea(props) {
  const fontUrl = "./fonts/bebas-neue-v9-latin-regular.woff"

  return (
    <Text
      rotation-x={-Math.PI * 0.5}
      rotation-z={-Math.PI}
      font={fontUrl}
      characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      letterSpacing={0.02}
      lineHeight={1.2}
      {...props}
    >
      {props.value}
    </Text>
  )
}
