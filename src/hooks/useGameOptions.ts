import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameOptions {
  guiScale: number;
  setGuiScale: (scale: number) => void;
}

const useGameOptions = create<GameOptions>()(
  persist(
    (set) => ({
      guiScale: 1.5,
      setGuiScale: (guiScale: number) => set({ guiScale: guiScale }),
    }),
    {
      name: "minecraftle-game-options",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGameOptions;
