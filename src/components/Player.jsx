import { KeyboardControls, useKeyboardControls } from "@react-three/drei"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import CharacterModel from "./CharacterModel"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { handleFall } from "../utils"

/**
 * Character url preset
 */
// const characterURL = "/models/sk.glb"

/**
 * Character animation set preset
 */
// const animationSet = {
//   idle: "idle",
//   walk: "walk",
//   run: "run",
//   jump: "jump",
//   jumpIdle: "jumpIdle",
//   jumpLand: "jumpLand",
//   fall: "jumpIdle",
//   action1: "open",
//   action2: "pass",
//   // action3: "",
//   // action4: "",
// }
const characterURL = "/models/Demon.glb"

const animationSet = {
  idle: "CharacterArmature|Idle",
  walk: "CharacterArmature|Walk",
  run: "CharacterArmature|Run",
  jump: "CharacterArmature|Jump",
  jumpIdle: "CharacterArmature|Jump_Idle",
  jumpLand: "CharacterArmature|Jump_Land",
  fall: "CharacterArmature|Duck", // This is for falling from high sky
  // action1: "CharacterArmature|Punch",
  // action2: "CharacterArmature|Death",
  // action3: "CharacterArmature|HitReact",
  action4: "CharacterArmature|Wave",
}

export default function Player() {
  const player = useRef()

  useFrame((state, delta) => {
    handleFall(player)
  })

  return (
    <Ecctrl ref={player} name="character" animated position={[0, 12, 0]}>
      <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
        <CharacterModel />
      </EcctrlAnimation>
    </Ecctrl>
  )
}
