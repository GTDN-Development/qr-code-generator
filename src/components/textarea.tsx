import * as Headless from "@headlessui/react";
import clsx from "clsx";

export function Textarea({
  resizable = true,
  className,
  ref,
  ...props
}: Omit<Headless.TextareaProps, "as" | "className"> & {
  resizable?: boolean;
  className?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
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
      <Headless.Textarea
        ref={ref}
        {...props}
        className={clsx([
          // Basic layout
          "relative block h-full min-h-[38px] w-full appearance-none px-3.5 py-2.5 sm:px-3 sm:py-1.5",
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
          "disabled:border-input-border-hover",
          // Resizable
          resizable ? "resize-y" : "resize-none",
        ])}
      />
    </span>
  );
}
