import * as Headless from "@headlessui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps &
  React.ComponentPropsWithoutRef<"a"> & { ref?: React.Ref<HTMLAnchorElement> };

export function Link({ ref, ...props }: LinkProps) {
  return (
    <Headless.DataInteractive>
      <NextLink {...props} ref={ref} />
    </Headless.DataInteractive>
  );
}
