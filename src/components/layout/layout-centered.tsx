"use client";

import clsx from "clsx";
import { Banner, BannerDescription, BannerDivider, BannerLink, BannerTitle } from "./banner";
import { Link, type LinkProps } from "../link";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

// Main Layout Component
export function LayoutCentered({ children }: { children: React.ReactNode }) {
  const contentId = "gtdn-app-content";

  return (
    <div
      className={clsx(
        "[--navbar-height:--spacing(16)]",
        "relative isolate flex min-h-dvh w-full flex-col justify-between *:shrink-0 *:grow-0 *:data-[slot=main]:shrink-1 *:data-[slot=main]:grow-1"
      )}
    >
      {/* Skip to content - A11y */}
      <SkipToContent href={`#${contentId}`}>Skip to content</SkipToContent>

      {/* Banner */}
      <Banner isDismissable={true}>
        <BannerTitle>Lorem ipsum dolor sit amet</BannerTitle>
        <BannerDivider />
        <BannerDescription>consectetur adipisicing elit ipsa laudantium</BannerDescription>
        <BannerLink href="/">Call to action</BannerLink>
      </Banner>

      {/* Header */}
      <Navbar as="header" position="sticky" autoHide={true} narrow={true} />

      {/* Main content */}
      <main id={contentId} data-slot="main" className="min-w-0">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SkipToContent({ children, className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "bg-primary-fill text-primary-on-fill rounded-default fixed top-6 left-6 z-1000 hidden -translate-y-[1000%] px-5 py-2.5 text-base font-bold inset-ring-3 inset-ring-current/60 focus-visible:translate-y-0 pointer-fine:block",
        className
      )}
    >
      {children}
    </Link>
  );
}
