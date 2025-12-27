import { create } from "zustand";

interface TempState {
  currentItem: string | null;
  setCurrentItem: (currentItem: string | null) => void;
  dragging: boolean;
  setDragging: (dragging: boolean) => void;
}

const useTempState = create<TempState>()((set) => ({
  currentItem: null,
  setCurrentItem: (currentItem) => set({ currentItem }),
  dragging: false,
  setDragging: (dragging) => set({ dragging }),
}));

export default useTempState;
