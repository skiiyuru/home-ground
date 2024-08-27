import { useFrame } from "@react-three/fiber"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { useRef } from "react"
import { handleFall } from "../utils"
import CharacterModel from "./CharacterModel"

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
    <Ecctrl
      ref={player}
      name="character"
      animated
      position={[0, 12, 0]}
      mode="FixedCamera"
    >
      <EcctrlAnimation
        characterURL={characterURL}
        animationSet={animationSet}
      >
        <CharacterModel />
      </EcctrlAnimation>
    </Ecctrl>
  )
}
