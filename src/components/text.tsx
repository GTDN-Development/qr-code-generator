import clsx from "clsx";
import { Link, type LinkProps } from "./link";

export function TextLink({ className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "text-text-emphasized underline decoration-current/20 underline-offset-2 hover:decoration-current/60",
      )}
    />
  );
}

export function Text({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={clsx(className, "text-text-default text-base/6 sm:text-sm/6")}
    />
  );
}

export function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p {...props} className={clsx(className, "text-text-default text-lg/6")} />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentProps<"strong">) {
  return (
    <strong
      {...props}
      className={clsx(className, "text-text-emphasized font-medium")}
    />
  );
}

export function Em({ className, ...props }: React.ComponentProps<"em">) {
  return (
    <em {...props} className={clsx(className, "text-text-emphasized italic")} />
  );
}

export function Highlight({
  className,
  ...props
}: React.ComponentProps<"mark">) {
  return (
    <mark
      {...props}
      className={clsx(
        className,
        "bg-primary-subtle text-primary-text rounded-sm px-[0.125em]",
      )}
    />
  );
}

export function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      {...props}
      className={clsx(
        className,
        "border-border-default bg-surface-elevated text-text-emphasized rounded-sm border border-b-2 px-[0.25em] py-[0.125em] font-mono text-xs font-medium",
      )}
    />
  );
}

export function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "border-text-emphasized/10 bg-text-emphasized/5 text-text-emphasized rounded-sm border px-[0.125em] text-sm font-medium sm:text-[0.8125rem]",
      )}
    />
  );
}
