import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
  craftingTables: Array<Array<Array<string | null>>>;
  setCraftingTables: (
    craftingTables: Array<Array<Array<string | null>>>
  ) => void;
}

const useGameState = create<GameState>()(
  persist((set) => ({
    craftingTables: [],
    setCraftingTables: (craftingTables) => set({ craftingTables }),
  }), {
    name: "minecraftle-game-state",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useGameState;
