import cc from "classcat";
import { ComponentProps, forwardRef } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, fullWidth, ...props }: ButtonProps, ref) => (
    <button
      className={cc([
        classes.root,
        {
          [classes.fullWidth]: fullWidth,
        },
        className,
      ])}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";
