import { create } from "zustand";

export const useDismissPopup = create((set) => ({
  showDismiss: false,
  dismissName: "",
  setShowDismiss: () => set((state) => ({ showDismiss: !state.showDismiss })),
  setName: (name) => set(() => ({ dismissName: name })),
}));
