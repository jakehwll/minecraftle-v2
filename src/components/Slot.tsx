import classes from "./Slot.module.css";

export const Slot = ({
  item,
  onClick,
}: {
  item: string | null;
  onClick: (item: string | null) => void;
}) => {
  return (
    <div className={classes.root} onClick={() => onClick(item)}>
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
