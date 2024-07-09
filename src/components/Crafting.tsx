import classes from "./Crafting.module.css";
import { Slot } from "./Slot";
import image__arrow from "../assets/arrow.png";
import useTempState from "../hooks/useTempState";
import useGameState from "../hooks/useGameState";

export const Crafting = ({ onSubmit }: { onSubmit: () => void }) => {
  const { inventory, setInventory } = useGameState();
  const { currentItem, setCurrentItem } = useTempState();

  const onSlotClick = (item: string | null, y: number, x: number) => {
    // If we have a current item in the slot, we add it to the current item.
    setCurrentItem(item);

    // We set the current item to the slot item.
    const newInventory = [...inventory];
    newInventory[y][x] = currentItem;
    setInventory(newInventory);
  };

  return (
    <div className={classes.root}>
      <div className={classes.inventory}>
        {new Array(3)
          .fill(null)
          .map((_, i) =>
            new Array(3)
              .fill(null)
              .map((_, j) => (
                <Slot
                  item={inventory[i][j]}
                  onClick={(item) => onSlotClick(item, i, j)}
                />
              ))
          )}
      </div>
      <img src={image__arrow} className={classes.arrow} />
      <div className={classes.result}>
        <div className={classes.result__slot} onClick={() => onSubmit()} />
      </div>
    </div>
  );
};
