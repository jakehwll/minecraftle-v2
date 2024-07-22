import { procedure, router } from "./trpc";

export const appRouter = router({
  debug: procedure.query(() => {
    return "Hello World one two three";
  })
});

export type AppRouter = typeof appRouter;
