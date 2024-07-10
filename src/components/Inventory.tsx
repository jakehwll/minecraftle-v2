import useGameState from "../hooks/useGameState";
import { useItems } from "../hooks/useItems";
import useTempState from "../hooks/useTempState";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from './Inventory.module.css';
import { Slot } from "./Slot";

export const Inventory = () => {
  const items = useItems();
  const { inventory, setInventory, craftingTables, setCraftingTables } =
    useGameState();
  const { currentItem, setCurrentItem, dragging } =
    useTempState();

  const onSlotClick = (item: string | null, y: number, x: number) => {
    // If we have a current item in the slot, we add it to the current item.
    setCurrentItem(
      currentItem === item ? null : item
    );

    // We set the current item to the slot item.
    const newInventory = [...inventory];
    newInventory[y][x] = currentItem;
    setInventory(newInventory);
  };

  const onDrag = (_item: string | null, y: number, x: number) => {
    if ( !currentItem || !dragging ) return

    // We set the current item to the slot item.
    const newInventory = [...inventory];
    newInventory[y][x] = currentItem;
    setInventory(newInventory);
  };

  const onSubmit = () => {
    setCraftingTables([
      ...craftingTables,
      inventory
    ]);
    setInventory([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const onItemClick = (item: string | null) => {
    if ( !item ) return
    setCurrentItem(item === currentItem ? null : item);
  }

  return (
    <Container>
      <div className={classes.root}>
        <header>
          <Crafting
            craftingTable={inventory}
            onSlotClick={onSlotClick}
            onDrag={onDrag}
            onSubmit={onSubmit}
          />
        </header>
        <section className={classes.inventory}>
          {items &&
            items.map((item) => <Slot item={item} onClick={onItemClick} />)}
        </section>
      </div>
    </Container>
  );
}