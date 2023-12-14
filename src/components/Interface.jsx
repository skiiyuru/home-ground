import { useEffect, useState } from "react"
import { Howler } from "howler"

export default function Interface() {
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    Howler.mute(muted)
  }, [muted])
  return (
    <div className="fixed top-0 right-0 z-50 m-4">
      <button
        className="border-solid border-2 border-white p-2
                rounded-full text-2xl select-none hover:bg-gray-50 "
        onClick={() => setMuted(!muted)}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  )
}
