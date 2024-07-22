// import * as trpc from "@trpc/server/adapters/next";

export async function createContext(
  // {
  //   req,
  //   res,
  // }: trpc.CreateNextContextOptions
) {
  return {};
}
export type Context = Awaited<ReturnType<typeof createContext>>;
