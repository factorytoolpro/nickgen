import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

const game = GAMES.minecraft;

export const metadata = {
  title: "Générateur de Pseudo Minecraft Gratuit",
  description: "Génère des pseudos Minecraft originaux pour Java et Bedrock : Survival, Creative, PvP, Redstone, Builder. Pseudos entre 3 et 16 caractères. Gratuit.",
  keywords: ["pseudo minecraft", "générateur pseudo minecraft", "minecraft username generator", "nom minecraft", "pseudo java minecraft", "pseudo bedrock", "minecraft name ideas"],
  alternates: { canonical: "https://nickgen.gg/minecraft" },
  openGraph: {
    title: "Générateur de Pseudo Minecraft Gratuit — NickGen",
    description: "Génère des pseudos Minecraft originaux pour Java et Bedrock : Survival, Creative, PvP, Redstone, Builder.",
    url: "https://nickgen.gg/minecraft",
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

export default function MinecraftPage() {
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
