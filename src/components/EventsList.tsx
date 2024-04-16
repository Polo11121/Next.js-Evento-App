import { EventCard, EventCardSkeleton } from "@/components/EventCard";
import { PaginationControls } from "@/components/PaginationControls";
import { getEvents } from "@/services/events";

type EventsListProps = {
  city: string;
  page?: number;
};

export const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export const EventsListSkeleton = () => (
  <div className="flex flex-wrap gap-10 justify-center w-full">
    {Array.from({ length: 10 }).map((_, index) => (
      <EventCardSkeleton key={index} />
    ))}
  </div>
);
