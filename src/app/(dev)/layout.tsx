import { notFound } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    notFound();
  }

  return <>{children}</>;
}
