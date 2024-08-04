import { create } from "zustand";

export const usePlay = create((set) => ({
  play: false,
  setPlay: () => set((state) => ({ play: !state.play })),
}));