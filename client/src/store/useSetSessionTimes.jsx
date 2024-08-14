import { create } from "zustand";

export const useSession = create((set) => ({
  session: {
    focus: 0,
    breaks: 0,
  },
  setSession: (unit, newParameter) =>
    set((state) => ({
      ...state.session,
      [unit]: newParameter,
    })),
}));
