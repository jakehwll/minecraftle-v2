import useGameState from "../hooks/useGameState";
import { Container } from "./Container";
import classes from "./GameOver.module.css";

export const GameOver = () => {
  const { gameState } = useGameState();

  const { craftingTables } = useGameState();

  return (
    <Container className={classes.root}>
      {gameState === "won" ? <h1>You win!</h1> : <h1>Game Over</h1>}
      <p>You took {craftingTables.length} guesses!</p>
      <p>Minecraftle {new Date().toISOString().split("T")[0]}</p>
    </Container>
  );
};
