"use client";

import { TouchTarget } from "./button";
import * as Headless from "@headlessui/react";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import React from "react";
import { Link, type LinkProps } from "./link";

export const styles = {
  base: [
    // Base layout
    "inline-grid shrink-0 align-middle *:col-start-1 *:row-start-1",
    // ring
    "inset-ring-1 inset-ring-current/20",
    // For touch targets and clickable elements
    "relative isolate data-clickable:cursor-pointer",
  ],
  square: {
    true: "rounded-[20%] *:data-[slot=image]:rounded-[20%] *:data-[slot=fallback]:rounded-[20%]",
    false: "rounded-full *:data-[slot=image]:rounded-full *:data-[slot=fallback]:rounded-full",
  },
};

type AvatarBaseProps = {
  square?: boolean;
};

export type AvatarProps = React.ComponentPropsWithoutRef<"span"> &
  AvatarBaseProps & {
    ref?: React.Ref<HTMLSpanElement>;
  };

function mergeAvatarBaseStyles({
  square = false,
  className,
}: AvatarBaseProps & { className?: string }) {
  return clsx(styles.base, square ? styles.square.true : styles.square.false, className);
}

export function Avatar({ className, square = false, ref, ...props }: AvatarProps) {
  return (
    <span
      {...props}
      ref={ref}
      data-slot="avatar"
      className={mergeAvatarBaseStyles({ square, className })}
    />
  );
}

export function AvatarButton({
  square = false,
  children,
  className,
  ref,
  ...props
}: Omit<Headless.ButtonProps, "as" | "className" | "children"> &
  AvatarBaseProps & {
    children: React.ReactNode;
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
  }) {
  return (
    <Headless.Button
      {...props}
      ref={ref}
      data-slot="avatar"
      data-clickable
      className={mergeAvatarBaseStyles({ square, className })}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  );
}

export function AvatarLink({
  square = false,
  children,
  className,
  ref,
  ...props
}: Omit<LinkProps, "className" | "children"> &
  AvatarBaseProps & {
    children: React.ReactNode;
    className?: string;
    ref?: React.Ref<HTMLAnchorElement>;
  }) {
  return (
    <Link
      {...props}
      ref={ref}
      data-slot="avatar"
      data-clickable
      className={mergeAvatarBaseStyles({ square, className })}
    >
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
}

export type AvatarInitialsBaseProps = { name?: string; children?: string };

export type AvatarInitialsProps = Omit<React.ComponentPropsWithoutRef<"svg">, "children"> &
  AvatarInitialsBaseProps;

export function AvatarInitials({
  name,
  children,
  ref,
  ...props
}: AvatarInitialsProps & {
  ref?: React.Ref<SVGSVGElement>;
}) {
  return (
    <svg
      {...props}
      ref={ref}
      data-slot="fallback"
      className="size-full fill-current p-[5%] text-[48px] font-medium uppercase select-none"
      viewBox="0 0 100 100"
      aria-hidden={name ? undefined : "true"}
    >
      {name && <title>{name}</title>}
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        textAnchor="middle"
        dy=".125em"
      >
        {children || (name && getInitials(name))}
      </text>
    </svg>
  );
}

// Helper function to get initials from a name
export function getInitials(name: string): string {
  const words = name.split(" ");

  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }

  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export type AvatarImageProps = Omit<ImageProps, "width" | "height"> & {
  width?: number;
  height?: number;
};

export function AvatarImage({
  src,
  alt,
  width,
  height,
  className,
  ref,
  ...props
}: AvatarImageProps & {
  ref?: React.Ref<HTMLImageElement>;
}) {
  return (
    <Image
      {...props}
      ref={ref}
      src={src}
      alt={alt}
      width={width || 256}
      height={height || 256}
      data-slot="image"
      className={clsx("size-full object-cover select-none", className)}
    />
  );
}

const offsets = {
  xs: "-space-x-2",
  sm: "-space-x-4",
  md: "-space-x-6",
  lg: "-space-x-8",
  xl: "-space-x-10",
};

type AvatarGroupBaseProps = {
  offset?: keyof typeof offsets;
};

export function AvatarGroup({
  children,
  offset = "sm",
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"div"> &
  AvatarGroupBaseProps & {
    ref?: React.Ref<HTMLDivElement>;
  }) {
  return (
    <div {...props} ref={ref} className={clsx("flex flex-row", offsets[offset], props.className)}>
      {children}
    </div>
  );
}

export function partition<T>(items: T[], max: number) {
  const visible: T[] = [];
  const overflow: T[] = [];
  const total = items.length;

  for (const item of items) {
    if (visible.length < max) {
      visible.push(item);
    } else {
      overflow.push(item);
    }
  }

  return { visible, overflow, total };
}

// Composed Avatar
export function AvatarComposed({
  name,
  initials,
  src,
  alt,
  width,
  height,
  ...props
}: AvatarProps &
  Omit<AvatarInitialsBaseProps, "children"> & {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    initials?: string;
  }) {
  return (
    <Avatar {...props}>
      <AvatarInitials name={name}>{initials}</AvatarInitials>
      {src && <AvatarImage src={src} alt={alt || name || "Avatar"} width={width} height={height} />}
    </Avatar>
  );
}
