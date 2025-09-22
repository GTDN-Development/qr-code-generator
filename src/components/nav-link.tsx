"use client";

import { Link, type LinkProps } from "./link";
import { usePathname } from "next/navigation";

export function NavLink({ children, href, target, rel, ...props }: LinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href;
  const isExternal = href.startsWith("http");

  return (
    <Link
      {...props}
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      data-current={isCurrent ? "true" : undefined}
      data-external={isExternal ? "true" : undefined}
      target={isExternal ? target || "_blank" : undefined}
      rel={isExternal ? rel || "noopener noreferrer" : undefined}
    >
      {children}
      {isExternal && (
        <span aria-hidden="true" className="ml-2 opacity-50">
          &#8599;
        </span>
      )}
    </Link>
  );
}
