import { create } from "zustand";

interface TempState {
  currentItem: string | null;
  setCurrentItem: (currentItem: string | null) => void;
}

const useTempState = create<TempState>()((set) => ({
  currentItem: null,
  setCurrentItem: (currentItem) => set({ currentItem }),
}));

export default useTempState;
