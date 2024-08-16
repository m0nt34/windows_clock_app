import { create } from "zustand";

export const useSession = create((set) => ({
  session: {
    focus: 1,
    breaks: 0,
  },
  setSession: (unit, newParameter) =>
    set((state) => ({
      session: {
        ...state.session, 
        [unit]: newParameter,
      },
    })),
}));
