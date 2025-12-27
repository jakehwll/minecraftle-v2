import useGameState from "../hooks/useGameState";
import { Button } from "./Button";
import { Crafting } from "./Crafting";
import { Modal } from "./Modal";
import classes from "./GameOver.module.css";
import { useEffect, useState } from "react";
import { checkMatchMap } from "../utils/recipe";
import { matchMapToEmoji } from "../utils/emoji";
import { RECIPES } from "../hooks/useRecipes";
import { TRANSLATION } from "../hooks/useTranslation";

export const GameOver = () => {
  const { gameState, craftingTables } = useGameState();
  const [shared, setShared] = useState(false);
  const { recipe } = useGameState();

  useEffect(() => {
    if (!shared) return;
    const clipboard = [
      `Minecraftle - ${gameState === "lost" ? "X" : craftingTables.length}/10`,
      "<https://minecraftle2.vercel.app/>",
      "",
      ...(
        craftingTables.map((table) =>
          matchMapToEmoji({ matchMap: checkMatchMap({ recipe: RECIPES[recipe].input, input: table }) }),
        )
      ),
    ].flat();
    navigator.clipboard.writeText(clipboard.join("\n"));
    setTimeout(() => setShared(false), 3000);
  }, [shared]);

  const solution = RECIPES[recipe];

  return (
    <Modal
      title={`Solution: ${TRANSLATION[solution.output]}`}
      content={
        <>
          <div className={classes.crafting}>
            <Crafting
              craftingTable={solution.input}
              disabled
            />
          </div>
          <p>
            {gameState === "won"
              ? `You won! Took ${craftingTables.length} ${
                  craftingTables.length > 1 ? `guesses` : `guess`
                }.`
              : "You've run out of guesses!"}
          </p>
          <Button fullWidth onClick={() => setShared(true)}>
            {shared ? "Copied!" : "Copy Results"}
          </Button>
        </>
      }
      props={{
        root: {
          defaultOpen: true,
        },
      }}
    >
      <Button>View Results</Button>
    </Modal>
  );
};
