import { EventsListSkeleton, EventsList } from "@/components/EventsList";
import { Heading } from "@/components/Heading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

const pageNumberSchema = z.coerce.number().int().positive().optional();

export const generateMetadata = ({ params: { city } }: CityEventsPageProps) => {
  const metadata: Metadata = {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };

  return metadata;
};

export const generateStaticParams = () => [
  {
    city: "austin",
  },
  {
    city: "seattle",
  },
];

type CityEventsPageProps = {
  params: { city: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CityEventsPage = async ({
  params: { city },
  searchParams: { page },
}: CityEventsPageProps) => {
  const headingText =
    city === "all" ? "All Events" : `Events in ${capitalize(city)}`;

  const parsedPage = pageNumberSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Heading className="mb-28">{headingText}</Heading>
      <Suspense key={city + parsedPage.data} fallback={<EventsListSkeleton />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default CityEventsPage;
