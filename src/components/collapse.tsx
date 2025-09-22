import * as Headless from "@headlessui/react";
import clsx from "clsx";

type CollapseProps = Omit<Headless.DisclosureProps, "as" | "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export function Collapse({ children, className, ref, ...props }: CollapseProps) {
  return (
    <Headless.Disclosure
      {...props}
      as="div"
      ref={ref}
      className={clsx("border-border-default border-b", className)}
    >
      {children}
    </Headless.Disclosure>
  );
}

export function CollapseTrigger({
  children,
  className,
  ref,
  ...props
}: Omit<Headless.DisclosureButtonProps, "as" | "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}) {
  return (
    <Headless.DisclosureButton
      {...props}
      as="button"
      ref={ref}
      className={clsx(
        // Base layout
        "group flex w-full flex-1 items-center justify-between gap-2 py-4",
        // Typography
        "text-text-emphasized text-left font-semibold",
        // Radius
        "rounded-default",
        // Touch target
        "relative isolate cursor-pointer",
        // Icon
        "transition duration-200",
        // State
        "data-closed:rotate-180",
        className
      )}
    >
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
      {/* Icon has seamingly unnecessary classes `translate-x-0 translate-y-0 transform-gpu` - this is a bug fix for shaking icon during animations in safari */}
      <ChevronDownIcon
        aria-hidden="true"
        className="text-text-subtle size-5 shrink-0 grow-0 translate-x-0 translate-y-0 transform-gpu transition duration-300 ease-in-out group-data-open:rotate-180"
      />
    </Headless.DisclosureButton>
  );
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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

export function CollapseContent({
  children,
  className,
  ref,
  ...props
}: Omit<Headless.DisclosurePanelProps, "as" | "className" | "children"> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Headless.DisclosurePanel
      {...props}
      as="div"
      ref={ref}
      transition
      className="grid transform-gpu grid-rows-[1fr] transition-[grid-template-rows,opacity,transform,scale] duration-200 ease-in-out data-closed:scale-[0.99] data-closed:grid-rows-[0fr] data-closed:opacity-0"
    >
      <div className="overflow-hidden">
        <div className={clsx("pb-4", className)}>{children}</div>
      </div>
    </Headless.DisclosurePanel>
  );
}

// Composed variant of the collapse component
export function CollapseComposed({
  title,
  children,
  ref,
  ...props
}: CollapseProps & { title: React.ReactNode }) {
  return (
    <Collapse {...props} ref={ref}>
      <CollapseTrigger>{title}</CollapseTrigger>
      <CollapseContent>{children}</CollapseContent>
    </Collapse>
  );
}
