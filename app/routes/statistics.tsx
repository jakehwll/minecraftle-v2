import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Loading } from "~/components/Loading";
import { authLoader } from "~/utils/authLoader.server";
import { trpc } from "~/utils/trpc";

export const loader: LoaderFunction = async ({ request }) =>
  authLoader(request);

const Statistics = () => {
  const { data: statistics, isLoading, isError } = trpc.game.read.useQuery();

  if (isError) {
    return <div>Error loading statistics</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <pre>
      <code style={{ maxWidth: "100%", width: "400px" }}>
        {JSON.stringify(statistics, null, 2)}
      </code>
    </pre>
  );
};

export default function Page() {
  const user = useLoaderData<typeof loader>();

  return (
    <>
      <Header user={user.user} />
      <Statistics />
      <Footer />
    </>
  );
}
