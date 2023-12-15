import { Text, useFont } from "@react-three/drei"

export default function FlatText(props) {
  const fontUrl = "./fonts/bebas-neue-v9-latin-regular.woff"

  return (
    <Text
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

useFont.preload("/fonts/bebas-neue-v9-latin-regular.woff")
