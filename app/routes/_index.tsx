import type { MetaFunction } from "@remix-run/node";
import "../app.css";
import { CraftingTable } from "../components/CraftingTable";
import { Game } from "../components/Game";
import { Inventory } from "../components/Inventory";
import useGameState from "../hooks/useGameState";
import Tooltip from "../components/Tooltip";
import Cursor from "../components/Cursor";
import { useEffect } from "react";
import useTempState from "../hooks/useTempState";
import { GameOver } from "../components/GameOver";
import { Footer } from "../components/Footer";
import { useUserAgent } from "../hooks/useUserAgent";
import { format } from "date-fns";
import { Header } from "../components/Header";
import { Preloader } from "../components/Preloader";
import { GameOptions } from "../components/GameOptions";

export const meta: MetaFunction = () => {
  return [
    { title: "Minecraftle" },
    { name: "description", content: "Wordle with a Minecraft Twist!" },
  ];
};

export async function clientLoader() {
  return null;
}

export default function App() {
  const { setDragging } = useTempState();
  const {
    date,
    setCraftingTables,
    setInventory,
    setGameState,
    setDate,
    craftingTables,
    gameState,
  } = useGameState();
  const { isMobile } = useUserAgent();

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => setDragging(event.button === 2);
    const onMouseUp = () => setDragging(false);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  useEffect(() => {
    const DATE_STRING = format(new Date(), "yyyy-MM-dd");
    if (DATE_STRING === date) return;
    setDate(DATE_STRING);
    setGameState("inProgress");
    setCraftingTables([]);
    setInventory([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setGameState("inProgress");
  }, []);

  return (
    <>
      <GameOptions />
      <Preloader />
      {!isMobile && (
        <>
          <Cursor />
          <Tooltip />
        </>
      )}
      <Header />
      <Game>
        {craftingTables.map((craftingTable, index) => (
          <CraftingTable craftingTable={craftingTable} key={index} />
        ))}
        {gameState === "inProgress" ? <Inventory /> : <GameOver />}
      </Game>
      <Footer />
    </>
  );
}