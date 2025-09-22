import { TouchTarget } from "./button";
import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Link, type LinkProps } from "./link";

export const styles = {
  base: [
    // Display & layout
    "relative isolate inline-flex items-center justify-center gap-x-2 gap-y-1",
    // Border
    "rounded-sm",
    // Text
    "font-medium",
    // Transition
    "transition-colors duration-100 ease-in-out",
    // Cursor
    "data-clickable:cursor-pointer",
    // Focus ring
    "data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-focus-ring",
    // Disabled state
    "disabled:bg-disabled-fill disabled:border-disabled-fill disabled:text-disabled-on-fill disabled:cursor-not-allowed disabled:shadow-none",
    "disabled:hover:bg-disabled-fill disabled:hover:border-disabled-fill disabled:hover:text-disabled-on-fill disabled:hover:shadow-none",
    "disabled:inset-ring-current/10",
    // Disabled state for clickable badges [buttons & links] - disabling hover styles by data-clickable attribute
    "disabled:data-clickable:bg-disabled-fill disabled:data-clickable:hover:bg-disabled-alt disabled:data-clickable:border-disabled-fill disabled:data-clickable:text-disabled-on-fill disabled:data-clickable:shadow-none disabled:data-clickable:cursor-not-allowed",
    // Icons
    "[&_svg:not([class*='size-'])]:size-[1em] [&_svg]:text-current [&_svg]:shrink-0 [&_svg]:self-center",
  ],
  variant: {
    primary: [
      "bg-primary-fill/15 text-primary-text data-clickable:hover:bg-primary-fill/25",
      "inset-ring-1 inset-ring-current/10",
    ],
    secondary: [
      "bg-secondary-fill/15 text-secondary-text data-clickable:hover:bg-secondary-fill/25",
      "inset-ring-1 inset-ring-current/10",
    ],
    tertiary: [
      "bg-tertiary-fill/15 text-tertiary-text data-clickable:hover:bg-tertiary-fill/25",
      "inset-ring-1 inset-ring-current/10",
    ],
    error: [
      "bg-error-fill/15 text-error-text data-clickable:hover:bg-error-fill/25",
      "inset-ring-1 inset-ring-current/10",
    ],
    red: [
      "bg-[#ef4444]/15 data-clickable:hover:bg-[#ef4444]/25",
      "text-[#dc2626] dark:text-[#f87171]",
      "inset-ring-1 inset-ring-current/10",
    ],
    orange: [
      "bg-[#f97316]/15 data-clickable:hover:bg-[#f97316]/25",
      "text-[#c2410c] dark:text-[#fb923c]",
      "inset-ring-1 inset-ring-current/10",
    ],
    yellow: [
      "bg-[#eab308]/15 data-clickable:hover:bg-[#eab308]/25",
      "text-[#a16207] dark:text-[#facc15]",
      "inset-ring-1 inset-ring-current/10",
    ],
    green: [
      "bg-[#22c55e]/15 data-clickable:hover:bg-[#22c55e]/25",
      "text-[#15803d] dark:text-[#4ade80]",
      "inset-ring-1 inset-ring-current/10",
    ],
    emerald: [
      "bg-[#10b981]/15 data-clickable:hover:bg-[#10b981]/25",
      "text-[#047857] dark:text-[#34d399]",
      "inset-ring-1 inset-ring-current/10",
    ],
    blue: [
      "bg-[#3b82f6]/15 data-clickable:hover:bg-[#3b82f6]/25",
      "text-[#1d4ed8] dark:text-[#60a5fa]",
      "inset-ring-1 inset-ring-current/10",
    ],
    indigo: [
      "bg-[#6366f1]/15 data-clickable:hover:bg-[#6366f1]/25",
      "text-[#4338ca] dark:text-[#818cf8]",
      "inset-ring-1 inset-ring-current/10",
    ],
    purple: [
      "bg-[#a855f7]/15 data-clickable:hover:bg-[#a855f7]/25",
      "text-[#7e22ce] dark:text-[#c084fc]",
      "inset-ring-1 inset-ring-current/10",
    ],
    pink: [
      "bg-[#ec4899]/15 data-clickable:hover:bg-[#ec4899]/25",
      "text-[#be185d] dark:text-[#f472b6]",
      "inset-ring-1 inset-ring-current/10",
    ],
    rose: [
      "bg-[#f43f5e]/15 data-clickable:hover:bg-[#f43f5e]/25",
      "text-[#be123c] dark:text-[#fb7185]",
      "inset-ring-1 inset-ring-current/10",
    ],
  },
  size: {
    sm: ["px-1.5 py-0.5 text-xs/4"],
    lg: ["px-2.5 py-1 text-sm/4"],
  },
};

export type BadgeBaseProps = {
  variant?: keyof typeof styles.variant;
  size?: keyof typeof styles.size;
};

function mergeBadgeStyles({
  variant = "primary",
  size = "sm",
  className,
}: BadgeBaseProps & { className?: string }) {
  return clsx(styles.base, styles.variant[variant], styles.size[size], className);
}

export function Badge({
  variant = "primary",
  size = "sm",
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"span"> & { ref?: React.Ref<HTMLSpanElement> } & BadgeBaseProps) {
  return <span {...props} ref={ref} className={mergeBadgeStyles({ variant, size, className })} />;
}

export function BadgeButton({
  variant = "primary",
  size = "sm",
  children,
  className,
  ref,
  ...props
}: Omit<Headless.ButtonProps, "as" | "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
} & BadgeBaseProps) {
  return (
    <Headless.Button
      {...props}
      ref={ref}
      data-clickable
      className={mergeBadgeStyles({ variant, size, className })}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  );
}

export function BadgeLink({
  variant = "primary",
  size = "sm",
  children,
  className,
  ref,
  ...props
}: Omit<LinkProps, "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
} & BadgeBaseProps) {
  return (
    <Link
      {...props}
      ref={ref}
      data-clickable
      className={mergeBadgeStyles({ variant, size, className })}
    >
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
}
