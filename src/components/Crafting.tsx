import classes from "./Crafting.module.css";
import { Slot } from "./Slot";
import image__arrow from "../assets/arrow.png";
import image__arrow_disabled from "../assets/arrow_disabled.png";
import { useRecipes } from "../hooks/useRecipes";
import { checkMatchMap, checkRecipe, MatchMapResult } from "../hooks/recipe";
import cc from "classcat";

export const Crafting = ({
  craftingTable,
  recipe,
  onSlotClick,
  onSubmit,
  disabled,
}: {
  craftingTable: Array<Array<string | null>>;
  recipe?: Array<Array<string | null>>;
  onSlotClick?: (item: string | null, i: number, j: number) => void;
  onSubmit?: () => void;
  disabled?: boolean;
}) => {
  const recipes = useRecipes();

  const [recipeResult] = Object.entries(recipes).find(([_, recipeItems]) =>
    checkRecipe({
      recipe: recipeItems.input,
      input: craftingTable,
    })
  ) || [null];

  const matchMap = recipe
    ? checkMatchMap({
        recipe,
        input: craftingTable,
      })
    : null;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inventory}>
          {new Array(3).fill(null).map((_, i) =>
            new Array(3).fill(null).map((_, j) => (
              <Slot
                item={craftingTable[i][j]}
                status={matchMap ? matchMap[i][j] : undefined}
                onClick={(item) => {
                  onSlotClick && onSlotClick(item, i, j);
                }}
                disabled={disabled}
              />
            ))
          )}
        </div>
        <img
          src={recipeResult ? image__arrow : image__arrow_disabled}
          className={classes.arrow}
        />
        <div className={classes.result}>
          <div
            className={cc([
              classes.result__slot,
              {
                [classes.result__slot_disabled]: disabled,
              },
            ])}
            onClick={() => recipeResult && onSubmit && onSubmit()}
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
