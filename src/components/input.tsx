import * as Headless from "@headlessui/react";
import clsx from "clsx";

export function InputGroup({
  children,
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="control"
      className={clsx(
        "relative isolate block",
        "has-[svg:first-child]:[&_input]:pl-10 has-[svg:last-child]:[&_input]:pr-10 sm:has-[svg:first-child]:[&_input]:pl-8 sm:has-[svg:last-child]:[&_input]:pr-8",
        "[&_svg]:pointer-events-none [&_svg]:absolute [&_svg]:top-3 [&_svg]:z-10 sm:[&_svg]:top-2.5 [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4",
        "[&>svg:first-child]:left-3 sm:[&>svg:first-child]:left-2.5 [&>svg:last-child]:right-3 sm:[&>svg:last-child]:right-2.5",
        "[&_svg]:text-input-placeholder",
      )}
    >
      {children}
    </span>
  );
}

const dateTypes = ["date", "datetime-local", "month", "time", "week"];
type DateType = (typeof dateTypes)[number];

export function Input({
  className,
  ref,
  ...props
}: Omit<Headless.InputProps, "as" | "className"> & {
  type?:
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url"
    | DateType;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        "relative block w-full",
        // Focus ring
        "focus-within:after:ring-focus-ring after:pointer-events-none after:absolute after:inset-0 after:ring-transparent after:ring-inset focus-within:after:ring-2",
        // Radius for focus ring - should be the same as the input radius
        "after:rounded-input",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-current/10 has-data-disabled:before:shadow-none",
        // Invalid state
        "has-data-invalid:before:shadow-error-fill/10",
      ])}
    >
      <Headless.Input
        ref={ref}
        {...props}
        className={clsx([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              "[&::-webkit-datetime-edit-fields-wrapper]:p-0",
              "[&::-webkit-date-and-time-value]:min-h-[1.5em]",
              "[&::-webkit-datetime-edit]:inline-flex",
              "[&::-webkit-datetime-edit]:p-0",
              "[&::-webkit-datetime-edit-year-field]:p-0",
              "[&::-webkit-datetime-edit-month-field]:p-0",
              "[&::-webkit-datetime-edit-day-field]:p-0",
              "[&::-webkit-datetime-edit-hour-field]:p-0",
              "[&::-webkit-datetime-edit-minute-field]:p-0",
              "[&::-webkit-datetime-edit-second-field]:p-0",
              "[&::-webkit-datetime-edit-millisecond-field]:p-0",
              "[&::-webkit-datetime-edit-meridiem-field]:p-0",
            ],
          // Basic layout
          "relative block w-full appearance-none px-3.5 py-2.5 sm:px-3 sm:py-1.5",
          // Radius
          "rounded-input",
          // Typography
          "text-input-on-fill placeholder:text-input-placeholder text-base/6 sm:text-sm/6",
          // Border
          "border-input-border data-hover:border-input-border-hover border",
          // Background color
          "bg-input-fill",
          // Hide default focus styles
          "focus:outline-hidden",
          // Invalid state
          "data-invalid:border-error-fill data-invalid:data-hover:border-error-fill",
          // Disabled state
          "data-disabled:border-input-border-hover",
        ])}
      />
    </span>
  );
}
