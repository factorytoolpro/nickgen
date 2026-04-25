import GameGenerator from "./components/GameGenerator";
import { GAMES } from "./data/games";

const game = GAMES.fortnite;

export const metadata = {
  title: "Générateur de Pseudo Fortnite Gratuit",
  description: "Génère des pseudos Fortnite uniques en 1 clic : Sweaty, OG, Funny, Aesthetic, Tryhard, Badass. Mode Battle, partage social, 100% gratuit et sans inscription.",
  keywords: ["pseudo fortnite", "générateur pseudo fortnite", "fortnite name generator", "sweaty fortnite names", "og fortnite pseudo", "nom fortnite gratuit"],
  alternates: { canonical: "https://nickgen.gg" },
  openGraph: {
    title: "Générateur de Pseudo Fortnite Gratuit — NickGen",
    description: "Génère des pseudos Fortnite uniques : Sweaty, OG, Funny, Aesthetic, Tryhard, Badass.",
    url: "https://nickgen.gg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://nickgen.gg/#app",
      "name": "NickGen — Générateur de Pseudo Fortnite",
      "url": "https://nickgen.gg",
      "description": "Générateur de pseudos gaming gratuit pour Fortnite et autres jeux",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": game.faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GameGenerator game={game} />
    </>
  );
}
