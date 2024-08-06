import { create } from "zustand";

export const useShowPopup = create((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
}));
