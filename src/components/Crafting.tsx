import classes from './Crafting.module.css'
import { Slot } from './Slot';
import image__arrow from '../assets/arrow.png'

export const Crafting = ({
  onSubmit
}: {
  onSubmit: () => void
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.inventory}>
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
        <Slot item={null} onClick={() => {}} />
      </div>
      <img src={image__arrow} className={classes.arrow} />
      <div className={classes.result}>
        <div className={classes.result__slot} onClick={() => onSubmit()} />
      </div>
    </div>
  );
}