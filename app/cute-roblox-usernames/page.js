import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { ROBLOX_PAGES } from "../data/roblox-seo";

const config = ROBLOX_PAGES["cute-roblox-usernames"];

export const metadata = config.seo;

export default function CuteRobloxUsernamesPage() {
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
      <GameGenerator game={GAMES.roblox} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} />
    </>
  );
}
