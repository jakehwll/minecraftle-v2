import { format } from "date-fns";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { RECIPES } from "./useRecipes";

interface GameState {
  date: string;
  setDate: (date: string) => void;
  recipe: string;
  setRecipe: (recipe: string) => void;
  craftingTables: Array<Array<Array<string | null>>>;
  setCraftingTables: (
    craftingTables: Array<Array<Array<string | null>>>
  ) => void;
  inventory: Array<Array<string | null>>;
  setInventory: (inventory: Array<Array<string | null>>) => void;
  gameState: "inProgress" | "won" | "lost";
  setGameState: (gameState: "inProgress" | "won" | "lost") => void;
  resetGameState: () => void;
}

const getDailyRecipe = () => {
  const recipeKeys = Object.keys(RECIPES);
  const daysThisYear = parseInt(
    format(new Date(), "D", {
      useAdditionalDayOfYearTokens: true,
    })
  );
  return recipeKeys[daysThisYear % recipeKeys.length];
}

const useGameState = create<GameState>()(
  persist(
    (set) => ({
      date: format(new Date(), "yyyy-MM-dd"),
      setDate: (date) => set({ date }),
      recipe: getDailyRecipe(),
      setRecipe: (recipe) => set({ recipe }),
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
      resetGameState: () => {
        set({
          date: format(new Date(), "yyyy-MM-dd"),
          recipe: getDailyRecipe(),
          craftingTables: [],
          inventory: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ],
          gameState: "inProgress",
        });
      },
    }),
    {
      name: "minecraftle-game-state",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);

export default useGameState;
