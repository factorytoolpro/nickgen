import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { TIKTOK_PAGES } from "../data/tiktok-seo";

const config = TIKTOK_PAGES["tiktok-username-generator"];

export const metadata = config.seo;

export default function TikTokUsernameGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "TikTok Username Generator — NickGen",
        "url": "https://nickgen.xyz/tiktok-username-generator",
        "description": "Générateur de usernames TikTok gratuit — 5 styles",
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
        game={GAMES.tiktok}
        preSelectedStyle={config.preSelectedStyle}
        intro={config.intro}
        faqOverride={config.faq}
        seoContent={config.seoContent}
      />
    </>
  );
}
