import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "~/utils/database";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { format } from "date-fns";

const counterHelperArgs = ({
  userId,
  args,
}: {
  userId: string;
  args: Prisma.GameCountArgs;
}) =>
  prisma.game.count({
    ...args,
    where: {
      ...args.where,
      user: {
        id: userId,
      },
    },
  });

const _totalGames = (userId: string) => counterHelperArgs({
  userId,
  args: {},
});

const _wonGames = (userId: string) =>
  counterHelperArgs({
    userId,
    args: {
      where: {
        guesses: {
          lte: 9,
        },
      },
    },
  });

const _lostGames = (userId: string) =>
  counterHelperArgs({
    userId,
    args: {
      where: {
        guesses: {
          gte: 10,
        },
      },
    },
  });

export const game = router({
  create: procedure
    .input(
      z.object({
        guesses: z.number().min(1).max(10),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if ( !ctx.user?.id ) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to play a game",
        })
      }

      const GAME_DATE = new Date(format(new Date(), "yyyy-MM-dd")).toISOString();

      await prisma.game.upsert({
        create: {
          date: GAME_DATE,
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
          guesses: input.guesses,
        },
        update: {
          guesses: input.guesses,
        },
        where: {
          date_userId: {
            date: GAME_DATE,
            userId: ctx.user.id,
          }
        }
      });

      return {
        success: true,
      };
    }),
  read: procedure.query(async ({ ctx }) => {
    if (!ctx.user?.id) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to play a game",
      });
    }

    const [totalGames, wonGames, lostGames] = await prisma.$transaction([
      _totalGames(ctx.user.id),
      _wonGames(ctx.user.id),
      _lostGames(ctx.user.id),
    ]);

    return {
      totalGames,
      wonGames,
      lostGames,
    };
  }),
});
