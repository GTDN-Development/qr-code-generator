import clsx from "clsx";
import { Container, type ContainerProps } from "./container";

type PropsWithOptionalAs<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
};

export function Hero<T extends React.ElementType = "header">({
  as,
  ref,
  ...props
}: PropsWithOptionalAs<T> & {
  ref?: React.Ref<HTMLElement>;
}) {
  const Element = as || "header";
  return (
    <Element
      ref={ref}
      {...props}
      className={clsx(
        "bg-surface-default text-text-default relative isolate overflow-hidden",
        props.className
      )}
    />
  );
}

export function HeroBackground(props: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={clsx("absolute inset-0 -z-10 size-full", props.className)} />;
}

export function HeroPattern({
  gridSize = 150,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { gridSize?: number }) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      className={clsx(
        "absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]",
        "stroke-border-default",
        props.className
      )}
    >
      <defs>
        <pattern
          x="50%"
          y={-1}
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M.5 ${gridSize}V.5H${gridSize}`} fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="fill-primary-fill/20 overflow-visible">
        <path
          d={`M-${gridSize} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${3 * gridSize} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M-${2 * gridSize} ${3 * gridSize}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${gridSize} ${4 * gridSize}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z`}
          strokeWidth={0}
        />
      </svg>
      <rect
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        width="100%"
        height="100%"
        strokeWidth={0}
      />
    </svg>
  );
}

export function HeroContent({ size = "default", ...props }: ContainerProps<"div">) {
  return (
    <Container
      {...props}
      size={size}
      className={clsx(
        "relative z-10 flex flex-col items-center justify-center py-16 text-center sm:py-20 xl:py-28",
        props.className
      )}
    />
  );
}

export function HeroKicker<T extends React.ElementType = "div">({
  as,
  ref,
  ...props
}: PropsWithOptionalAs<T> & {
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  const Element = as || "div";
  return (
    <Element
      {...props}
      ref={ref}
      className={clsx(
        "text-primary-text font-mono text-base font-medium uppercase",
        props.className
      )}
    />
  );
}

export function HeroTitle<T extends React.ElementType = "h1">({
  as,
  ref,
  ...props
}: PropsWithOptionalAs<T> & {
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  const Element = as || "h1";
  return (
    <Element
      {...props}
      ref={ref}
      className={clsx(
        "text-text-emphasized mt-3 text-4xl leading-none font-semibold tracking-tight text-pretty sm:text-7xl sm:leading-none",
        props.className
      )}
    />
  );
}

export function HeroDescription(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={clsx(
        "text-text-default mt-6 max-w-prose text-lg font-medium text-pretty sm:text-xl/8",
        props.className
      )}
    />
  );
}

export function HeroActions(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        "mt-8 flex w-full flex-col items-center justify-end gap-3 *:w-full sm:flex-row sm:justify-center sm:*:w-auto",
        props.className
      )}
    />
  );
}
