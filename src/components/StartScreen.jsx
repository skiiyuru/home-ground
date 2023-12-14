import { useProgress } from "@react-three/drei"
import useGame from "../store/useGame"
import { playSound } from "../utils"
import { useState } from "react"
import { Howl } from "howler"

function Key({ value }) {
  return (
    <span
      className="border-solid border-2 border-white px-2 
                rounded-lg"
    >
      {value}
    </span>
  )
}

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
        rounded-lg  
        text-5xl hover:bg-purple-400 bg-purple-700`}
      onTouchStart={() => {
        setIsTouch(true)
        setPhase("ready")
        playSound(backgroundMusic)
      }}
      onClick={() => {
        setPhase("ready")
        playSound(backgroundMusic)
      }}
    >
      start
    </button>
  )
}

export default function StartScreen() {
  const { progress } = useProgress()

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black text-white
    tracking-wider"
    >
      {progress < 100 ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 ">
          <div className="text-5xl text-purple-700">How to play</div>
          <div className="flex gap-10">
            <div className="flex flex-col  gap-3 text-2xl">
              <div className="text-2xl text-gray-500">Desktop</div>
              <div className="flex gap-1">
                <Key value="W" />
                <Key value="S" />
                <Key value="A" />
                <Key value="D" />- Move
              </div>
              <div>
                <Key value={"Spacebar"} /> - Jump
              </div>
              <div>
                <Key value="1" /> - Open
              </div>
            </div>
            <div className="flex flex-col  gap-3 text-2xl">
              <div className="text-2xl text-gray-500">Mobile</div>
              <div className="flex gap-1">🕹️ - Move</div>
              <div>⚪ - Jump</div>
              <div>
                <Key value="1" /> - Open
              </div>
            </div>
          </div>
          <Button />
        </div>
      )}
    </div>
  )
}
