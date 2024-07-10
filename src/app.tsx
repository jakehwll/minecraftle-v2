import "./app.css";
import { CraftingTable } from "./components/CraftingTable";
import { Game } from "./components/Game";
import { Inventory } from "./components/Inventory";
import logo from "./assets/logo.png";
import useGameState from "./hooks/useGameState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tooltip from "./components/Tooltip";
import Cursor from "./components/Cursor";
import { useEffect, useState } from "preact/hooks";
import useTempState from "./hooks/useTempState";

const queryClient = new QueryClient();

export function App() {
  const { setDragging } = useTempState();
  const { craftingTables, gameState } = useGameState();

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => setDragging(event.button === 2);
    const onMouseUp = () => setDragging(false);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    }
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Cursor />
        <Tooltip />
        <img src={logo} className={"logo"} />
        <Game>
          {craftingTables.map((craftingTable, index) => (
            <CraftingTable craftingTable={craftingTable} key={index} />
          ))}
          {gameState === "inProgress" && <Inventory />}
        </Game>
      </QueryClientProvider>
    </>
  );
}
