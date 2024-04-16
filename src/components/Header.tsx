"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ROUTES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="h-full">
        <ul className="flex gap-x-3 sm:gap-x-6 text-sm h-full ">
          {ROUTES.map(({ name, path }) => {
            const isActive = path === pathname;

            return (
              <li
                key={path}
                className={cn(
                  "flex hover:text-white transition relative items-center",
                  {
                    "text-white": isActive,
                    "text-white/50": !isActive,
                  }
                )}
              >
                <Link href={path}>{name}</Link>
                {isActive && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-primary h-1 w-full absolute bottom-0"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
