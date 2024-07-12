import cc from "classcat";
import { MatchMapResult } from "../utils/recipe";
import classes from "./Slot.module.css";
import { useTranslation } from "../hooks/useTranslation";

export const Slot = ({
  item,
  status,
  onClick,
  onDrag,
  disabled,
}: {
  item: string | null;
  status?: MatchMapResult;
  onClick?: (item: string | null) => void;
  onDrag?: (item: string | null) => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className={cc([
        classes.root,
        {
          [classes.slot__correct]: status === MatchMapResult.CORRECT,
          [classes.slot__orange]: status === MatchMapResult.ORANGE,
          [classes.slot__unused]: status === MatchMapResult.UNUSED,
          [classes.slot__disabled]: disabled,
        },
      ])}
      onMouseDown={(event) => {
        if ( event.button !== 0 ) return
        onClick && onClick(item);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        onDrag && onDrag(item);
      }}
      onMouseMove={() => onDrag && onDrag(item)}
      data-tooltip={useTranslation(item)}
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
