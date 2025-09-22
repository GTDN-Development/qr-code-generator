import { clsx } from "clsx";
import { Link, type LinkProps } from "./link";
import type React from "react";

export function Breadcrumbs({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      {...props}
      aria-label="Breadcrumb"
      className={clsx(className, "flex items-center gap-x-2 text-sm/6")}
    />
  );
}

export function BreadcrumbHome({
  children = "Home",
  className,
  ...props
}: Omit<LinkProps, "href">) {
  return (
    <Link href="/" {...props} className={clsx(className, "text-text-emphasized min-w-0 shrink-0")}>
      {children}
    </Link>
  );
}

export function BreadcrumbItem({
  href,
  children,
  className,
}: {
  href?: LinkProps["href"];
  children: React.ReactNode;
  className?: string;
}) {
  if (href) {
    return (
      <Link href={href} className={clsx(className, "text-text-emphasized min-w-0 truncate")}>
        {children}
      </Link>
    );
  }

  return (
    <span className={clsx(className, "text-text-emphasized last:text-subtle min-w-0 truncate")}>
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return <span className={clsx(className, "text-text-emphasized/25")}>/</span>;
}
