import { Alert, AlertContent, AlertInfoIcon, AlertTitle } from "@/components/alert";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Hero, HeroContent, HeroTitle } from "@/components/hero";
import { ContactForm } from "@/components/contact/contact-form";
import type { Metadata } from "next/types";
import { GoogleMap } from "@/components/google-map";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Stránka kontaktu",
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
          <HeroTitle>Kontaktní formulář</HeroTitle>
        </HeroContent>
      </Hero>

      {/*Content*/}
      <Container size="sm" className="space-y-10 pb-24">
        {/* Alert */}
        <Alert className="mt-6" variant="tertiary">
          <AlertInfoIcon />
          <AlertContent>
            <AlertTitle>Formulář lze odeslat až po správném vyplnění .env souboru</AlertTitle>
          </AlertContent>
        </Alert>

        {/* Contact form */}
        <Heading as="h2" size="2xl" className="text-text-emphasized">
          Kontaktní formulář
        </Heading>
        <ContactForm />

        {/* Google Map */}
        <Heading as="h2" size="2xl" className="text-text-emphasized">
          Google mapa
        </Heading>
        <GoogleMap address={company.address} width="100%" height="400px" zoom={15} />
      </Container>
    </>
  );
}
