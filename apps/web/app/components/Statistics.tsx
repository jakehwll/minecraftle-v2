import { Loading } from "~/components/Loading";
import { trpc } from "~/utils/trpc";
import classes from "./Statistics.module.css";

const KEY_TITLES: {
  [key: string]: string;
} = {
  totalGames: "Total Games",
  wonGames: "Won Games",
  lostGames: "Lost Games",
};

export const Statistics = () => {
  const { data: statistics, isLoading, isError } = trpc.game.read.useQuery();

  if (isError) {
    return <div>Error loading statistics</div>;
  }

  if (isLoading || !statistics) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      {Object.entries(statistics).map(([key, value]) => (
        <article className={classes.statistic} key={key}>
          <div className={classes.statistic__key}>{KEY_TITLES[key]}</div>
          <div className={classes.statistic__value}>{value}</div>
        </article>
      ))}
    </div>
  );
};
