"use client"
import { Rubik } from "next/font/google";
import Providers from "./providers";
import React, { useState, useEffect } from "react";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <main className="flex min-h-screen w-full overflow-y-auto overflow-x-hidden">
            <NavBar expanded={expanded} setExpanded={setExpanded} />
            <div className={`flex w-full flex-col  bg-light dark:bg-dark ${expanded && "ml-16"}`}>
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
