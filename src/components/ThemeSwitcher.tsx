"use client";

import { FaSun, FaMoon } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Button
        disableRipple={true}
        disableAnimation={true}
        isLoading={true}
        spinner={
          <svg
            className="h-6 w-6 animate-spin text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
        aria-label="Loading"
        color="default"
        className={`flex justify-start rounded-lg p-3 md:w-full`}>
      </Button>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        aria-label="Light"
        className={`flex justify-start rounded-lg gap-2 p-3 hover:bg-light dark:hover:bg-dark`}>
        <FaSun size={24} className="my-auto text-light" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark"
        className={`flex justify-start rounded-lg gap-2 p-3 hover:bg-light dark:hover:bg-dark`}>
        <FaMoon size={24} className="my-auto text-dark" />
      </button>
    );
  }
};

export default ThemeSwitcher;
