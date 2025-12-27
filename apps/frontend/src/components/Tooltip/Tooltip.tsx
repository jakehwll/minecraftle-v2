import useMouse from "../../hooks/useMouse";
import useTooltip from "../../hooks/useTooltip";
import classes from "./Tooltip.module.css";

export default function Tooltip() {
  const { value: tooltipValue } = useTooltip();
  const { x, y } = useMouse()

  if ( !tooltipValue ) return null;

  return (
    <div
      className={classes.root}
      style={
        {
          "--cursor-x": `${x + 16}px`,
          "--cursor-y": `${y - 32}px`,
        } as React.CSSProperties
      }
    >
      {tooltipValue}
    </div>
  );
}