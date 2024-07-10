import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={classes.root}>
      <p className={classes.disclaimer}>
        Not an official Minecraft website. We are not associated with Mojang or
        Microsoft.
      </p>
    </div>
  );
};
