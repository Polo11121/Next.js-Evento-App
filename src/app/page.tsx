import { Heading } from "@/components/Heading";
import { Search } from "@/components/Search";
import Link from "next/link";

const HomePage = () => (
  <main className="flex flex-col items-center pt-36 px-3">
    <Heading>Fnd events around you</Heading>
    <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
      Browse more than{" "}
      <span className="font-bold italic underline text-primary">10,000</span>{" "}
      events around you
    </p>
    <Search />
    <section className="mt-4 flex gap-x-4 text-sm text-white/50">
      <p>Popular:</p>
      <div className="flex gap-x-2 font-semibold">
        <Link href="/events/austin">Austin</Link>
        <Link href="/events/seattle">Seattle</Link>
      </div>
    </section>
  </main>
);

export default HomePage;
