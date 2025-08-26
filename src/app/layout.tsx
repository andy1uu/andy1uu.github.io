import React from "react";

import type { Metadata } from "next";

import { Comfortaa } from "next/font/google";

import Providers from "./providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Andy Luu's Personal Portfolio Website",
  description:
    "This is a personal portfolio website for Andy Luu to show off his accomplishments.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={comfortaa.className}>
      <Providers>
        <main className="flex min-h-screen w-full overflow-y-auto overflow-x-hidden">
          <NavBar />
          <div className="flex w-full flex-col  bg-light dark:bg-dark">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </Providers>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
