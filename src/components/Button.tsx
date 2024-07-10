import cc from "classcat";
import { ComponentProps } from "preact/compat";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button className={cc(className)} {...props} />
);
