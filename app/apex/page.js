import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.apex;

export const metadata = {
  title: "Générateur de Pseudo Apex Legends Gratuit",
  description: "Génère des pseudos Apex Legends uniques pour ton compte EA : Legend, Aggressive, Support, Recon, Wraith. Callsigns parfaits pour Apex. Gratuit.",
  keywords: ["pseudo apex legends", "générateur pseudo apex", "apex legends name generator", "ea name generator", "nom apex legends", "pseudo wraith apex", "apex predator name"],
  alternates: { canonical: "https://nickgen.gg/apex" },
  openGraph: {
    title: "Générateur de Pseudo Apex Legends Gratuit — NickGen",
    description: "Génère des pseudos Apex Legends uniques : Legend, Aggressive, Support, Recon, Wraith.",
    url: "https://nickgen.gg/apex",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": game.faq.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

export default function ApexPage() {
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
