import { Container } from "@/components/container";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NavLink } from "@/components/nav-link";
import clsx from "clsx";

export function Footer(props: React.ComponentProps<"footer">) {
  return (
    <footer {...props} className={clsx("border-t-border-default border-t", props.className)}>
      <Container className="flex flex-col items-center justify-between gap-8 py-16 md:flex-row">
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <Copyright company="gtdn.online" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <AgencyCredit />
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <ThemeSwitcher />
        </div>
      </Container>
    </footer>
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
