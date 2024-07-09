import classes from "./Crafting.module.css";
import { Slot } from "./Slot";
import image__arrow from "../assets/arrow.png";

export const Crafting = ({ 
  craftingTable,
  onSlotClick,
  onSubmit
}: { 
  craftingTable: Array<Array<string | null>>,
  onSlotClick?: (item: string | null, i: number, j: number) => void,
  onSubmit?: () => void
}) => {
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
                  item={craftingTable[i][j]}
                  onClick={(item) => {
                    onSlotClick && onSlotClick(item, i, j);
                  }}
                />
              ))
          )}
      </div>
      <img src={image__arrow} className={classes.arrow} />
      <div className={classes.result}>
        <div
          className={classes.result__slot}
          onClick={() => onSubmit && onSubmit()}
        />
      </div>
    </div>
  );
};
