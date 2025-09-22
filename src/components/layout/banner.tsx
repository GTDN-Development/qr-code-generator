import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, type LinkProps } from "../link";

export function Banner({
  children,
  isOpen: controlledIsOpen,
  isDefaultOpen = true,
  onClose,
  isDismissable = true,
  ...props
}: React.ComponentPropsWithRef<"div"> & {
  children: React.ReactNode;
  isOpen?: boolean;
  isDefaultOpen?: boolean;
  onClose?: (isOpen: boolean) => void;
  isDismissable?: boolean;
}) {
  const isControlled = controlledIsOpen !== undefined;
  const [internalIsOpen, setInternalIsOpen] = useState(isDefaultOpen);

  const isComputedOpen = isControlled ? controlledIsOpen : internalIsOpen;

  function handleOpenChange(newIsOpen: boolean) {
    if (!isControlled) {
      setInternalIsOpen(newIsOpen);
    }

    if (onClose) {
      onClose(newIsOpen);
    }
  }

  useEffect(() => {
    if (isControlled) {
      setInternalIsOpen(controlledIsOpen);
    }
  }, [isControlled, controlledIsOpen]);

  if (!isComputedOpen) return null;

  return (
    <div
      {...props}
      className={clsx(
        "bg-primary-fill text-primary-on-fill flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1",
        !isDismissable && "sm:after:flex-1",
        props.className,
      )}
    >
      <p className="text-sm/6">{children}</p>
      {isDismissable && (
        <div className="flex flex-1 justify-end">
          <BannerCloseButton onClick={() => handleOpenChange(false)} />
        </div>
      )}
    </div>
  );
}

export function BannerCloseButton({
  className,
  ...props
}: Omit<Headless.ButtonProps, "as" | "children">) {
  return (
    <Headless.Button
      {...props}
      className={clsx(
        "relative isolate inline-flex size-6 cursor-pointer items-center justify-center rounded-sm text-current transition-colors duration-150 hover:bg-current/10",
        className,
      )}
    >
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      <span className="sr-only">Close alert</span>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </Headless.Button>
  );
}

export function BannerTitle(props: React.ComponentPropsWithRef<"strong">) {
  return (
    <strong {...props} className={clsx("font-semibold", props.className)} />
  );
}

export function BannerDescription(props: React.ComponentPropsWithRef<"span">) {
  return <span {...props} className={clsx("opacity-80", props.className)} />;
}

export function BannerDivider(props: React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 2 2"
      aria-hidden="true"
      className={clsx("mx-2 inline size-0.5 fill-current", props.className)}
    >
      <circle r={1} cx={1} cy={1} />
    </svg>
  );
}

export function BannerLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "mx-4 rounded-full bg-gray-950/85 px-3.5 py-1 text-sm/6 font-semibold whitespace-nowrap text-white hover:bg-gray-800/85",
        props.className,
      )}
    >
      {props.children}
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </Link>
  );
}
