import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { getEvent, getEvents } from "@/services/events";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

type EventPageProps = {
  params: {
    name: string;
  };
};

export const generateStaticParams = async () => {
  const { events } = await getEvents("all");

  return events.map(({ slug }) => ({
    name: slug,
  }));
};

export const generateMetadata = async ({
  params: { name },
}: EventPageProps) => {
  const event = await getEvent(name);

  const metadata: Metadata = {
    title: event ? `Event: ${event.name}` : "Not Found",
  };

  return metadata;
};

const EventPage = async ({ params: { name } }: EventPageProps) => {
  const event = await getEvent(name);

  if (!event) {
    return notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt={event.name}
          quality={50}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="flex z-1 gap-6 lg:gap-16 relative flex-col lg:flex-row">
          <Image
            className="border-white/50 border-2 rounded-xl object-cover"
            src={event.imageUrl}
            alt={event.imageUrl}
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">{formattedDate}</p>
            <Heading className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </Heading>
            <p>
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 mt-5 lg:mt-auto state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] flex flex-col gap-10 mt-10">
        <Section title="About this event">{event.description}</Section>
        <Section title="Location">{event.location}</Section>
      </div>
    </main>
  );
};

export default EventPage;
