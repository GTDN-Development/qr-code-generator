import * as Headless from "@headlessui/react";
import clsx from "clsx";

export function CheckboxGroup({
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        // Basic groups
        "space-y-3",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium",
        props.className,
      )}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: Omit<Headless.FieldProps, "as" | "className"> & {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Headless.Field
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        "grid grid-cols-[calc(var(--spacing)*5)_1fr] items-center gap-x-4 gap-y-1",
        // Control layout
        "*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:justify-self-center",
        // Label layout
        "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start",
        // Description layout
        "*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2",
        // With description
        "has-data-[slot=description]:**:data-[slot=label]:font-medium",
        // Error message layout
        "*:data-[slot=error]:col-start-2 *:data-[slot=error]:row-start-3",
      )}
    />
  );
}

export const styles = {
  base: [
    // Basic layout
    "relative isolate flex size-5 shrink-0 items-center justify-center",
    // Radius
    "rounded-sm",
    // Default background color
    "bg-input-fill",
    // Border
    "border border-input-border group-data-hover:border-input-border-hover",
    // Focus ring
    "group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-focus-ring",
    // Disabled state
    "group-data-disabled:opacity-50",
    "group-data-disabled:cursor-not-allowed",
    "group-data-disabled:border-border-default group-data-disabled:bg-border-default group-data-disabled:text-border-default",
    // Forced colors mode
    "forced-colors:text-[HighlightText] forced-colors:group-data-checked:bg-[Highlight] forced-colors:group-data-disabled:text-[HighlightText] forced-colors:group-data-disabled:bg-[Highlight]",
  ],
  colors: {
    primary: [
      "group-data-checked:bg-primary-fill text-primary-on-fill",
      "group-data-checked:border-primary-fill group-data-hover:group-data-checked:border-primary-fill",
    ],
    secondary: [
      "group-data-checked:bg-secondary-fill text-secondary-on-fill",
      "group-data-checked:border-secondary-fill group-data-hover:group-data-checked:border-secondary-fill",
    ],
    tertiary: [
      "group-data-checked:bg-tertiary-fill text-tertiary-on-fill",
      "group-data-checked:border-tertiary-fill group-data-hover:group-data-checked:border-tertiary-fill",
    ],
    error: [
      "group-data-checked:bg-error-fill text-error-on-fill",
      "group-data-checked:border-error-fill group-data-hover:group-data-checked:border-error-fill",
    ],
    white: [
      "group-data-checked:bg-white text-gray-950",
      "group-data-checked:border-border-default group-data-hover:group-data-checked:border-border-emphasized",
      "dark:group-data-checked:border-transparent dark:group-data-hover:group-data-checked:border-transparent",
    ],
    dark: [
      "group-data-checked:bg-gray-950 text-white",
      "group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent",
      "dark:group-data-checked:border-border-default dark:group-data-hover:group-data-checked:border-border-emphasized",
    ],
    "dark/white": [
      // Dark variant in default mode
      "group-data-checked:bg-gray-950 text-white",
      // White variant in dark mode
      "dark:group-data-checked:bg-white dark:group-data-checked:text-gray-950",
      // Common for both - reset the border in the checked state - not needed when the contrast is sufficient
      "group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent",
    ],
  },
};

export function Checkbox({
  color = "primary",
  className,
  ...props
}: Omit<Headless.CheckboxProps, "as" | "className" | "color" | "children"> & {
  color?: keyof typeof styles.colors;
  className?: string;
}) {
  return (
    <Headless.Checkbox
      data-slot="control"
      {...props}
      className={clsx(className, "group inline-flex focus:outline-hidden")}
    >
      <span className={clsx(styles.base, styles.colors[color])}>
        <svg
          className="size-4 stroke-current opacity-0 group-data-checked:opacity-100 sm:size-3.5"
          viewBox="0 0 14 14"
          fill="none"
        >
          {/* Checkmark icon */}
          <path
            className="opacity-100 group-data-indeterminate:opacity-0"
            d="M3 8L6 11L11 3.5"
            strokeWidth={1.85}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Indeterminate icon */}
          <path
            className="opacity-0 group-data-indeterminate:opacity-100"
            d="M3 7H11"
            strokeWidth={1.85}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Headless.Checkbox>
  );
}
