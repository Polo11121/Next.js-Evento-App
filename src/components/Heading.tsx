import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  className?: string;
} & PropsWithChildren;

export const Heading = ({ children, className }: HeadingProps) => (
  <h1
    className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}
  >
    {children}
  </h1>
);
