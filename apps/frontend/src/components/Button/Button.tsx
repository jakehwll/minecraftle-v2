import cc from "classcat";
import { type ComponentProps, forwardRef } from "react";
import classes from "./Button.module.css";

interface Props {
  fullWidth?: boolean;
}

interface ButtonProps extends Props, ComponentProps<"button"> {}
interface ButtonLinkProps extends Props, ComponentProps<"a"> {}

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

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, fullWidth, href, children, ...props }: ButtonLinkProps, ref) => (
    <a
      className={cc([
        classes.root,
        {
          [classes.fullWidth]: fullWidth,
        },
        className,
      ])}
      ref={ref}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
);

ButtonLink.displayName = "ButtonLink";