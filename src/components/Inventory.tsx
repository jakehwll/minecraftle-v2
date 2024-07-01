import useGameState from "../hooks/useGameState";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from './Inventory.module.css';
import { Slot } from "./Slot";

export const Inventory = () => {
  const { craftingTables, setCraftingTables } = useGameState();

  const onSubmit = () => {
    console.log("hi!");
    setCraftingTables([...craftingTables, []]);
  };

  return (
    <Container>
      <div className={classes.root}>
        <header>
          <Crafting onSubmit={onSubmit} />
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