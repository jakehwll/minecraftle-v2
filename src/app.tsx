import './app.css'
import { CraftingTable } from './components/CraftingTable';
import { Game } from './components/Game'
import { Inventory } from './components/Inventory';
import logo from './assets/logo.png'
import useGameState from './hooks/useGameState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  const {
    craftingTables,
  } = useGameState()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <img src={logo} className={"logo"} />
        <Game>
          {craftingTables.map((craftingTable, index) => (
            <CraftingTable craftingTable={craftingTable} key={index} />
          ))}
          <Inventory />
        </Game>
      </QueryClientProvider>
    </>
  );
}
