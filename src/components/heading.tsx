import clsx from "clsx";

export const styles = {
  variants: {
    size: {
      inherit: "",
      xs: "text-sm sm:text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-2xl sm:text-3xl",
      "4xl": "text-2xl sm:text-4xl",
      "5xl": "text-3xl sm:text-5xl",
      "6xl": "text-3xl sm:text-5xl lg:text-6xl",
      "7xl": "text-4xl md:text-6xl lg:text-7xl",
      "8xl": "text-4xl md:text-6xl lg:text-8xl",
      "9xl": "text-5xl md:text-6xl lg:text-8xl xl:text-9xl",
      "10xl": "text-5xl md:text-6xl lg:text-8xl xl:text-[10rem]",
      "11xl": "text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem]",
    },
  },
};

type SizeProps = keyof typeof styles.variants.size;

type PropsWithOptionalAs<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
};

export function Heading<T extends React.ElementType = "h2">({
  as,
  ref,
  size = "4xl",
  ...props
}: PropsWithOptionalAs<T> & {
  size?: SizeProps;
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  const Element = as || "h2";
  return (
    <Element
      {...props}
      ref={ref}
      className={clsx("font-sans font-bold", styles.variants.size[size], props.className)}
    />
  );
}

export function Subheading<T extends React.ElementType = "h3">({
  as,
  size = "lg",
  ref,
  ...props
}: PropsWithOptionalAs<T> & {
  size?: SizeProps;
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  const Element = as || "h3";
  return (
    <Element
      {...props}
      ref={ref}
      className={clsx("font-sans font-medium", styles.variants.size[size], props.className)}
    />
  );
}
