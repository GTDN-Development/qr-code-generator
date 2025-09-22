"use client";

import clsx from "clsx";
import * as Headless from "@headlessui/react";
import { useState } from "react";
import { ButtonIcon } from "../button-icon";
import { ButtonLink } from "../button";
import {
  Dropdown,
  DropdownHeading,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  DropdownTriggerIcon,
} from "../dropdown";
import { contact, navigation, type NestedNavigation } from "@/data/navigation";
import { Drawer, DrawerTitle } from "../drawer";
import { FloatingBar, type FloatingBarProps } from "../floating-bar";
import { NavLink } from "../nav-link";
import { Link } from "../link";
import { Container } from "../container";
import { Logo } from "../logo";
import { useTheme } from "next-themes";
import { SocialMediaLinks } from "../social-media-links";

export function Navbar<T extends React.ElementType = "div">({
  as,
  position = "sticky",
  autoHide = true,
  narrow = false,
  ...props
}: FloatingBarProps<T> & {
  narrow?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <FloatingBar
      {...props}
      as={as || "div"}
      position={position}
      autoHide={autoHide}
      className={clsx(
        // Base styles for the navbar
        "z-100 h-(--navbar-height,64px) w-full",
        // Transition and initial state
        "transform-gpu transition duration-300",
        // Initial state
        "bg-tansparent",
        // Scrolled state - when the user starts scrolling
        "data-scrolled:bg-surface-default/75 data-scrolled:shadow-lg data-scrolled:shadow-gray-950/5 data-scrolled:backdrop-blur-2xl",
        "dark:data-scrolled:shadow-none",
        // Hidden state for auto-hide behavior
        "data-hidden:data-scrolled:shadow-none data-hidden:motion-safe:-translate-y-full",
        props.className
      )}
    >
      <Container
        size={narrow ? "default" : "fluid"}
        className="flex h-full items-center justify-between gap-8"
      >
        {/* Left side */}
        <div className="flex flex-1 items-center gap-4">
          <Link href="/" aria-label="Home Page">
            <Logo aria-hidden="true" className="text-text-emphasized h-auto w-20" />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="ml-auto hidden lg:block">
            <NavigationList items={navigation.primary} />
          </nav>

          <NavbarDivider className="hidden lg:block" />

          <ButtonLink href={contact.email.href} size="md" variant="dark/white">
            {contact.email.name}
          </ButtonLink>

          {/* Theme toggle */}
          <div>
            <ButtonIcon
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="secondary"
              size="md"
              aria-label="toggle theme"
            >
              <ThemeIcon aria-hidden="true" />
            </ButtonIcon>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <ButtonIcon
              onClick={() => setIsMenuOpen(true)}
              variant="secondary"
              size="md"
              aria-label="open menu"
            >
              <MenuIcon aria-hidden="true" />
            </ButtonIcon>

            <Drawer open={isMenuOpen} onClose={setIsMenuOpen} placement="bottom">
              <DrawerTitle className="mt-3 opacity-50">Menu</DrawerTitle>
              <nav className="mt-6">
                <MobileNavigationList items={navigation.primary} />
              </nav>
              <SocialMediaLinks className="mt-6" />
            </Drawer>
          </div>
        </div>
      </Container>
    </FloatingBar>
  );
}

function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} aria-hidden="true" className={clsx(className, "bg-border-default h-6 w-px")} />
  );
}

function NavigationList({
  items,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"ul">, "role"> & {
  items: NestedNavigation;
}) {
  return (
    <ul {...props} role="list" className={clsx("flex gap-x-6 pb-0.5")}>
      {Object.values(items).map((item, i) => (
        <li key={i}>
          {"children" in item ? (
            <Dropdown>
              <DropdownTrigger className="group inline-flex cursor-pointer items-center justify-center gap-1 font-medium whitespace-nowrap sm:text-sm/6">
                {item.name}
                <DropdownTriggerIcon
                  aria-hidden="true"
                  className="size-[1em] group-data-open:rotate-180"
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownSection>
                  <DropdownHeading>{item.name}</DropdownHeading>
                  {Object.values(item.children).map((subitem, j) => (
                    <DropdownItem key={j} href={subitem.href}>
                      {subitem.name}
                    </DropdownItem>
                  ))}
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavLink
              href={item.href}
              className="font-medium whitespace-nowrap decoration-current decoration-1 underline-offset-2 data-current:underline sm:text-sm/6"
            >
              {item.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileNavigationList({
  items,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"ul">, "role"> & {
  items: NestedNavigation;
}) {
  return (
    <ul {...props} role="list" className="space-y-3">
      {Object.values(items).map((item, i) => (
        <li key={i}>
          {"children" in item ? (
            <Headless.Disclosure>
              <Headless.DisclosureButton className="group text-text-emphasized flex items-center justify-center gap-3 text-2xl font-medium">
                {item.name}
                <DropdownTriggerIcon
                  aria-hidden="true"
                  className="size-[0.8em] translate-y-0.5 group-data-open:rotate-180"
                />
              </Headless.DisclosureButton>
              <Headless.DisclosurePanel className="py-2">
                <div className="border-border-default flex flex-col items-start gap-2.5 border-l py-1.5 pl-4 text-xl font-medium">
                  {Object.values(item.children).map((subitem, j) => (
                    <Headless.CloseButton
                      as={NavLink}
                      key={j}
                      href={subitem.href}
                      className="text-text-emphasized decoration-current/20 decoration-1 underline-offset-4 data-current:underline"
                    >
                      {subitem.name}
                    </Headless.CloseButton>
                  ))}
                </div>
              </Headless.DisclosurePanel>
            </Headless.Disclosure>
          ) : (
            <Headless.CloseButton
              as={NavLink}
              href={item.href}
              className="text-text-emphasized text-2xl font-medium decoration-current/20 decoration-1 underline-offset-4 data-current:underline"
            >
              {item.name}
            </Headless.CloseButton>
          )}
        </li>
      ))}
    </ul>
  );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  );
}

function ThemeIcon(props: React.ComponentProps<"svg">) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" />
    </svg>
  );
}
