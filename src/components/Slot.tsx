import cc from "classcat";
import { MatchMapResult } from "../hooks/recipe";
import classes from "./Slot.module.css";

export const Slot = ({
  item,
  status,
  onClick,
  disabled,
}: {
  item: string | null;
  status?: MatchMapResult;
  onClick: (item: string | null) => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className={cc([
        classes.root,
        {
          [classes.slot__correct]: status === MatchMapResult.CORRECT,
          [classes.slot__orange]: status === MatchMapResult.ORANGE,
          [classes.slot__disabled]: disabled,
        },
      ])}
      onClick={() => onClick(item)}
      data-tooltip={item}
    >
      {item && (
        <img
          src={`items/${item.replaceAll(":", "-")}.webp`}
          alt={item}
          className={classes.image}
        />
      )}
    </div>
  );
};
