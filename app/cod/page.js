import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.cod;

export const metadata = {
  title: "Générateur de Pseudo Call of Duty Gratuit",
  description: "Génère des pseudos Call of Duty uniques pour Warzone et Modern Warfare : Operator, Ghost, Tactical, Prestige. Callsigns militaires stylés. Gratuit.",
  keywords: ["pseudo call of duty", "générateur pseudo cod", "call of duty name generator", "warzone name generator", "cod pseudo", "pseudo ghost cod", "pseudo warzone", "activision name"],
  alternates: { canonical: "https://nickgen.gg/cod" },
  openGraph: {
    title: "Générateur de Pseudo Call of Duty Gratuit — NickGen",
    description: "Génère des pseudos COD uniques pour Warzone et MW : Operator, Ghost, Warzone, Tactical, Prestige.",
    url: "https://nickgen.gg/cod",
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

export default function CodPage() {
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
