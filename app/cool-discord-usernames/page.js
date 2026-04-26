import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { DISCORD_PAGES } from "../data/discord-seo";

const config = DISCORD_PAGES["cool-discord-usernames"];
export const metadata = config.seo;

export default function CoolDiscordUsernamesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faq.map((i) => ({ "@type": "Question", "name": i.q, "acceptedAnswer": { "@type": "Answer", "text": i.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator game={GAMES.discord} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} seoContent={config.seoContent} />
    </>
  );
}
