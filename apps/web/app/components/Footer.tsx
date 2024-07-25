import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.root}>
      <p className={classes.disclaimer}>
        Not an official Minecraft website. We are not associated with Mojang or
        Microsoft.
      </p>
      <p>
        <a href="https://github.com/jakehwll/minecraftle-v2">
          GitHub
        </a>
      </p>
    </footer>
  );
};
