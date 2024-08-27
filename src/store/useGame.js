import { create } from "zustand"

export default create((set) => {
  return {
    phase: "intro", // intro | ready |
    setPhase: (phase) => {
      set((state) => ({ phase }))
    },
  }
})
