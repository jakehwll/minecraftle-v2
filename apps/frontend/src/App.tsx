import { useEffect } from "react";
import { CraftingTable } from "./components/CraftingTable/CraftingTable";
import Cursor from "./components/Cursor/Cursor";
import { Footer } from "./components/Footer/Footer";
import { Game } from "./components/Game/Game";
import { GameOptions } from "./components/GameOptions/GameOptions";
import { GameOver } from "./components/GameOver/GameOver";
import { Header } from "./components/Header/Header";
import { Inventory } from "./components/Inventory/Inventory";
import { Preloader } from "./components/Preloader/Preloader";
import Tooltip from "./components/Tooltip/Tooltip";
import useGameState from "./hooks/useGameState";
import useTempState from "./hooks/useTempState";
import useTooltip from "./hooks/useTooltip";
import { useUserAgent } from "./hooks/useUserAgent";
import { format } from "date-fns";
import "./App.css";

function App() {
  const { value: tooltipValue } = useTooltip();
  const { setDragging, currentItem } = useTempState();
  const {
    date,
    craftingTables,
    gameState,
    resetGameState,
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
  }, [setDragging]);

  useEffect(() => {
    useGameState.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!date) return;
    const DATE_STRING = format(new Date(), "yyyy-MM-dd");
    if (DATE_STRING !== date) resetGameState();
  }, [date]);

  return (
    <>
      <Preloader />
      <GameOptions />
      
      {!isMobile && tooltipValue && (<Tooltip />)}
      {!isMobile && currentItem && <Cursor />}
      
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

export default App;
