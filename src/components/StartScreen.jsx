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

function Button({ isIntro, setIsIntro }) {
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
        text-5xl hover:bg-purple-400 bg-purple-700
        ${isIntro && "mx-6"}`}
      onTouchStart={() => {
        if (isIntro) {
          setIsIntro(false)
        } else {
          setIsTouch(true)
          setPhase("ready")
          playSound(backgroundMusic)
        }
      }}
      onClick={() => {
        if (isIntro) {
          setIsIntro(false)
        } else {
          setPhase("ready")
          playSound(backgroundMusic)
        }
      }}
    >
      {isIntro ? "Next" : "Start"}
    </button>
  )
}

function Controls() {
  return (
    <>
      <div>
        <div className="text-5xl text-purple-700">Controls</div>
        <div className="text-xl">Use 🖱️ or Swipe to Adjust camera</div>
        <div className="text-xl">Press 🔊 to mute sounds</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col  gap-3 text-2xl">
          <div className="text-2xl text-gray-500">Desktop</div>
          <div className="flex gap-1">
            <Key value="W" />
            <Key value="S" />
            <Key value="A" />
            <Key value="D" /> - RUN
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
          <div className="flex gap-1">🕹️ - RUN</div>
          <div>⚪ - Jump</div>
          <div>
            <Key value="1" /> - Open
          </div>
        </div>
      </div>
    </>
  )
}

function Intro() {
  return (
    <div className="mx-6 max-w-prose">
      <div className="text-5xl text-purple-700">Hi👋 I'm Steve</div>
      <div className="text-xl text-justify">
        As a dynamic creative developer based in Nairobi, I fuse imagination
        with code to craft immersive digital experiences. With a fervent
        enthusiasm for machine learning, I explore its endless possibilities in
        shaping innovative solutions. My journey is deeply intertwined with the
        spirit of <span className="text-red-700">Manchester United</span> ,
        reflected in my football-themed portfolio where I've sculpted a vibrant
        stadium world, featuring a devilish character paying homage to the
        renowned <span className="text-red-700"> Red Devils</span>. Join me in
        exploring the intersection of technology and passion for football within
        this digital arena.
      </div>
    </div>
  )
}

export default function StartScreen() {
  const { progress } = useProgress()
  const [isIntro, setIsIntro] = useState(true)

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black text-white
    tracking-wider"
    >
      {progress < 100 ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 ">
          {isIntro ? <Intro /> : <Controls />}
          <Button isIntro={isIntro} setIsIntro={setIsIntro} />
        </div>
      )}
    </div>
  )
}
