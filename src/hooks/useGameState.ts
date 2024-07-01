import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
  craftingTables: Array<Array<Array<string>>>,
  setCraftingTables: (craftingTables: Array<Array<Array<string>>>) => void
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
