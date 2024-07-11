import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import { Button } from "./Button";
import { Modal } from "./Modal";

export const Header = () => (
  <header className={classes.root}>
    <img src={logo} className={classes.logo} />
    <div className={classes.grid}>
      <Modal
        title={"How to Play"}
        description={"Wordle with a Minecraft Twist"}
        content={
          <>
            <p>
              You craft items in a 3x3 grid and try and guess what the item is
              in 10 guesses.
            </p>
            <p>
              Everytime you submit an answer your shown the items in their
              correct spots (marked in green), items that are apart of the
              recipe (marked in orange) and if the item doesn't appear in the
              recipe it stays greyed out.
            </p>
          </>
        }
      >
        <Button>How to Play</Button>
      </Modal>
      <Modal title={"Settings"} description={"Change how the game looks here!"} content={<></>}>
        <Button>Settings</Button>
      </Modal>
    </div>
  </header>
);
