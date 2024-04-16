import "server-only";
import { cache } from "react";
import { capitalize } from "@/lib/utils";
import prisma from "@/lib/db";

export const getEvent = cache(async (name: string) => {
  const event = prisma.eventoEvent.findUnique({
    where: {
      slug: name,
    },
  });

  return event;
});

export const getEvents = cache(async (city: string, page: number = 1) => {
  const skip = (page - 1) * 6;

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip,
  });

  let totalCount;

  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
});
