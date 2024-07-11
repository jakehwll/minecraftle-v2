import classes from "./Header.module.css"
import logo from "../assets/logo.png";
import { Button } from "./Button";

export const Header = () => (
  <header className={classes.root}>
    <img src={logo} className={classes.logo} />
    <div className={classes.grid}>
      <Button>How to Play</Button>
      <Button>Settings</Button>
    </div>
  </header>
);