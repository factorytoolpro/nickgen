import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { TIKTOK_PAGES } from "../data/tiktok-seo";

const config = TIKTOK_PAGES["funny-tiktok-usernames"];
export const metadata = config.seo;

export default function FunnyTikTokUsernamesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faq.map((i) => ({ "@type": "Question", "name": i.q, "acceptedAnswer": { "@type": "Answer", "text": i.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator game={GAMES.tiktok} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} seoContent={config.seoContent} />
    </>
  );
}
