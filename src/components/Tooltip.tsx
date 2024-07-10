import useMouse from "../hooks/useMouse";
import useTooltip from "../hooks/useTooltip";
import classes from "./Tooltip.module.css";

export default function Tooltip() {
  const { value: tooltipValue } = useTooltip();
  const { x, y } = useMouse()

  if ( !tooltipValue ) return null;

  return (
    <div
      className={classes.root}
      style={{
        left: x + 10,
        top: y - 30,
      }}
    >
      {tooltipValue}
    </div>
  );
}