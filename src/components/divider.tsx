import clsx from "clsx";

export function Divider({
  subtle = false,
  className,
  ...props
}: { subtle?: boolean } & React.ComponentPropsWithoutRef<"hr">) {
  return (
    <hr
      role="presentation"
      {...props}
      className={clsx(
        className,
        "w-full border-t",
        subtle ? "border-border-subtle" : "border-border-default",
      )}
    />
  );
}
