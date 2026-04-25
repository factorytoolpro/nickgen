import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.gta6;

export const metadata = {
  title: "Générateur de Pseudo GTA 6 Gratuit",
  description: "Génère des pseudos GTA 6 uniques pour GTA Online : Hustler, Criminal, Outlaw, Street, Kingpin. Callsigns style Vice City pour le lancement de GTA VI. Gratuit.",
  keywords: ["pseudo gta 6", "gta 6 name generator", "pseudo gta online", "gta vi username", "nom gta 6", "vice city name", "gta 6 pseudo", "gta online pseudo 2025"],
  alternates: { canonical: "https://nickgen.gg/gta6" },
  openGraph: {
    title: "Générateur de Pseudo GTA 6 Gratuit — NickGen",
    description: "Génère des pseudos GTA 6 uniques pour GTA Online : Hustler, Criminal, Outlaw, Street, Kingpin. Style Vice City.",
    url: "https://nickgen.gg/gta6",
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

export default function Gta6Page() {
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
