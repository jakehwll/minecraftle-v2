import { type LoaderFunction, type MetaFunction } from "@remix-run/node";
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
import { authLoader } from "~/utils/authLoader.server";
import { useLoaderData } from "@remix-run/react";
import { User } from "lucia";
import useTooltip from "~/hooks/useTooltip";
import { trpc } from "~/utils/trpc";

export const meta: MetaFunction = () => {
  return [
    { title: "Minecraftle" },
    { name: "description", content: "Wordle with a Minecraft Twist!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) =>
  authLoader(request);

export default function App() {
  const { value: tooltipValue } = useTooltip();
  const { setDragging, currentItem } = useTempState();
  const {
    date,
    craftingTables,
    gameState,
    resetGameState,
  } = useGameState();
  const { isMobile } = useUserAgent();

  const user = useLoaderData<{
    user: User | null;
  }>();

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

  const { data: debug } = trpc.debug.useQuery()

  return (
    <>
      <GameOptions />
      <Preloader />
      <p>{debug}</p>
      {!isMobile && tooltipValue && (<Tooltip />)}
      {!isMobile && currentItem && <Cursor />}
      <Header user={user.user} />
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
