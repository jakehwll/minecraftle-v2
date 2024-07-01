import useGameState from "../hooks/useGameState";
import useTempState from "../hooks/useTempState";
import { Container } from "./Container";
import { Crafting } from "./Crafting";
import classes from './Inventory.module.css';
import { Slot } from "./Slot";

export const Inventory = () => {
  const { craftingTables, setCraftingTables } =
    useGameState();
  const { currentItem, setCurrentItem } =
    useTempState();

  const onSubmit = () => {
    setCraftingTables([
      ...craftingTables,
      [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    ]);
  };

  const onItemClick = (item: string | null) => {
    if ( !item ) return
    setCurrentItem(item)
  }

  return (
    <Container>
      <div className={classes.root}>
        <header>
          <Crafting onSubmit={onSubmit} />
        </header>
        {currentItem}
        <section className={classes.inventory}>
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"stone"} onClick={onItemClick} />
          <Slot item={"redstone"} onClick={onItemClick} />
          <Slot item={"redstone_torch"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
          <Slot item={"cobblestone"} onClick={onItemClick} />
        </section>
      </div>
    </Container>
  );
}