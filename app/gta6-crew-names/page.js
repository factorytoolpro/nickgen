import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { GTA6_PAGES } from "../data/gta6-seo";

const config = GTA6_PAGES["gta6-crew-names"];
export const metadata = config.seo;

export default function Gta6CrewNamesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faq.map((i) => ({ "@type": "Question", "name": i.q, "acceptedAnswer": { "@type": "Answer", "text": i.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator game={GAMES.gta6} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} sections={config.sections} />
    </>
  );
}
