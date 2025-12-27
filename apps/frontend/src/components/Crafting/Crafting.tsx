import classes from "./Crafting.module.css";
import { Slot } from "../Slot/Slot";
import image__arrow from "../../assets/arrow.png";
import image__arrow_disabled from "../../assets/arrow_disabled.png";
import { checkMatchMap, checkRecipe } from "../../utils/recipe";
import cc from "classcat";
import { TRANSLATION } from "../../hooks/useTranslation";
import { RECIPES } from "../../hooks/useRecipes";

export const Crafting = ({
  craftingTable,
  recipe,
  onSlotClick,
  onDrag,
  onSubmit,
  disabled,
}: {
  craftingTable: Array<Array<string | null>>;
  recipe?: Array<Array<string | null>>;
  onSlotClick?: (item: string | null, i: number, j: number) => void;
  onDrag?: (item: string | null, i: number, j: number) => void;
  onSubmit?: () => void;
  disabled?: boolean;
}) => {

  const [recipeResult] = Object.entries(RECIPES).find(([_, recipeItems]) =>
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
  const translation = TRANSLATION[`minecraft:${recipeResult}`] ?? ""

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inventory}>
          {new Array(3).fill(null).map((_, i) =>
            new Array(3).fill(null).map((_, j) => (
              <Slot
                item={craftingTable[i][j]}
                status={matchMap ? matchMap[i][j].result : undefined}
                onClick={(item) => {
                  onSlotClick && onSlotClick(item, i, j);
                }}
                onDrag={(item) => {
                  onDrag && onDrag(item, i, j);
                }}
                disabled={disabled}
                key={`crafting-${i}-${j}`}
              />
            ))
          )}
        </div>
        <img
          src={recipeResult ? image__arrow : image__arrow_disabled}
          className={classes.arrow}
          alt={""}
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
                data-tooltip={translation}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
