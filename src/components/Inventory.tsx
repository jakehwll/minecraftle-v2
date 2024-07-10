import useGameState from "../hooks/useGameState";
import { useItems } from "../hooks/useItems";
import useTempState from "../hooks/useTempState";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from "./Inventory.module.css";
import { Slot } from "./Slot";

export const Inventory = () => {
  const items = useItems();
  const { inventory, setInventory, craftingTables, setCraftingTables } =
    useGameState();
  const { currentItem, setCurrentItem, dragging } = useTempState();

  const onSlotClick = (item: string | null, y: number, x: number) => {
    // If we have a current item in the slot, we add it to the current item.
    setCurrentItem(currentItem === item ? null : item);

    // We set the current item to the slot item.
    const newInventory = [...inventory];
    newInventory[y][x] = currentItem;
    setInventory(newInventory);
  };

  const onDrag = (_item: string | null, y: number, x: number) => {
    if (!currentItem || !dragging) return;

    // We set the current item to the slot item.
    const newInventory = [...inventory];
    newInventory[y][x] = currentItem;
    setInventory(newInventory);
  };

  const MAX_GUESSES = 10;

  const onSubmit = () => {
    if (craftingTables.length >= MAX_GUESSES - 1) {
      alert(`You have reached the limit of ${MAX_GUESSES} guesses.`);
      return;
    } else {
      // We add the current inventory to the crafting tables.
      setCraftingTables([...craftingTables, inventory]);
      // We clear the inventory.
      setInventory([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      // We check to see if the crafting table is correct.
      const correct = craftingTables.length === 6;
      if (correct) {
        alert("You have guessed all the crafting tables correctly!");
      }
    }
  };

  const onItemClick = (item: string | null) => {
    if (!item) return;
    setCurrentItem(item === currentItem ? null : item);
  };

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
        <section className={classes.status}>
          <button
            onClick={() =>
              setInventory([
                [null, null, null],
                [null, null, null],
                [null, null, null],
              ])
            }
          >
            Clear
          </button>
          <span>Guess {craftingTables.length} / {MAX_GUESSES}</span>
        </section>
        <section className={classes.inventory}>
          {items &&
            items.map((item) => <Slot item={item} onClick={onItemClick} />)}
        </section>
      </div>
    </Container>
  );
};
