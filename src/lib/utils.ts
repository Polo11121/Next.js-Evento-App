import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
