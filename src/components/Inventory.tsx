import useGameState from "../hooks/useGameState";
import { useInventory } from "../hooks/useInventory";
import useTempState from "../hooks/useTempState";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from './Inventory.module.css';
import { Slot } from "./Slot";

export const Inventory = () => {
  const { craftingTables, setCraftingTables } =
    useGameState();
  const { currentItem, setCurrentItem } =
    useTempState();
  const inventory = useInventory();

  const onSubmit = () => {
    setCraftingTables([
      ...craftingTables,
      [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    ]);
  };

  const onItemClick = (item: string | null) => {
    if ( !item ) return
    setCurrentItem(item)
  }

  return (
    <Container>
      <div className={classes.root}>
        <header>
          <Crafting onSubmit={onSubmit} />
        </header>
        <section className={classes.inventory}>
          {inventory &&
            inventory.map((item) => (
              <Slot item={item} onClick={onItemClick} />
            ))}
        </section>
      </div>
    </Container>
  );
}