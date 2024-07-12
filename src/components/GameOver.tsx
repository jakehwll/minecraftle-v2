import useGameState from "../hooks/useGameState";
import { Button } from "./Button";
import { Crafting } from "./Crafting";
import { Modal } from "./Modal";
import classes from "./GameOver.module.css";
import { useEffect, useState } from "preact/hooks";

export const GameOver = () => {
  const { gameState, craftingTables } = useGameState();
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (!shared) return;
    navigator.clipboard.writeText("Test!");
    setTimeout(() => setShared(false), 3000);
  }, [shared]);

  return (
    <Modal
      title={`Solution: Crafting Table`}
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
