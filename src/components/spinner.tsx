import clsx from "clsx";

export function Spinner({
  thicker = false,
  ...props
}: React.ComponentProps<"div"> & {
  thicker?: boolean;
}) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-full border-current border-b-transparent border-l-transparent",
        "animate-[spin_0.5s_linear_infinite]",
        thicker ? "border-6" : "border-2",
        props.className || "size-3.5 text-current"
      )}
    />
  );
}
