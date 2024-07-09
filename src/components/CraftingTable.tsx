import { Container } from "./Container";
import { Crafting } from "./Crafting";

export const CraftingTable = ({
  craftingTable
}: {
  craftingTable: Array<Array<string | null>>
}) => {
  const onSubmit = () => {
    // Do nothing, this is just a placeholder.
  }

  return (
    <Container>
      <Crafting onSubmit={onSubmit} />
    </Container>
  );
};
