import { useProgress } from "@react-three/drei"
import useGame from "../store/useGame"
import { playSound } from "../utils"
import { useState } from "react"

function Loader() {
  return (
    <div className="flex space-x-2">
      <div className="h-8 w-8 bg-purple-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-purple-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-purple-700 rounded-full animate-bounce"></div>
    </div>
  )
}

function Button() {
  const [setIsTouch, setPhase] = useGame((state) => [
    state.setIsTouch,
    state.setPhase,
  ])

  const [backgroundMusic] = useState(
    () =>
      new Howl({
        src: ["./sounds/bg1.mp3"],
        preload: true,
        // autoplay: false,
        loop: true,
        volume: 1,
      })
  )

  return (
    <button
      className={`border-solid border-2 border-white p-3 
        rounded-lg text-white tracking-wider 
        text-5xl hover:bg-purple-700`}
      onTouchStart={() => {
        setIsTouch(true)
        setPhase("ready")
        // playSound(backgroundMusic)
      }}
      onClick={() => {
        setPhase("ready")
        // playSound(backgroundMusic)
      }}
    >
      start
    </button>
  )
}

export default function StartScreen() {
  const { progress } = useProgress()

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
      {progress < 100 ? <Loader /> : <Button />}
    </div>
  )
}
