import { useEffect, useState } from "react";

type ClientOnlyProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

export default function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return fallback;

  return children;
}
