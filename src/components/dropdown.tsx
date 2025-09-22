"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Button } from "./button";
import { Link } from "./link";

export function Dropdown(props: Headless.MenuProps) {
  return <Headless.Menu {...props} />;
}

export function DropdownTrigger(props: Headless.MenuButtonProps) {
  return (
    <Headless.MenuButton
      {...props}
      className={clsx(
        props.className,
        // We should provide default size to the icon at minimum to ensure it is visible
        "[&_svg:not([class*='size-'])]:size-[1em]"
      )}
    />
  );
}

export function DropdownButton<T extends React.ElementType = typeof Button>({
  as = Button,
  ...props
}: { className?: string } & Omit<Headless.MenuButtonProps<T>, "className">) {
  return <Headless.MenuButton as={as} {...props} />;
}

export function DropdownMenu({
  anchor = "bottom",
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuItemsProps, "as" | "className">) {
  return (
    <Headless.MenuItems
      {...props}
      transition
      anchor={anchor}
      className={clsx(
        className,
        // Variables
        "[--dropdown-padding:--spacing(1)] [--dropdown-radius:var(--radius-popover)]",
        // Variables - Anchor positioning
        "[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(1)] data-[anchor~=end]:[--anchor-offset:6px] data-[anchor~=start]:[--anchor-offset:-6px] sm:data-[anchor~=end]:[--anchor-offset:4px] sm:data-[anchor~=start]:[--anchor-offset:-4px]",
        // Base styles
        "isolate w-max p-(--dropdown-padding)",
        // Radius
        "rounded-(--dropdown-radius)",
        // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
        "outline outline-transparent focus:outline-hidden",
        // Handle scrolling when menu won't fit in viewport
        "overflow-y-auto",
        // Popover background
        "bg-popover-fill/75 backdrop-blur-xl",
        // Shadows
        "ring-border-default shadow-lg ring-1",
        // Define grid at the menu level if subgrid is supported
        "supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
        // Transitions
        "transition data-closed:scale-[0.98] data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0"
      )}
    />
  );
}

export function DropdownItem({
  className,
  ...props
}: { className?: string } & (
  | Omit<Headless.MenuItemProps<typeof Headless.Button>, "as" | "className">
  | Omit<Headless.MenuItemProps<typeof Link>, "as" | "className">
)) {
  const classes = clsx(
    className,
    // Base styles
    "group cursor-pointer px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5",
    // Radius
    "rounded-[calc(var(--dropdown-radius)-var(--dropdown-padding))]",
    // Text styles
    "text-popover-on-fill text-left text-base/6 font-normal sm:text-sm/6 forced-colors:text-[CanvasText]",
    // Focus
    "data-focus:bg-popover-selected data-focus:text-popover-on-selected",
    // Disabled state
    "data-disabled:cursor-not-allowed data-disabled:opacity-50",
    // Forced colors mode
    "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:[&_svg]:text-[HighlightText]",
    // Use subgrid when available but fallback to an explicit grid layout if not
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
    // Icons
    "[&_svg:not([class*='size-'])]:size-[1em]"
  );

  return "href" in props ? (
    <Headless.MenuItem as={Link} {...props} className={classes} />
  ) : (
    <Headless.MenuItem as={Headless.Button} type="button" {...props} className={classes} />
  );
}

export function DropdownHeader({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={clsx(className, "col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3")} />;
}

export function DropdownSection({
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuSectionProps, "as" | "className">) {
  return (
    <Headless.MenuSection
      {...props}
      className={clsx(
        className,
        // Define grid at the section level instead of the item level if subgrid is supported
        "col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]"
      )}
    />
  );
}

export function DropdownHeading({
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuHeadingProps, "as" | "className">) {
  return (
    <Headless.MenuHeading
      {...props}
      className={clsx(
        className,
        "text-popover-on-fill/70 col-span-full grid grid-cols-[1fr_auto] gap-x-12 px-3.5 pt-2 pb-1 text-sm/5 font-semibold sm:px-3 sm:text-xs/5"
      )}
    />
  );
}

export function DropdownDivider({
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuSeparatorProps, "as" | "className">) {
  return (
    <Headless.MenuSeparator
      {...props}
      className={clsx(
        className,
        "bg-border-default col-span-full mx-3.5 my-1 h-px border-0 sm:mx-3 forced-colors:bg-[CanvasText]"
      )}
    />
  );
}

export function DropdownLabel({
  className,
  ...props
}: { className?: string } & Omit<Headless.LabelProps, "as" | "className">) {
  return (
    <Headless.Label
      {...props}
      data-slot="label"
      className={clsx(className, "col-start-2 row-start-1")}
    />
  );
}

export function DropdownDescription({
  className,
  ...props
}: { className?: string } & Omit<Headless.DescriptionProps, "as" | "className">) {
  return (
    <Headless.Description
      data-slot="description"
      {...props}
      className={clsx(
        className,
        "text-popover-on-fill/70 group-data-focus:text-popover-on-fill col-span-2 col-start-2 row-start-2 text-sm/5 sm:text-xs/5 forced-colors:group-data-focus:text-[HighlightText]"
      )}
    />
  );
}

export function DropdownShortcut({
  keys,
  className,
  ...props
}: { keys: string | string[]; className?: string } & Omit<
  Headless.DescriptionProps<"kbd">,
  "as" | "className"
>) {
  return (
    <Headless.Description
      as="kbd"
      {...props}
      className={clsx(className, "col-start-5 row-start-1 flex justify-self-end")}
    >
      {(Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (
        <kbd
          key={index}
          className={clsx([
            "text-popover-on-fill/70 group-data-focus:text-popover-on-fill min-w-[2ch] text-center font-sans capitalize forced-colors:group-data-focus:text-[HighlightText]",
            // Make sure key names that are longer than one character (like "Tab") have extra space
            index > 0 && char.length > 1 && "pl-1",
          ])}
        >
          {char}
        </kbd>
      ))}
    </Headless.Description>
  );
}

export function DropdownTriggerIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
