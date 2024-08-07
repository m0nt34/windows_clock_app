import { create } from "zustand";

export const useEdit = create((set) => ({
  edit: false,
  editTimer: 0,
  setEdit: () => set((state) => ({ edit: !state.edit })),
  setEditTimer: (id) => set({ editTimer: id }),
}));