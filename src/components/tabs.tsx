import * as Headless from "@headlessui/react";
import clsx from "clsx";

export function Tabs(props: Omit<Headless.TabGroupProps, "vertical">) {
  return <Headless.TabGroup {...props} vertical={false} />;
}

export function TabList({
  children,
  ref,
  ...props
}: Omit<Headless.TabListProps, "as"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <Headless.TabList
      {...props}
      ref={ref}
      className={clsx(
        // Variables
        "[--tabs-padding:--spacing(1)] [--tabs-radius:var(--radius-default)]",
        // Base
        "inline-flex items-center justify-center gap-1 p-(--tabs-padding)",
        // Radius
        "rounded-(--tabs-radius)",
        // Border
        "border-border-default border",
        // Colors
        "bg-surface-elevated text-text-default",
        props.className
      )}
    >
      {children}
    </Headless.TabList>
  );
}

export function TabTrigger({
  children,
  ref,
  ...props
}: Omit<Headless.TabProps, "as" | "children"> & {
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <Headless.Tab
      {...props}
      ref={ref}
      as="button"
      className={clsx(
        // Base
        "inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-1.5 focus:outline-hidden",
        // Typography
        "text-sm font-medium whitespace-nowrap",
        // Radius
        "rounded-[calc(var(--tabs-radius)-var(--tabs-padding))]",
        // Border
        "border border-transparent",
        // Hover state
        "hover:not-data-selected:not-disabled:bg-surface-high",
        // Selected state
        "data-selected:bg-surface-default data-selected:shadow-sm dark:data-selected:shadow-none",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Icons
        "[&_svg]:shrink-0 [&_svg]:self-center [&_svg]:text-current [&_svg:not([class*='size-'])]:size-[0.9em]",
        props.className
      )}
    >
      {children}
    </Headless.Tab>
  );
}

export function TabSections(props: Headless.TabPanelsProps) {
  return <Headless.TabPanels {...props} className={clsx("pt-2", props.className)} />;
}

export function TabContent(props: Headless.TabPanelProps) {
  return <Headless.TabPanel {...props} />;
}
