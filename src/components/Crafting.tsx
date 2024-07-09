import classes from "./Crafting.module.css";
import { Slot } from "./Slot";
import image__arrow from "../assets/arrow.png";
import { useRecipes } from "../hooks/useRecipes";
import { checkRecipe } from "../hooks/recipe";
import { useCallback } from "preact/hooks";

export const Crafting = ({
  craftingTable,
  onSlotClick,
  onSubmit,
}: {
  craftingTable: Array<Array<string | null>>;
  onSlotClick?: (item: string | null, i: number, j: number) => void;
  onSubmit?: () => void;
}) => {
  const recipes = useRecipes();

  const [recipeResult] = Object.entries(recipes).find(([_, recipeItems]) =>
    checkRecipe(recipeItems.input, craftingTable)
  ) || [null];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inventory}>
          {new Array(3).fill(null).map((_, i) =>
            new Array(3).fill(null).map((_, j) => (
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
          >
            {recipeResult && (
              <img
                src={`items/minecraft-${recipeResult.replaceAll(
                  ":",
                  "-"
                )}.webp`}
                alt={recipeResult}
                className={classes.result__image}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
