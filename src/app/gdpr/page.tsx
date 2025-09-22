import { Container } from "@/components/container";
import { GdprPolicyStatement } from "@/components/gdpr/gdpr-statement";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";
import type { Metadata } from "next/types";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Zpracování osobních údajů",
  description: "Jak zpracováváme vaše osobní údaje dle nařízení GDPR",
  robots: {
    index: true,
    follow: true,
  },
};

// Výchozí typy shromažďovaných údajů
const dataCollected = [
  "Jméno a kontaktní údaje (e-mail, telefonní číslo)",
  "Přihlašovací údaje k účtu (uživatelské jméno, heslo)",
  "IP adresa a informace o prohlížeči",
  "Data o používání a metriky interakce se stránkami",
  "Platební informace (pokud je to relevantní)",
];

// Výchozí účely zpracování údajů
const dataPurposes = [
  "Poskytování a udržování našich služeb",
  "Informování o změnách našich služeb",
  "Umožnění účasti na interaktivních funkcích",
  "Poskytování zákaznické podpory",
  "Shromažďování analýz nebo cenných informací pro zlepšení našich služeb",
  "Odhalování, prevence a řešení technických problémů",
];

// Výchozí doba uchovávání údajů
const dataRetention = "3 roky od poslední interakce s našimi službami";

// Výchozí třetí strany zpracovávající údaje
const thirdParties = [
  {
    name: "FBLS Tech s.r.o.",
    service: "Technické služby a vývoj",
    country: "Česká republika",
  },
  {
    name: "Vercel",
    service: "Cloudový hosting a nasazení",
    country: "Spojené státy americké",
  },
  {
    name: "Amazon Web Services (AWS)",
    service: "Cloudový hosting a úložiště",
    country: "Spojené státy americké",
  },
  {
    name: "Google Cloud Platform",
    service: "Analytické a cloudové služby",
    country: "Spojené státy americké",
  },
  {
    name: "SendGrid",
    service: "Služby doručování e-mailů",
    country: "Spojené státy americké",
  },
  {
    name: "Mailchimp",
    service: "E-mailové marketingové služby",
    country: "Spojené státy americké",
  },
  {
    name: "Stripe",
    service: "Zpracování plateb",
    country: "Spojené státy americké",
  },
];

// Výchozí práva subjektů údajů
const subjectRights = [
  "Právo na přístup k vašim osobním údajům",
  "Právo na opravu nepřesných údajů",
  "Právo na výmaz ('právo být zapomenut')",
  "Právo na omezení zpracování",
  "Právo na přenositelnost údajů",
  "Právo vznést námitku proti zpracování",
  "Práva týkající se automatizovaného rozhodování a profilování",
];

// Výchozí datum účinnosti
const effectiveDate = "1. ledna 2025";

export default function Page() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>GDPR</HeroTitle>
          <HeroDescription>Zpracování osobních údajů</HeroDescription>
        </HeroContent>
      </Hero>

      <Container size="sm" className="prose pb-24">
        <GdprPolicyStatement
          company={{
            name: company.name,
            address: company.address,
            id: company.id,
            domain: company.domain,
          }}
          contact={{
            email: company.contact.email,
            phone: company.contact.phone,
          }}
          dataCollected={dataCollected}
          dataPurposes={dataPurposes}
          dataRetention={dataRetention}
          thirdParties={thirdParties}
          effectiveDate={effectiveDate}
          subjectRights={subjectRights}
          locale="cs"
        />
      </Container>
    </>
  );
}
