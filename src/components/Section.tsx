import { PropsWithChildren } from "react";

type SectionProps = {
  title: string;
} & PropsWithChildren;

export const Section = ({ title, children }: SectionProps) => (
  <section className="text-center px-5">
    <h2 className="text-2xl mb-8">{title}</h2>
    <p className="text-lg leading-8 text-white/75 mx-w-4xl text-center">
      {children}
    </p>
  </section>
);
