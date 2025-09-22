"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { useTheme } from "next-themes";
import ClientOnly from "./client-only";

function SunIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function SystemIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
}

function MoonIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

function ThemeSwitcherButton(props: React.ComponentProps<typeof Radio>) {
  return (
    <Radio
      className="block rounded-full p-2.5 data-checked:bg-gray-950/10 sm:p-1.5 dark:data-checked:bg-white/15 dark:data-checked:text-white"
      {...props}
    />
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <ClientOnly fallback={<div className="h-12.5 w-32.5 sm:h-10.5 sm:w-26.5" />}>
      <RadioGroup
        value={theme}
        onChange={(value) => setTheme(value)}
        className="relative z-0 inline-grid grid-cols-3 rounded-full border border-gray-950/15 p-1 text-gray-950 dark:border-white/20 dark:text-white"
      >
        <ThemeSwitcherButton aria-label="Light theme" value="light">
          <SunIcon className="block size-5" />
        </ThemeSwitcherButton>

        <ThemeSwitcherButton aria-label="System theme" value="system">
          <SystemIcon className="block size-5" />
        </ThemeSwitcherButton>

        <ThemeSwitcherButton aria-label="Dark theme" value="dark">
          <MoonIcon className="block size-5" />
        </ThemeSwitcherButton>
      </RadioGroup>
    </ClientOnly>
  );
}
