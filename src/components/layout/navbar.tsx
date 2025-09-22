import clsx from "clsx";
import { Link } from "../link";
import { Container } from "../container";
import { SocialMediaLinks } from "../social-media-links";
import { QrCodeIcon } from "lucide-react";

export function Navbar(props: React.ComponentProps<"div">) {
  return (
    <header
      {...props}
      className={clsx(
        // Base styles for the navbar
        "h-(--navbar-height,64px) w-full",
        props.className
      )}
    >
      <Container className="flex h-full items-center justify-between gap-8">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-4">
          <Link href="/" aria-label="Home Page">
            <QrCodeIcon aria-hidden="true" className="text-text-emphasized size-8" />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <SocialMediaLinks />
        </div>
      </Container>
    </header>
  );
}
