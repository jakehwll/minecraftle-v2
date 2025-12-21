import type { Route } from "./+types/trpc.$trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server";
import { createContext } from "~/server/context";

export const loader = async (args: Route.LoaderArgs) => {
  return handleRequest(args);
};

export const action = async (args: Route.ActionArgs) => {
  return handleRequest(args);
};

const handleRequest = (args: Route.LoaderArgs | Route.ActionArgs) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    req: args.request,
    router: appRouter,
    createContext,
  });
