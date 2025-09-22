import * as Headless from "@headlessui/react";
import clsx from "clsx";

export const styles = {
  size: {
    xs: "sm:max-w-xs",
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
    "3xl": "sm:max-w-3xl",
    "4xl": "sm:max-w-4xl",
    "5xl": "sm:max-w-5xl",
  },
};

export function Dialog({
  children,
  size = "lg",
  className,
  ref,
  ...props
}: Omit<Headless.DialogProps, "as" | "className"> & {
  children: React.ReactNode;
  size?: keyof typeof styles.size;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Headless.Dialog {...props} ref={ref}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-gray-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-gray-950/65"
      />

      <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
        <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4">
          <Headless.DialogPanel
            transition
            className={clsx(
              className,
              styles.size[size],
              "bg-surface-default text-text-default dark:ring-border-default ring-border-default row-start-2 w-full min-w-0 rounded-t-3xl p-6 shadow-lg ring-1 sm:mb-auto sm:rounded-xl forced-colors:outline",
              "transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:translate-y-0 sm:data-closed:data-enter:scale-95"
            )}
          >
            <CloseButton className="relative z-10 float-end mb-2 ml-2" />
            {children}
          </Headless.DialogPanel>
        </div>
      </div>
    </Headless.Dialog>
  );
}

function CloseButton({
  className,
  ...props
}: Omit<Headless.CloseButtonProps, "as" | "className" | "children"> & {
  className?: string;
}) {
  return (
    <Headless.CloseButton
      {...props}
      className={clsx(
        className,
        "rounded-default bg-surface-default/75 text-default relative isolate z-10 float-end mb-2 ml-2 inline-flex size-8 cursor-pointer items-center justify-center backdrop-blur-lg transition-colors duration-150 hover:bg-current/10"
      )}
    >
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      <span className="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </Headless.CloseButton>
  );
}

export function DialogTitle({
  className,
  ...props
}: { className?: string } & Omit<Headless.DialogTitleProps, "as" | "className">) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        "text-emphasized text-lg/6 font-semibold text-balance sm:text-base/6"
      )}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: { className?: string } & Omit<Headless.DescriptionProps<"p">, "as" | "className">) {
  return (
    <Headless.Description as={"p"} {...props} className={clsx(className, "mt-2 text-pretty")} />
  );
}

export function DialogActions({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto"
      )}
    />
  );
}
