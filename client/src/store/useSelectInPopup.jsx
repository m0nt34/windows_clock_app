import { create } from "zustand";

export const useTimerSelected = create((set) => ({
  timerSelected: true,
  setTimerSelectedToFalse: () => set({ timerSelected: false }),
  setTimerSelectedToTrue: () => set({ timerSelected: true }),
}));
