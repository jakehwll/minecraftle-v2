import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "~/utils/database";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

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

      await prisma.game.create({
        data: {
          date: new Date(),
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
          guesses: input.guesses,
        },
      });

      return {
        success: true,
      };
    }),
  read: procedure.query(async () => {
    const USER_ID = "";

    const [totalGames, wonGames, lostGames] = await prisma.$transaction([
      _totalGames(USER_ID),
      _wonGames(USER_ID),
      _lostGames(USER_ID),
    ]);

    if ( !totalGames || !wonGames || !lostGames ) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Statistics not found",
      })
    }

    return {
      totalGames,
      wonGames,
      lostGames,
    };
  }),
});
