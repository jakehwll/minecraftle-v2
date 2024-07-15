import useGameState from "../hooks/useGameState";
import { Button } from "./Button";
import { Crafting } from "./Crafting";
import { Modal } from "./Modal";
import classes from "./GameOver.module.css";
import { useEffect, useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { checkMatchMap } from "../utils/recipe";
import { matchMapToEmoji } from "../utils/emoji";
import { useTranslation } from "~/hooks/useTranslation";

export const GameOver = () => {
  const { gameState, craftingTables } = useGameState();
  const [shared, setShared] = useState(false);
  const recipes = useRecipes();
  const { recipe } = useGameState();

  useEffect(() => {
    if (!shared) return;
    const clipboard = [
      `Minecraftle - ${craftingTables.length}/10`,
      "<https://minecraftle2.vercel.app/>",
      "",
      ...craftingTables.map((table) => [
        matchMapToEmoji({
          matchMap: checkMatchMap({
            recipe: recipes[recipe].input,
            input: table,
          }),
        }),
        ""
      ]),
    ].flat();
    navigator.clipboard.writeText(clipboard.join("\n"));
    setTimeout(() => setShared(false), 3000);
  }, [shared]);

  const solution = recipes[recipe];

  return (
    <Modal
      title={`Solution: ${useTranslation(solution.output)}`}
      content={
        <>
          <div className={classes.crafting}>
            <Crafting
              craftingTable={craftingTables[craftingTables.length - 1]}
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
          <Button className={classes.button} onClick={() => setShared(true)}>
            {shared ? "Copied!" : "Share"}
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
