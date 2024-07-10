import cc from "classcat";
import { ComponentProps } from "preact/compat";
import classes from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button className={cc([classes.root, className])} {...props} />
);
