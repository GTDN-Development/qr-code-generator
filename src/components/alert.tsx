"use client";

import { Link, LinkProps } from "./link";
import { chain } from "./utils";
import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { createContext, useContext, useEffect, useState } from "react";

type AlertContextType = {
  isOpen: boolean;
  closeAlert: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

function useAlertContext() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("Alert components must be used within an Alert");
  }
  return context;
}

const styles = {
  variant: {
    primary: ["bg-primary-subtle text-primary-text", "inset-ring-1 inset-ring-current/25"],
    secondary: ["bg-secondary-subtle text-secondary-text", "inset-ring-1 inset-ring-current/25"],
    tertiary: ["bg-tertiary-subtle text-tertiary-text", "inset-ring-1 inset-ring-current/25"],
    error: ["bg-error-subtle text-error-text", "inset-ring-1 inset-ring-current/25"],
  },
};

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: keyof typeof styles.variant;
  isOpen?: boolean;
  isDefaultOpen?: boolean;
  onClose?: (isOpen: boolean) => void;
};

export function Alert({
  variant = "primary",
  className,
  children,
  isOpen: controlledIsOpen,
  isDefaultOpen = true,
  onClose,
  ref,
  ...props
}: AlertProps & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  const isControlled = controlledIsOpen !== undefined;
  const [internalIsOpen, setInternalIsOpen] = useState(isDefaultOpen);

  const isComputedOpen = isControlled ? controlledIsOpen : internalIsOpen;

  function closeAlert() {
    if (!isControlled) {
      setInternalIsOpen(false);
    }

    if (onClose) {
      onClose(false);
    }
  }

  useEffect(() => {
    if (isControlled) {
      setInternalIsOpen(controlledIsOpen);
    }
  }, [isControlled, controlledIsOpen]);

  if (!isComputedOpen) return null;

  return (
    <AlertContext.Provider value={{ isOpen: isComputedOpen, closeAlert }}>
      <div
        {...props}
        ref={ref}
        role="alert"
        className={clsx([
          className,
          styles.variant[variant],
          // Base
          "flex items-start gap-2 p-4 *:shrink-0 *:grow-0 *:data-[slot=content]:shrink-1 *:data-[slot=content]:grow-1",
          // Icons
          "[&_svg:not([class*='size-'])]:size-5",
          // Radius
          "rounded-lg",
          // Typography
          "text-sm",
        ])}
      >
        {children}
      </div>
    </AlertContext.Provider>
  );
}

export function AlertContent(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      data-slot="content"
      className={clsx(
        "flex min-h-5 flex-col justify-center gap-2 [&_p]:leading-relaxed",
        props.className
      )}
    />
  );
}

type PropsWithOptionalAs<T extends React.ElementType> = React.ComponentProps<T> & {
  as?: T;
};

export function AlertTitle<T extends React.ElementType = "h3">({
  as,
  ...props
}: PropsWithOptionalAs<T>) {
  const Element = as || "h3";
  return <Element {...props} className={clsx("leading-tight font-medium", props.className)} />;
}

export function AlertDescription(props: React.ComponentProps<"p">) {
  return <p {...props} className={clsx("leading-relaxed", props.className)} />;
}

export function AlertLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "text-text-emphasized font-semibold underline decoration-current/50 underline-offset-2 hover:text-current",
        props.className
      )}
    />
  );
}

export function AlertCloseButton({
  onClick,
  ...props
}: Omit<Headless.ButtonProps, "as" | "children">) {
  const { closeAlert } = useAlertContext();

  return (
    <Headless.Button
      {...props}
      onClick={chain(closeAlert, onClick)}
      className={clsx(
        "relative isolate inline-flex size-5 cursor-pointer items-center justify-center rounded-sm text-current transition-colors duration-150 hover:bg-current/10",
        props.className
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
        className="size-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </Headless.Button>
  );
}

export function AlertInfoIcon(props: React.ComponentProps<"svg">) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function AlertBulbIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

export function AlertErrorIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

// Composed variant
export function AlertComposed({
  variant = "primary",
  icon,
  title,
  description,
  children,
  isDismissable = true,
  onCloseButtonClick,
  ...props
}: AlertProps & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  isDismissable?: boolean;
  onCloseButtonClick?: () => void;
}) {
  return (
    <Alert {...props} variant={variant}>
      {icon ||
        (variant === "error" ? (
          <AlertErrorIcon aria-hidden="true" />
        ) : (
          <AlertInfoIcon aria-hidden="true" />
        ))}
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </AlertContent>
      {isDismissable && <AlertCloseButton onClick={onCloseButtonClick} />}
    </Alert>
  );
}
