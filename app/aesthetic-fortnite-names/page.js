import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { FORTNITE_PAGES } from "../data/fortnite-seo";

const config = FORTNITE_PAGES["aesthetic-fortnite-names"];

export const metadata = config.seo;

export default function AestheticFortniteNamesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator game={GAMES.fortnite} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} />
    </>
  );
}
