import type { Route } from "./+types/_index";
import { CraftingTable } from "~/components/CraftingTable";
import { Game } from "~/components/Game";
import { Inventory } from "~/components/Inventory";
import useGameState from "~/hooks/useGameState";
import Tooltip from "~/components/Tooltip";
import Cursor from "~/components/Cursor";
import { useEffect } from "react";
import useTempState from "~/hooks/useTempState";
import { GameOver } from "~/components/GameOver";
import { Footer } from "~/components/Footer";
import { useUserAgent } from "~/hooks/useUserAgent";
import { format } from "date-fns";
import { Header } from "~/components/Header";
import useTooltip from "~/hooks/useTooltip";
import { contextLoader } from "~/utils/contextLoader.server";

export const loader = async ({ request }: Route.LoaderArgs) =>
  contextLoader(request);

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Minecraftle" },
    { name: "description", content: "Wordle with a Minecraft Twist!" },
  ];
};

export default function Page() {
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
  });

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
