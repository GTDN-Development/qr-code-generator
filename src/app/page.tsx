import { Container } from "@/components/container";
import { GenerateQRCode } from "@/components/generate-qr-code";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes from text or URLs and download as SVG or PNG.",
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
          <HeroTitle>Generate QR Codes</HeroTitle>
          <HeroDescription>
            Generate QR codes from text or URLs and download as SVG or PNG.
          </HeroDescription>
        </HeroContent>
      </Hero>

      {/* QR Code Generator */}
      <Container className="flex justify-center pb-24">
        <GenerateQRCode />
      </Container>
    </>
  );
}
