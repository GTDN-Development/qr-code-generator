import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Link, type LinkProps } from "./link";
import { Spinner } from "./spinner";

export const styles = {
  base: [
    // Display & layout
    "relative isolate inline-flex text-center overflow-clip select-none items-center justify-center gap-x-2 gap-y-1",
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
    "[&_svg:not([class*='size-'])]:size-[0.9em] [&_svg]:text-current [&_svg]:shrink-0 [&_svg]:self-center",
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
    link: [
      "bg-transparent text-primary-bold underline-offset-3 decoration-current/60 decoration-[1.5px] hover:underline",
    ],
  },
  size: {
    sm: ["px-2 py-1 text-xs/5"],
    md: ["px-3 py-1.5 text-sm/6"],
    lg: ["px-3.5 py-2.5 text-base/6"],
    xl: ["px-4 py-3 text-lg/7"],
    "sm/md": ["px-2 py-1 text-xs/5 sm:px-3 sm:py-1.5 sm:text-sm/6"],
    "md/sm": ["px-3 py-1.5 text-sm/6 sm:px-2 sm:py-1 sm:text-xs/5"],
    "md/lg": ["px-3 py-1.5 text-sm/6 sm:px-3.5 sm:py-2.5 sm:text-base/6"],
    "lg/md": ["px-3.5 py-2.5 text-base/6 sm:px-3 sm:py-1.5 sm:text-sm/6"],
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

export function Button({
  variant = "primary",
  size = "lg/md",
  disabled,
  loading = false,
  children,
  className,
  ref,
  ...props
}: Omit<Headless.ButtonProps, "as" | "className" | "children"> & {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
} & ButtonBaseProps) {
  return (
    <Headless.Button
      {...props}
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      className={mergeButtonStyles({ variant, size, className })}
    >
      <TouchTarget>
        {loading ? (
          <>
            <span className={clsx(styles.base[0], "opacity-0")}>{children}</span>
            <Spinner className="absolute top-1/2 left-1/2 size-[1em] -translate-x-1/2 -translate-y-1/2" />
          </>
        ) : (
          children
        )}
      </TouchTarget>
    </Headless.Button>
  );
}

export function ButtonLink({
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

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
