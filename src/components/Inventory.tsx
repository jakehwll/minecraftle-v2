import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from './Inventory.module.css';
import { Slot } from "./Slot";

export const Inventory = () => {
  return (
    <Container>
      <div className={classes.root}>
        <header>
          <Crafting />
        </header>
        <section className={classes.inventory}>
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
        </section>
      </div>
    </Container>
  );
}