import classes from './Crafting.module.css'
import { Slot } from './Slot';
import image__arrow from '../assets/arrow.png'

export const Crafting = () => {
  return (
    <div className={classes.root}>
      <div className={classes.inventory}>
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
      </div>
      <img src={image__arrow} className={classes.arrow} />
      <div className={classes.result}>
        <div className={classes.result__slot} />
      </div>
    </div>
  );
}