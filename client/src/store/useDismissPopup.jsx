import { create } from "zustand";

export const useDismissPopup = create((set) => ({
  showDismiss: false,
  showTimeOnDismiss: true,
  dismissName: "",
  dismissMainName:"",
  setShowDismiss: () => set((state) => ({ showDismiss: !state.showDismiss })),
  setShowTimeOnDismiss: (show) => set(() => ({ showTimeOnDismiss: show })),
  setName: (name) => set(() => ({ dismissName: name })),
  setMainName: (name) => set(() => ({ dismissMainName: name })),
}));
