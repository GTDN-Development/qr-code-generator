import * as Headless from "@headlessui/react";
import { TouchTarget } from "./button";
import clsx from "clsx";
import { Link, type LinkProps } from "./link";

export const styles = {
  base: [
    // Display & layout
    "relative aspect-square isolate inline-flex text-center overflow-clip select-none items-center justify-center gap-x-2",
    // Border
    "rounded-default",
    // Text
    "font-sans font-semibold",
    // Transition
    "transition duration-200 ease-in-out",
    // Cursor
    "cursor-pointer",
    // Focus ring
    "data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-focus-ring",
    // Disabled state
    "disabled:bg-disabled-fill disabled:border-disabled-fill disabled:text-disabled-on-fill disabled:cursor-not-allowed disabled:shadow-none",
    "disabled:hover:bg-disabled-alt disabled:hover:border-disabled-fill disabled:hover:text-disabled-on-fill disabled:hover:shadow-none",
    "disabled:inset-ring-1 disabled:inset-ring-current/10",
    "disabled:hover:no-underline",
    // Icons
    "[&_svg]:text-current [&_svg]:shrink-0 [&_svg]:self-center",
  ],
  variant: {
    // Filled variants
    primary: [
      "bg-primary-fill text-primary-on-fill hover:bg-primary-alt",
      "inset-ring-1 inset-ring-current/10",
    ],
    secondary: [
      "bg-secondary-fill text-secondary-on-fill hover:bg-secondary-alt",
      "inset-ring-1 inset-ring-current/10",
    ],
    tertiary: [
      "bg-tertiary-fill text-tertiary-on-fill hover:bg-tertiary-alt",
      "inset-ring-1 inset-ring-current/10",
    ],
    error: [
      "bg-error-fill text-error-on-fill hover:bg-error-alt",
      "inset-ring-1 inset-ring-current/10",
    ],
    dark: ["bg-gray-950 text-gray-50 hover:bg-gray-800", "inset-ring-1 inset-ring-current/10"],
    white: ["bg-white text-gray-950 hover:bg-gray-300", "inset-ring-1 inset-ring-current/10"],
    "dark/white": [
      "bg-gray-950 text-gray-50 hover:bg-gray-800",
      "dark:bg-white dark:text-gray-950 dark:hover:bg-gray-300",
      "inset-ring-1 inset-ring-current/10",
    ],
    // Other styles
    outline: ["inset-ring-1 inset-ring-current/25 text-current hover:bg-current/10"],
    subtle: ["bg-current/10 text-current hover:bg-current/15"],
    plain: ["bg-transparent text-current hover:bg-current/10"],
  },
  size: {
    sm: ["size-7 [&_svg:not([class*='size-'])]:size-4"],
    md: ["size-9 [&_svg:not([class*='size-'])]:size-5"],
    lg: ["size-11 [&_svg:not([class*='size-'])]:size-6"],
    xl: ["size-13 [&_svg:not([class*='size-'])]:size-8"],
    "sm/md": [
      "size-7 [&_svg:not([class*='size-'])]:size-4 sm:size-9 sm:[&_svg:not([class*='size-'])]:size-5",
    ],
    "md/sm": [
      "size-9 [&_svg:not([class*='size-'])]:size-5 sm:size-7 sm:[&_svg:not([class*='size-'])]:size-4",
    ],
    "md/lg": [
      "size-9 [&_svg:not([class*='size-'])]:size-5 sm:size-11 sm:[&_svg:not([class*='size-'])]:size-6",
    ],
    "lg/md": [
      "size-11 [&_svg:not([class*='size-'])]:size-6 sm:size-9 sm:[&_svg:not([class*='size-'])]:size-5",
    ],
  },
};

export type ButtonBaseProps = {
  variant?: keyof typeof styles.variant;
  size?: keyof typeof styles.size;
};

function mergeButtonStyles({
  variant = "primary",
  size = "lg/md",
  className,
}: ButtonBaseProps & { className?: string }) {
  return clsx(styles.base, styles.variant[variant], styles.size[size], className);
}

export function ButtonIcon({
  variant = "primary",
  size = "lg/md",
  children,
  className,
  ref,
  ...props
}: Omit<Headless.ButtonProps, "as" | "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
} & ButtonBaseProps) {
  return (
    <Headless.Button
      {...props}
      ref={ref}
      className={mergeButtonStyles({ variant, size, className })}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  );
}

export function ButtonIconLink({
  variant = "primary",
  size = "lg/md",
  children,
  className,
  ref,
  ...props
}: Omit<LinkProps, "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
} & ButtonBaseProps) {
  return (
    <Link {...props} ref={ref} className={mergeButtonStyles({ variant, size, className })}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
}
