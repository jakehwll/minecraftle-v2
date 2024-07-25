import { LoaderFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Statistics } from "~/components/Statistics";
import { contextLoader } from "~/utils/contextLoader.server";

export const loader: LoaderFunction = async ({ request }) =>
  contextLoader(request);

export default function Page() {
  return (
    <>
      <Header />
      <Statistics />
      <Footer />
    </>
  );
}
