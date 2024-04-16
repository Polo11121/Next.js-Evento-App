"use client";

import { Skeleton } from "@/components/Skeleton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export const EventCard = ({ event }: EventCardProps) => {
  const ref = useRef(null);
  const { slug, imageUrl, name, organizerName, location, date } = event;

  const day = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  });
  const month = new Date(date).toLocaleDateString("en-US", {
    month: "short",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="flex flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${slug}`}
      style={{
        // @ts-ignore
        opacity: opacityProgress,
        // @ts-ignore
        scale: scaleProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <section className="w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden state-effects">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="italic text-white/75">By {organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">{day}</p>
          <p className="text-xs uppercase text-primary">{month}</p>
        </section>
      </section>
    </MotionLink>
  );
};

export const EventCardSkeleton = () => (
  <div className="flex flex-1 basis-80 h-[380px] max-w-[500px]">
    <div className="w-full h-full  flex flex-col bg-white/[3%] rounded-xl overflow-hidden">
      <Skeleton className="h-[60%] w-full" />
    </div>
  </div>
);
