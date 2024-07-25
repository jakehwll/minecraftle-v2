import classes from "./Header.module.css";
import logo from "../assets/logo.webp";
import discord from "../assets/discord.svg";
import { Button, ButtonLink } from "./Button";
import { Modal } from "./Modal";
import useGameOptions from "../hooks/useGameOptions";
import { Form, useLoaderData } from "@remix-run/react";
import { contextLoader } from "~/utils/contextLoader.server";

export const Header = () => {
  const { user } = useLoaderData<typeof contextLoader>();
  const { guiScale, setGuiScale } = useGameOptions();

  return (
    <header className={classes.root}>
      <a href={"/"} className={classes.logo}>
        <img src={logo} className={classes.logo__image} alt={""} />
        <span className={classes.logo__text}>New & Improved!</span>
      </a>
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
                recipe (marked in orange) and if the item doesn&apos;t appear in
                the recipe it stays greyed out.
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
        <Modal
          title={"Discord"}
          description={
            user
              ? "We're currently tracking your scores and you can view the leaderboard!"
              : "In order to track your scores and use the leaderboard, you need to authenticate with Discord!"
          }
          content={
            <Form method="post" action="/auth/discord" className={classes.form}>
              <Button fullWidth type="submit">
                {user ? "Re-link my account" : "Link my account"}
              </Button>
            </Form>
          }
        >
          <Button>Account</Button>
        </Modal>
        <ButtonLink href={"/statistics"}>Statistics</ButtonLink>
      </div>
      {user && (
        <div className={classes.discord}>
          <img src={discord} alt={""} />
          <span>Welcome back {user.username}!</span>
          <a href={"/auth/signout"}>Signout</a>
        </div>
      )}
    </header>
  );
};
