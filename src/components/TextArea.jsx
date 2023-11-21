import { Text } from "@react-three/drei"

export default function TextArea(props) {
  const fontUrl1 = "./fonts/oswald-v53-latin-regular.woff"
  const fontUrl2 = "./fonts/lato-v24-latin-regular.woff"
  const fontUrl3 = "./fonts/bebas-neue-v9-latin-regular.woff"

  return (
    <Text
      rotation-x={-Math.PI * 0.5}
      rotation-z={-Math.PI}
      font={props.isParagraph ? fontUrl2 : fontUrl3}
      characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      {...props}
    >
      {props.value}
    </Text>
  )
}
