import './app.css'
import { CraftingTable } from './components/CraftingTable';
import { Game } from './components/Game'
import { Inventory } from './components/Inventory';
import logo from './assets/logo.png'

export function App() {

  return (
    <>
      <img src={logo} className={"logo"} />
      <Game>
        <CraftingTable />
        <CraftingTable />
        <CraftingTable />
        <Inventory />
      </Game>
    </>
  );
}
