import type { Route } from "./+types/statistics";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Statistics } from "~/components/Statistics";
import { contextLoader } from "~/utils/contextLoader.server";

export const loader = async ({ request }: Route.LoaderArgs) =>
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
