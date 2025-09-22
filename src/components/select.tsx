import * as Headless from "@headlessui/react";
import clsx from "clsx";

export function Select({
  className,
  multiple,
  ref,
  ...props
}: Omit<Headless.SelectProps, "as" | "className"> & {
  className?: string;
  ref?: React.ForwardedRef<HTMLSelectElement>;
}) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        "group relative block w-full",
        // Focus ring
        "focus-within:after:ring-focus-ring after:pointer-events-none after:absolute after:inset-0 after:ring-transparent after:ring-inset focus-within:after:ring-2",
        // Radius for focus ring - should be the same as the input radius
        "after:rounded-input",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-current/10 has-data-disabled:before:shadow-none",
      ])}
    >
      <Headless.Select
        ref={ref}
        multiple={multiple}
        {...props}
        className={clsx([
          // Basic layout
          "relative block w-full appearance-none py-2.5 sm:py-1.5",
          // Radius
          "rounded-input",
          // Horizontal padding
          multiple ? "px-3.5 sm:px-3" : "pr-10 pl-3.5 sm:pr-9 sm:pl-3",
          // Options (multi-select)
          "[&_optgroup]:font-semibold",
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
          "data-disabled:border-input-border-hover data-disabled:opacity-100",
        ])}
      />
      {!multiple && (
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="stroke-input-placeholder group-has-data-disabled:stroke-default size-5 sm:size-4 forced-colors:stroke-[CanvasText]"
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M5.75 10.75L8 13L10.25 10.75"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 5.25L8 3L5.75 5.25"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </span>
  );
}
