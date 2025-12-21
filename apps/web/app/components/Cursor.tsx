import useMouse from "~/hooks/useMouse";
import useTempState from "~/hooks/useTempState";
import classes from "./Cursor.module.css";

export default function Cursor() {
  const { currentItem } = useTempState();
  const { x, y } = useMouse();

  const backgroundItem = currentItem
    ? `url(items/${currentItem.replaceAll(":", "-")}.webp)`
    : undefined;

  if ( !currentItem ) return null

  return (
    <div
      className={classes.root}
      style={{
        "--cursor-x": `${x}px`,
        "--cursor-y": `${y}px`,
        backgroundImage: backgroundItem,
        backgroundSize: 'cover'
      } as React.CSSProperties}
    />
  );
}
