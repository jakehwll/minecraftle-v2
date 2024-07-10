import { useRecipes } from "../hooks/useRecipes";
import { Container } from "./Container";
import { Crafting } from "./Crafting";

export const CraftingTable = ({
  craftingTable
}: {
  craftingTable: Array<Array<string | null>>
}) => {
  const recipes = useRecipes();
  const recipe = recipes["crafting_table"].input;

  return (
    <Container>
      <Crafting recipe={recipe} craftingTable={craftingTable} />
    </Container>
  );
};
