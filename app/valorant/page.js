import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.valorant;

export const metadata = {
  title: "Générateur de Pseudo Valorant Gratuit",
  description: "Génère des pseudos Valorant uniques pour ton Riot ID : Agent, Duelist, Controller, Initiator, Sentinel. Noms tactiques et stylés. Gratuit et sans inscription.",
  keywords: ["pseudo valorant", "générateur pseudo valorant", "valorant name generator", "riot id generator", "nom valorant", "pseudo agent valorant", "duelist name valorant"],
  alternates: { canonical: "https://nickgen.gg/valorant" },
  openGraph: {
    title: "Générateur de Pseudo Valorant Gratuit — NickGen",
    description: "Génère des pseudos Valorant uniques pour ton Riot ID : Agent, Duelist, Controller, Initiator, Sentinel.",
    url: "https://nickgen.gg/valorant",
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

export default function ValorantPage() {
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
