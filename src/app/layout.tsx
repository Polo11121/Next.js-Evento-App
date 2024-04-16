import { PropsWithChildren } from "react";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 10,000 events worldwide",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body
      className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}
    >
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </body>
  </html>
);

export default RootLayout;
