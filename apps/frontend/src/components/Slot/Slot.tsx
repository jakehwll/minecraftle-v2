import cc from "classcat";
import { memo, useCallback } from "react";
import { MatchMapResult } from "../../utils/recipe";
import classes from "./Slot.module.css";
import { TRANSLATION } from "../../hooks/useTranslation";

export const Slot = memo(({
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
  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    if (event.button !== 0) return;
    onClick?.(item);
  }, [onClick, item]);

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    onDrag?.(item);
  }, [onDrag, item]);

  const handleMouseEnter = useCallback(() => {
    onDrag?.(item);
  }, [onDrag, item]);

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
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      onMouseEnter={handleMouseEnter}
      data-tooltip={TRANSLATION[item ?? "undefined"]}
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
});
