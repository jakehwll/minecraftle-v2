import { game } from "./routers/game";
import { router } from "./trpc";

export const appRouter = router({
  game
});

export type AppRouter = typeof appRouter;
