import * as Headless from "@headlessui/react";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NavLink } from "@/components/nav-link";
import Link from "next/link";
import { chain } from "@/components/utils";
import { navigation, type NestedNavigation, type SocialNavigation } from "@/data/navigation";
import { Logo } from "@/components/logo";
import clsx from "clsx";

export function Footer(props: React.ComponentProps<"footer">) {
  return (
    <footer {...props} className={clsx("border-t-border-default border-t", props.className)}>
      <Container>
        <div className="grid min-w-0 gap-16 py-16 lg:grid-cols-7 2xl:gap-32">
          {/* Brand section */}
          <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6 lg:col-span-2">
            <Link href="/" aria-label="Home Page">
              <Logo aria-hidden="true" className="text-text-emphasized h-auto w-20" />
            </Link>
            <p className="text-text-subtle text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <Divider subtle />
            <ThemeSwitcher />
            <ScrollToTopButton className="mt-auto" />
          </div>

          {/* Navigation sections */}
          <div className="grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:col-span-5 lg:grid-cols-4 lg:gap-8">
            {/* Col 1  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Navigace</h3>
              <FooterNavigation navigation={navigation.primary} />
            </div>
            {/* Col 2  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Další odkazy</h3>
              <FooterNavigation navigation={navigation.secondary} />
            </div>
            {/* Col 3  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Sociální sítě</h3>
              <FooterNavigation navigation={navigation.socials} />
            </div>
            {/* Col 4  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Ostatní</h3>
              <FooterNavigation navigation={navigation.legal} />
              <p className="text-text-subtle text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </div>

        {/* Metadata footer section */}
        <div className="border-t-border-default flex min-w-0 flex-wrap items-start justify-between gap-6 border-t py-12 sm:items-center">
          <Copyright company="gtdn.online" />
          <AgencyCredit />
        </div>
      </Container>
    </footer>
  );
}

function FooterNavigation({
  navigation,
  ...props
}: Omit<React.ComponentProps<"ul">, "children"> & {
  navigation: NestedNavigation | SocialNavigation;
}) {
  return (
    <ul {...props} role="list" className={clsx("flex min-w-0 flex-col gap-2", props.className)}>
      {Object.values(navigation).map((item, i) => (
        <li key={i}>
          {"children" in item ? (
            <>
              <div className="text-text-subtle sm:text-sm/6">{item.name}</div>
              <div className="pt-1.5">
                <div className="border-border-subtle flex min-w-0 flex-col items-start gap-2 border-l py-1 pl-3 sm:text-sm/6">
                  {Object.values(item.children).map((subitem, j) => (
                    <NavLink
                      key={j}
                      href={subitem.href}
                      className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6"
                    >
                      {subitem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <NavLink
              href={"href" in item ? item.href : "#"}
              className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6"
            >
              {item.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function Copyright({
  company = "Your Company",
  ...props
}: Omit<React.ComponentProps<"p">, "children"> & {
  company?: string;
}) {
  return (
    <p {...props} className={clsx("text-text-subtle text-sm", props.className)}>
      Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp;{company} - Všechna práva vyhrazena.
    </p>
  );
}

function ScrollToTopButton(props: Omit<Headless.ButtonProps, "children">) {
  return (
    <Headless.Button
      {...props}
      onClick={chain(props.onClick, () => window.scrollTo({ top: 0, behavior: "smooth" }))}
      className={clsx(
        "cursor-pointer underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6",
        props.className
      )}
    >
      Posunout nahoru{" "}
      <span aria-hidden="true" className="ml-2">
        ↑
      </span>
    </Headless.Button>
  );
}

function AgencyCredit(props: React.ComponentProps<"p">) {
  return (
    <p {...props} className={clsx("text-sm", props.className)}>
      <span className="text-text-subtle">Created by </span>
      <NavLink
        href="https://www.gtdn.online/"
        className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60"
      >
        gtdn.online
      </NavLink>
    </p>
  );
}
