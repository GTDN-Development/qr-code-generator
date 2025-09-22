type Locale = "cs" | "en";

type GdprPolicyStatementProps = React.ComponentProps<"div"> & {
  /** Company information */
  company: {
    name: string;
    address: string;
    id: string;
    domain: string;
  };
  /** Contact information */
  contact: {
    email: string;
    phone?: string;
  };
  /** Types of personal data collected */
  dataCollected: string[];
  /** Purposes for which data is processed */
  dataPurposes: string[];
  /** Period for which data is retained */
  dataRetention: string;
  /** Third-party data processors who may have access to the data */
  thirdParties?: {
    name: string;
    service: string;
    country?: string;
  }[];
  /** Effective date of the document */
  effectiveDate?: string;
  /** Data subject rights (if not provided, default rights will be shown) */
  subjectRights?: string[];
  /** Any additional information or paragraphs */
  additionalInfo?: React.ReactNode;
  /** Language of the statement ("cs" or "en") */
  locale?: Locale;
};

const translations = {
  cs: {
    effectiveFrom: "Účinné od:",
    principles:
      'Tyto zásady zpracování osobních údajů (dále jen "Zásady") popisují způsob, jakým společnost',
    companyId: "IČO:",
    headquartered: "se sídlem",
    controller:
      '(dále také "Správce"), zpracovává a chrání osobní údaje svých zákazníků, partnerů a dalších osob (dále jen "subjekty údajů").',
    websiteInfo: "Tyto Zásady se vztahují na zpracování osobních údajů na webových stránkách",
    dataCollectedTitle: "1. Shromažďované osobní údaje",
    dataCollectedDesc:
      "Správce v souladu s platnou legislativou shromažďuje a zpracovává zejména následující osobní údaje:",
    purposesTitle: "2. Účely zpracování osobních údajů",
    purposesDesc:
      "Osobní údaje jsou zpracovávány vždy na základě oprávněného důvodu (např. plnění smlouvy, souhlas subjektu údajů, zákonná povinnost) a zejména pro tyto účely:",
    retentionTitle: "3. Doba uchování osobních údajů",
    retentionDesc:
      "Osobní údaje uchováváme po dobu nezbytně nutnou k dosažení účelu jejich zpracování, nejdéle však po dobu",
    additionalInfoTitle: "4. Další informace",
    rightsTitle: "Práva subjektů údajů",
    rightsDesc:
      "Subjekty údajů mají podle obecného nařízení o ochraně osobních údajů (GDPR) následující práva:",
    defaultRights:
      "Subjekty údajů mají v souladu s GDPR právo na přístup k osobním údajům, právo na opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování. Dále mohou kdykoli odvolat svůj souhlas se zpracováním osobních údajů, pokud je zpracování založeno na souhlasu.",
    contactTitle: "Kontakt pro uplatnění práv",
    contactDesc:
      "Pro uplatnění svých práv a pro další informace ohledně zpracování osobních údajů můžete Správce kontaktovat na e-mailové adrese:",
    contactPhone: "nebo na telefonním čísle:",
    complaintDesc:
      "Pokud se domníváte, že jsou vaše práva porušována, máte také právo podat stížnost u dozorového úřadu, kterým je v České republice",
    supervisoryAuthority: "Úřad pro ochranu osobních údajů",
    website: "www.uoou.cz",
    thirdPartiesTitle: "4. Poskytování osobních údajů třetím stranám",
    thirdPartiesDesc:
      "Vaše osobní údaje mohou být zpřístupněny následujícím zpracovatelům a třetím stranám:",
    thirdPartyService: "Poskytovaná služba:",
    thirdPartyCountry: "Země působení:",
  },
  en: {
    effectiveFrom: "Effective from:",
    principles:
      'This Personal Data Processing Policy (hereinafter referred to as the "Policy") describes how',
    companyId: "ID:",
    headquartered: "headquartered at",
    controller:
      '(hereinafter also referred to as the "Controller"), processes and protects personal data of its customers, partners, and other individuals (hereinafter referred to as "data subjects").',
    websiteInfo: "This Policy applies to the processing of personal data on the website",
    dataCollectedTitle: "1. Personal Data Collected",
    dataCollectedDesc:
      "The Controller, in accordance with applicable legislation, collects and processes the following personal data:",
    purposesTitle: "2. Purposes of Personal Data Processing",
    purposesDesc:
      "Personal data is processed always on a legitimate basis (e.g., contract performance, consent of the data subject, legal obligation) and particularly for these purposes:",
    retentionTitle: "3. Personal Data Retention Period",
    retentionDesc:
      "We retain personal data for the period necessary to achieve the purpose of their processing, but no longer than",
    additionalInfoTitle: "4. Additional Information",
    rightsTitle: "Rights of Data Subjects",
    rightsDesc:
      "Data subjects have the following rights under the General Data Protection Regulation (GDPR):",
    defaultRights:
      "In accordance with GDPR, data subjects have the right to access personal data, the right to rectification, erasure, restriction of processing, data portability, and the right to object to processing. They may also withdraw their consent to the processing of personal data at any time if the processing is based on consent.",
    contactTitle: "Contact for Exercising Rights",
    contactDesc:
      "To exercise your rights and for further information regarding the processing of personal data, you can contact the Controller at the email address:",
    contactPhone: "or by phone:",
    complaintDesc:
      "If you believe that your rights are being violated, you also have the right to file a complaint with the supervisory authority, which in the Czech Republic is",
    supervisoryAuthority: "The Office for Personal Data Protection",
    website: "www.uoou.cz",
    thirdPartiesTitle: "4. Sharing Personal Data with Third Parties",
    thirdPartiesDesc:
      "Your personal data may be accessed by the following processors and third parties:",
    thirdPartyService: "Service provided:",
    thirdPartyCountry: "Country of operation:",
  },
};

export function GdprPolicyStatement({
  company,
  contact,
  dataCollected,
  dataPurposes,
  dataRetention,
  thirdParties = [],
  effectiveDate,
  subjectRights,
  additionalInfo,
  locale = "cs",
  ...props
}: GdprPolicyStatementProps) {
  const t = translations[locale];

  // Calculate section numbers based on whether additional info exists
  const hasThirdParties = thirdParties.length > 0;
  const additionalInfoSection = hasThirdParties ? 5 : 4;
  const rightsSection = hasThirdParties ? (additionalInfo ? 6 : 5) : additionalInfo ? 5 : 4;
  const contactSection = hasThirdParties ? (additionalInfo ? 7 : 6) : additionalInfo ? 6 : 5;

  return (
    <div {...props}>
      {effectiveDate && (
        <p className="text-sm opacity-60">
          {t.effectiveFrom} {effectiveDate}
        </p>
      )}

      <p>
        {t.principles} <strong>{company.name}</strong>
        {company.id && (
          <>
            {" "}
            ({t.companyId} {company.id})
          </>
        )}{" "}
        {t.headquartered} <strong>{company.address}</strong> {t.controller}
      </p>

      <p>
        {t.websiteInfo} <strong>{company.domain}</strong>.
      </p>

      <section>
        <h2>{t.dataCollectedTitle}</h2>
        <p>{t.dataCollectedDesc}</p>
        <ul>
          {dataCollected.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.purposesTitle}</h2>
        <p>{t.purposesDesc}</p>
        <ul>
          {dataPurposes.map((purpose, idx) => (
            <li key={idx}>{purpose}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.retentionTitle}</h2>
        <p>
          {t.retentionDesc} <strong>{dataRetention}</strong>.
        </p>
      </section>

      {hasThirdParties && (
        <section>
          <h2>{t.thirdPartiesTitle}</h2>
          <p>{t.thirdPartiesDesc}</p>
          <ul>
            {thirdParties.map((party, idx) => (
              <li key={idx}>
                <strong>{party.name}</strong> - {t.thirdPartyService} {party.service}
                {party.country && (
                  <span>
                    {", "} {t.thirdPartyCountry} {party.country}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {additionalInfo && (
        <section>
          <h2>
            {additionalInfoSection}. {t.additionalInfoTitle}
          </h2>
          <div>{additionalInfo}</div>
        </section>
      )}

      <section>
        <h2>
          {rightsSection}. {t.rightsTitle}
        </h2>
        {subjectRights && subjectRights.length > 0 ? (
          <>
            <p>{t.rightsDesc}</p>
            <ul>
              {subjectRights.map((right, i) => (
                <li key={i}>{right}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{t.defaultRights}</p>
        )}
      </section>

      <section>
        <h2>
          {contactSection}. {t.contactTitle}
        </h2>
        <p>
          {t.contactDesc} <strong>{contact.email}</strong>
          {contact.phone && (
            <>
              {" "}
              {t.contactPhone} <strong>{contact.phone}</strong>
            </>
          )}
          .
        </p>
        <p>
          {t.complaintDesc} <strong>{t.supervisoryAuthority}</strong> ({t.website}).
        </p>
      </section>
    </div>
  );
}
