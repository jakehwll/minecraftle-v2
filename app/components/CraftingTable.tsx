import useGameState from "~/hooks/useGameState";
import { useRecipes } from "../hooks/useRecipes";
import { Container } from "./Container";
import { Crafting } from "./Crafting";

export const CraftingTable = ({
  craftingTable
}: {
  craftingTable: Array<Array<string | null>>
}) => {
  const recipes = useRecipes();
  const { recipe } = useGameState();

  return (
    <Container>
      <Crafting
        recipe={recipes[recipe].input}
        craftingTable={craftingTable}
        disabled
      />
    </Container>
  );
};
