import cc from "classcat"
import { ComponentProps } from "react"
import classes from "./Game.module.css"

export const Game = ({ children, className, ...props }: ComponentProps<"main">) => {
  return (
    <main className={cc([classes.root, className])} {...props}>
      {children}
    </main>
  )
}