import { create } from "zustand";
export const useEdit = create((set) => ({
  edit: false,
  setEdit: () => set((state) => ({ edit: !state.edit })),
}));
