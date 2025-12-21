import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import "./app.css";
import { GameOptions } from "./components/GameOptions";
import { Preloader } from "./components/Preloader";
import { contextLoader } from "./utils/contextLoader.server";
import { trpc } from "./utils/trpc";
import type { Route } from "./+types/root";

export const loader = async ({ request }: Route.LoaderArgs) =>
  contextLoader(request);

export function Layout({ children }: { children: React.ReactNode }) {
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
        <div id={"app"}>{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { backend } = useLoaderData<typeof loader>();

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${
            process.env.NODE_ENV === "development" ? `http://` : `https://`
          }${backend}/trpc`,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
