import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { DISCORD_PAGES } from "../data/discord-seo";

const config = DISCORD_PAGES["discord-username-generator"];

export const metadata = config.seo;

export default function DiscordUsernameGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Discord Username Generator — NickGen",
        "url": "https://nickgen.xyz/discord-username-generator",
        "description": "Générateur de usernames Discord gratuit — 5 styles",
        "applicationCategory": "GameApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      },
      {
        "@type": "FAQPage",
        "mainEntity": config.faq.map((i) => ({
          "@type": "Question",
          "name": i.q,
          "acceptedAnswer": { "@type": "Answer", "text": i.a },
        })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator
        game={GAMES.discord}
        preSelectedStyle={config.preSelectedStyle}
        intro={config.intro}
        faqOverride={config.faq}
        seoContent={config.seoContent}
      />
    </>
  );
}
