import { create } from "zustand";

interface MobileMenuState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
