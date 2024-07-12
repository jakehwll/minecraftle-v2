import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import { Button } from "./Button";
import { Modal } from "./Modal";
import useGameOptions from "../hooks/useGameOptions";

export const Header = () => {
  const { guiScale, setGuiScale } = useGameOptions();

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logo__image} />
        <span className={classes.logo__text}>
          New & Improved!
        </span>
      </div>
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
        <Modal
          title={"Settings"}
          description={"Change how the game looks here!"}
          content={
            <Button
              onClick={() => {
                switch (guiScale) {
                  case 0.75:
                    setGuiScale(1);
                    break;
                  case 1:
                    setGuiScale(1.25);
                    break;
                  case 1.25:
                    setGuiScale(0.75);
                    break;
                  default:
                    break;
                }
              }}
              fullWidth
            >
              GUI Scale: {guiScale}
            </Button>
          }
        >
          <Button>Settings</Button>
        </Modal>
      </div>
    </header>
  );
};
