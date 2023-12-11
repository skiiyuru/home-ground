export function playSound(sound) {
  if (sound.playing()) {
    return
  } else {
    sound.fade(1, 0, 1000)
    sound.volume(Math.random())
    sound.play()
  }
}

function reset(ref, vec = { x: 0, y: 7, z: 0 }) {
  ref.current.setTranslation(vec)
  ref.current.setLinvel({ x: 0, y: 0, z: 0 })
  ref.current.setAngvel({ x: 0, y: 0, z: 0 })
}

export function handleFall(ref) {
  if (ref.current) {
    const position = ref.current.translation()
    if (position.y < -6) {
      reset(ref)
    }
  }
}
