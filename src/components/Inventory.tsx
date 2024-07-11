import { checkRecipe } from "../hooks/recipe";
import useGameState from "../hooks/useGameState";
import { useItems } from "../hooks/useItems";
import { useRecipes } from "../hooks/useRecipes";
import useTempState from "../hooks/useTempState";
import { Button } from "./Button";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from "./Inventory.module.css";
import { Slot } from "./Slot";

export const Inventory = () => {
  const items = useItems();
  const {
    inventory,
    setInventory,
    craftingTables,
    setCraftingTables,
    setGameState,
  } = useGameState();
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

  const recipes = useRecipes();
  const solution = recipes["campfire"];

  const onSubmit = () => {
    const [recipeResult] = Object.entries(recipes).find(([_, recipeItems]) =>
      checkRecipe({
        recipe: recipeItems.input,
        input: inventory,
      })
    ) || [null];

    // We add the current inventory to the crafting tables.
    setCraftingTables([...craftingTables, inventory]);
    // We clear the inventory.
    setInventory([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);

    if (craftingTables.length >= MAX_GUESSES - 1) {
      setGameState("lost");
      return;
    } else {
      // If we have a recipe result, we check if it matches the solution.
      if (`minecraft:${recipeResult}` === solution.output) {
        setGameState("won");
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
          <Button
            onClick={() =>
              setInventory([
                [null, null, null],
                [null, null, null],
                [null, null, null],
              ])
            }
            disabled={
              inventory.flat().filter((item) => item !== null).length === 0
            }
          >
            Clear
          </Button>
          <span>
            Guess {craftingTables.length+1} / {MAX_GUESSES}
          </span>
        </section>
        <section className={classes.inventory}>
          {items &&
            items.map((item) => <Slot item={item} onClick={onItemClick} />)}
        </section>
      </div>
    </Container>
  );
};
