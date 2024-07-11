import { useEffect, useState } from "preact/hooks";
import classes from "./Preloader.module.css";

const ASSETS_TO_PRELOAD = [
  "background-button.png",
  "background-button__disabled.png",
  "border-button.png",
  "border-button__highlight.png",
  "border-button__disabled.png",
  "border.png",
  "inventory.png",
];

export const Preloader = () => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await Promise.all(
        ASSETS_TO_PRELOAD.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = `${src}`;
            img.onload = resolve;
          });
        })
      );
      if (res) setPreloaded(true);
    })();
  }, []);

  if (preloaded) return null;

  return (
    <div className={classes.root}>
      <div className={classes.message}>Loading...</div>
    </div>
  );
};
