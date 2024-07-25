import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Statistics } from "~/components/Statistics";
import { authLoader } from "~/utils/authLoader.server";

export const loader: LoaderFunction = async ({ request }) =>
  authLoader(request);

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
