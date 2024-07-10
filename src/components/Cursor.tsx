import useMouse from "../hooks/useMouse";
import useTempState from "../hooks/useTempState";
import classes from "./Cursor.module.css";

export default function Cursor() {
  const { currentItem } = useTempState();
  const { x, y } = useMouse();

  const backgroundItem = currentItem
    ? `url(items/${currentItem.replaceAll(":", "-")}.webp)`
    : undefined;

  return (
    <div
      className={classes.root}
      style={{
        left: x,
        top: y,
        backgroundImage: backgroundItem,
      }}
    />
  );
}
