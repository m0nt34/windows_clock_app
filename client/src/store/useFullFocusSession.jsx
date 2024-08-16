import { create } from "zustand";

export const useFullFocusSession = create((set) => ({
  startFocusSession: false,
  focusSession: [],
  setFocusSession: (newSession) => set({ focusSession: newSession }),
  toggleStartFocusSession: () =>
    set((state) => ({ startFocusSession: !state.startFocusSession })),
}));
