"use client";

import { useContext } from "react";
import { AppContext } from "@/components/layout/providers";
import * as Headless from "@headlessui/react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "../link";
import clsx from "clsx";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  const { previousPathname } = useContext(AppContext);

  const classes = clsx(
    "flex cursor-pointer items-center justify-center gap-2 font-medium hover:underline sm:text-sm",
    className
  );

  if (previousPathname) {
    return (
      <Headless.Button className={classes} onClick={router.back}>
        <ArrowLeftIcon aria-hidden="true" className="size-5" />
        Zpět
      </Headless.Button>
    );
  }

  return (
    <Link href="/blog" className={classes}>
      <ArrowLeftIcon aria-hidden="true" className="size-5" />
      Přejít na blog
    </Link>
  );
}
