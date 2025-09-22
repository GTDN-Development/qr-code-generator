import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LayoutCentered } from "@/components/layout/layout-centered";
import { Providers } from "@/components/layout/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "gtdn.online",
    template: "%s | gtdn.online",
  },
  description: "This app is created by gtdn.online",
  authors: [{ name: "gtdn.online", url: "https://www.gtdn.online/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="text-text-default bg-surface-default scroll-pt-16 scroll-smooth font-sans antialiased">
        <div className="relative isolate">
          <Providers>
            <LayoutCentered>{children}</LayoutCentered>
          </Providers>
        </div>
        <TailwindScreen />
      </body>
    </html>
  );
}

function TailwindScreen() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-16 left-5 z-99999 flex size-9 items-center justify-center rounded-full bg-[#282828] text-xs font-bold text-[#fff] uppercase inset-ring-1 inset-ring-current/15 dark:bg-black">
      <div className="sm:hidden">-</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
