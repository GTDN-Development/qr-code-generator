import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroActions, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";
import {
  CuboidIcon,
  PaletteIcon,
  MailIcon,
  GlobeIcon,
  ShieldIcon,
  MonitorIcon,
  ShareIcon,
  BrainCircuitIcon,
  NavigationIcon,
  MapPinIcon,
  SearchIcon,
  WrenchIcon,
} from "lucide-react";
import PilsenImage from "@/assets/images/pilsen.jpg";
import CubeSvg from "@/assets/svgs/cube.svg";
import Image from "next/image";
import type { Metadata } from "next/types";
import { Heading } from "@/components/heading";

export const metadata: Metadata = {
  title: "Starter template",
  description: "Základní projekt s výchozím nastavením pro založení nového projektu.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Hero>
        <HeroContent>
          <CubeSvg className="h-auto w-20 dark:invert" />
          <HeroTitle>Starter template</HeroTitle>
          <HeroDescription>
            Základní projekt s výchozím nastavením pro založení nového projektu.
          </HeroDescription>
          <HeroActions>
            <ButtonLink href="/components" variant="dark/white">
              <CuboidIcon aria-hidden="true" />
              Seznam komponent
            </ButtonLink>
            <ButtonLink href="/colors" variant="secondary">
              <PaletteIcon aria-hidden="true" />
              Barvy projektu
            </ButtonLink>
          </HeroActions>
        </HeroContent>
      </Hero>

      {/*Content*/}
      <div className="pb-24">
        {/* Section with list of features */}
        <Container
          as="section"
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-default border-border-default flex flex-col gap-4 border p-4"
            >
              <feature.icon aria-hidden="true" />
              <Heading as="h3" size="base" className="text-text-emphasized">
                {feature.title}
              </Heading>
              <p className="text-text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </Container>

        {/* Example of how working with images */}
        <Container as="section" className="mt-24 flex flex-col items-center justify-center gap-6">
          <Heading as="h2" size="xl" className="text-text-emphasized">
            Příklad, jak pracovat s obrázky
          </Heading>
          <div className="aspect-video w-full overflow-clip rounded-2xl">
            <Image
              src={PilsenImage.src}
              alt="Divadlo J. K. Tyla Plzeň"
              width={PilsenImage.width}
              height={PilsenImage.height}
              className="h-auto w-full object-cover"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

const features = [
  {
    title: "Základní komponenty",
    description:
      "Alert, Avatar, Button, Badge, Forms, Dialog, Heading, Layout, Navbar, Spinner a další...",
    icon: CuboidIcon,
  },
  {
    title: "Systém barev a dark mode",
    description:
      "Systém barev pro tvorbu barevných motivů a připravená implementace dark mode pomocí next-themes.",
    icon: PaletteIcon,
  },
  {
    title: "Kontaktní formulář",
    description:
      "Připravený formulář s odesíláním přes Next.js API routes a s klientskou validací pomocí React Hook Form a schématem Zod.",
    icon: MailIcon,
  },
  {
    title: "WordPress blog",
    description: "Implementovaný jednoduchý a základní WordPress blog s připojením přes API.",
    icon: GlobeIcon,
  },
  {
    title: "GDPR podmínky",
    description: "Připravené podmínky GDPR a komponenty pro zpracování osobních údajů.",
    icon: ShieldIcon,
  },
  {
    title: "Dev komponenty a barvy",
    description:
      "Prezentační stránky komponent a barev, které se generují pouze pro dev prostředí a do produkce se neshipují.",
    icon: MonitorIcon,
  },
  {
    title: "Sociální sítě",
    description:
      "Připravené renderování sociálních sítí pomocí komponent pro odkazy a brand ikony.",
    icon: ShareIcon,
  },
  {
    title: "AI Agent pravidla",
    description:
      "Přidána základní pravidla pro správu projektu s AI agenty podle AGENTS.md praktik.",
    icon: BrainCircuitIcon,
  },
  {
    title: "Dynamická navigace",
    description:
      "Navigace je založená na jednom source objektu a dynamicky generovaná do navigační lišty, patičky a mobilního menu. Podporuje i sub-navigaci se zanořenými položkami.",
    icon: NavigationIcon,
  },
  {
    title: "SEO",
    description:
      "Metadata a SEO optimalizace pro všechny stránky s dynamickým generováním titulků a popisků u blogu.",
    icon: SearchIcon,
  },
  {
    title: "Google Maps",
    description: "Komponenta pro vkládání Google Maps s nastavitelnou adresou, zoomem a rozměry.",
    icon: MapPinIcon,
  },
  {
    title: "Utility funkce",
    description:
      "Kolekce často používaných utility funkcí pro práci s datumy, poli, React children a dalšími běžnými operacemi.",
    icon: WrenchIcon,
  },
];
