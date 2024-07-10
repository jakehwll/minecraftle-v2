import useGameState from "../hooks/useGameState";
import { Container } from "./Container";

export const GameOver = () => {
  const { gameState } = useGameState();
  
  return (
    <Container>
      {gameState === "won" ? <h1>You win!</h1> : <h1>Game Over</h1>}
    </Container>
  );
};
