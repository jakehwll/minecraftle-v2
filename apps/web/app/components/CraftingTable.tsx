import useGameState from "~/hooks/useGameState";
import { RECIPES } from "~/hooks/useRecipes";
import { Container } from "./Container";
import { Crafting } from "./Crafting";

export const CraftingTable = ({
  craftingTable
}: {
  craftingTable: Array<Array<string | null>>
}) => {
  const { recipe } = useGameState();

  return (
    <Container>
      <Crafting
        recipe={RECIPES[recipe].input}
        craftingTable={craftingTable}
        disabled
      />
    </Container>
  );
};
