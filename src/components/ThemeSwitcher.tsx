"use client";

import { FaSun, FaMoon } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const ThemeSwitcher = ({ expanded }: { expanded: boolean }) => {
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
        className={`flex justify-start rounded-lg p-3 md:w-full ${expanded ? "w-full" : "w-12"}`}>
        <div
          className={`text-2xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
          Loading
        </div>
      </Button>
    );

  if (resolvedTheme === "dark") {
    return (
      <Button
        disableRipple={true}
        disableAnimation={true}
        isIconOnly={true}
        onPress={() => setTheme("light")}
        aria-label="Light"
        color="default"
        className={`flex justify-start rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:w-full ${expanded ? "w-full" : "w-12"}`}>
        <FaSun size={24} className=" text-light" />
        {
          <div
            className={`text-2xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
            Light Mode
          </div>
        }
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        disableRipple={true}
        disableAnimation={true}
        isIconOnly={true}
        onPress={() => setTheme("dark")}
        aria-label="Dark"
        color="default"
        className={`flex justify-start rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:w-full ${expanded ? "w-full" : "w-12"}`}>
        <FaMoon size={24} className=" text-dark" />
        {
          <div
            className={`text-2xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
            Dark Mode
          </div>
        }
      </Button>
    );
  }
};

export default ThemeSwitcher;
