import { Container } from "./Container";
import { Crafting } from "./Crafting";

export const CraftingTable = ({
  craftingTable
}: {
  craftingTable: Array<Array<string | null>>
}) => {
  

  return (
    <Container>
      <Crafting craftingTable={craftingTable} />
    </Container>
  );
};
