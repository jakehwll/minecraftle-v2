import cc from "classcat"
import { ComponentProps } from "preact"
import classes from "./Game.module.css"

export const Game = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cc([classes.root, className])} {...props}>
      {children}
    </div>
  )
}