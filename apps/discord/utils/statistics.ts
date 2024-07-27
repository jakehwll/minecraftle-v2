import { Prisma } from "@prisma/client";
import { prisma } from "./database"

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

export const _totalGames = (userId: string) =>
  counterHelperArgs({
    userId,
    args: {},
  });

export const _wonGames = (userId: string) =>
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

export const _lostGames = (userId: string) =>
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
