import { create } from "zustand"

export default create((set) => {
  return {
    isTouch: false,
    setIsTouch: (isTouch) => {
      set((state) => {
        return { isTouch }
      })
    },

    phase: "intro", // intro | ready |
    setPhase: (phase) => {
      set((state) => ({ phase }))
    },
  }
})
