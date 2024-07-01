import './app.css'
import { CraftingTable } from './components/CraftingTable';
import { Game } from './components/Game'
import { Inventory } from './components/Inventory';
import logo from './assets/logo.png'
import useGameState from './hooks/useGameState';

export function App() {
  const {
    craftingTables,
  } = useGameState()

  return (
    <>
      <img src={logo} className={"logo"} />
      <Game>
        {craftingTables.map((craftingTable, index) => (
          <CraftingTable craftingTable={craftingTable} key={index} />
        ))}
        <Inventory />
      </Game>
    </>
  );
}
