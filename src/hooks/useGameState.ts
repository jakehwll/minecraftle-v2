import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
  craftingTables: Array<Array<Array<string | null>>>;
  setCraftingTables: (
    craftingTables: Array<Array<Array<string | null>>>
  ) => void;
  inventory: Array<Array<string | null>>;
  setInventory: (inventory: Array<Array<string | null>>) => void;
}

const useGameState = create<GameState>()(
  persist((set) => ({
    craftingTables: [],
    setCraftingTables: (craftingTables) => set({ craftingTables }),
    inventory: [
      [null, null, null,], [null, null, null], [null, null, null],
    ],
    setInventory: (inventory) => set({ inventory }),
  }), {
    name: "minecraftle-game-state",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useGameState;
