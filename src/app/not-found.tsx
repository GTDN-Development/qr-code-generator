import { ButtonLink } from "@/components/button";
import { Heading } from "@/components/heading";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-prose flex-col items-center justify-center py-28 text-center">
      <p className="text-primary-text text-base font-medium uppercase">404</p>
      <Heading as={"h1"} size="5xl" className="text-text-emphasized">
        Stránka nenalezena
      </Heading>
      <p className="mt-4 text-base font-normal">
        Stránka kterou hledáte neexistuje nebo byla přesunuta.
      </p>
      <ButtonLink href="/" className="mt-8">
        Přejít na hlavní stránku &rarr;
      </ButtonLink>
    </div>
  );
}
