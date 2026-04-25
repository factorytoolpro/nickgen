import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { VALORANT_PAGES } from "../data/valorant-seo";

const config = VALORANT_PAGES["sweaty-valorant-names"];
export const metadata = config.seo;

export default function SweatyValorantNamesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faq.map((i) => ({ "@type": "Question", "name": i.q, "acceptedAnswer": { "@type": "Answer", "text": i.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><GameGenerator game={GAMES.valorant} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} /></>);
}
