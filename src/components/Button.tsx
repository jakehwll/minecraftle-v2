import cc from "classcat";
import { ComponentProps } from "preact/compat";
import classes from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  fullWidth?: boolean;
}

export const Button = ({ className, fullWidth, ...props }: ButtonProps) => (
  <button
    className={cc([
      classes.root,
      {
        [classes.fullWidth]: fullWidth,
      },
      className,
    ])}
    {...props}
  />
);
