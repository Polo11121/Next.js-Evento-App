import { PropsWithChildren } from "react";

export const Container = ({ children }: Readonly<PropsWithChildren>) => (
  <div className="max-w-7xl mx-auto bg-white/[2%] min-h-screen flex flex-col">
    {children}
  </div>
);
