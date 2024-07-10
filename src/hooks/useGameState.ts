import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
  craftingTables: Array<Array<Array<string | null>>>;
  setCraftingTables: (
    craftingTables: Array<Array<Array<string | null>>>
  ) => void;
  inventory: Array<Array<string | null>>;
  setInventory: (inventory: Array<Array<string | null>>) => void;
  gameState: "inProgress" | "won" | "lost";
  setGameState: (gameState: "inProgress" | "won" | "lost") => void;
}

const useGameState = create<GameState>()(
  persist(
    (set) => ({
      craftingTables: [],
      setCraftingTables: (craftingTables) => set({ craftingTables }),
      inventory: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      setInventory: (inventory) => set({ inventory }),
      gameState: "inProgress",
      setGameState: (gameState) => set({ gameState }),
    }),
    {
      name: "minecraftle-game-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGameState;
