import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.roblox;

export const metadata = {
  title: "Générateur de Pseudo Roblox Gratuit",
  description: "Génère des pseudos Roblox uniques : Cute, Cool, Funny, Aesthetic, ProPlayer. Pseudos de 3 à 20 caractères, compatibles avec les règles Roblox. Gratuit.",
  keywords: ["pseudo roblox", "générateur pseudo roblox", "roblox username generator", "nom roblox", "cute roblox names", "cool roblox usernames", "roblox name ideas 2025"],
  alternates: { canonical: "https://nickgen.gg/roblox" },
  openGraph: {
    title: "Générateur de Pseudo Roblox Gratuit — NickGen",
    description: "Génère des pseudos Roblox uniques : Cute, Cool, Funny, Aesthetic, ProPlayer. Compatibles avec les règles de la plateforme.",
    url: "https://nickgen.gg/roblox",
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

export default function RobloxPage() {
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
