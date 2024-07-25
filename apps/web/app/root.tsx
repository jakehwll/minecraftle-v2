import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import "./app.css";
import { GameOptions } from "./components/GameOptions";
import { Preloader } from "./components/Preloader";
import { authLoader } from "./utils/authLoader.server";
import { trpc } from "./utils/trpc";

export function Layout({ children }: { children: React.ReactNode }) {
  const { backend } = useLoaderData<typeof authLoader>();

  const [ queryClient ] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: backend,
        }),
      ],
    })
  );
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Preloader />
        <GameOptions />
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <div id={"app"}>{children}</div>
          </QueryClientProvider>
        </trpc.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
