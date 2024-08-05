import { create } from "zustand";

export const useTLTrigger = create((set) => ({
  triggerTL: false,
  setTLtoTrue: () => set({ triggerTL: true }),
  setTLtoFalse: () => set({ triggerTL: false }),
}));
