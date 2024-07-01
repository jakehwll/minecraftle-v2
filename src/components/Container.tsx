import cc from "classcat";
import { ComponentProps } from "preact";
import classes from "./Container.module.css";

export const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cc([classes.root, className])} {...props}>
      {children}
    </div>
  );
};
