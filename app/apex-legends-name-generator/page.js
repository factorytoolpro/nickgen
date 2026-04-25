import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

export const metadata = {
  title: "Apex Legends Name Generator — Générateur de Pseudo Apex Gratuit",
  description: "Génère des pseudos Apex Legends uniques pour ton compte EA : Legend, Aggressive, Support, Recon, Wraith. Callsigns parfaits pour Apex. 100% gratuit.",
  keywords: ["apex legends name generator", "apex name generator", "apex legends username generator", "apex pseudo generator", "apex legends name ideas", "générateur pseudo apex"],
  alternates: { canonical: "https://nickgen.gg/apex-legends-name-generator" },
  openGraph: {
    title: "Apex Legends Name Generator — NickGen",
    description: "Génère des pseudos Apex Legends uniques : Legend, Aggressive, Support, Recon, Wraith.",
    url: "https://nickgen.gg/apex-legends-name-generator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Apex Legends Name Generator — NickGen",
      "url": "https://nickgen.gg/apex-legends-name-generator",
      "description": "Générateur de pseudos gratuit pour Apex Legends",
      "applicationCategory": "GameApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment générer un pseudo Apex Legends unique ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sélectionne un style (Legend, Aggressive, Support, Recon ou Wraith), configure la longueur et clique sur Generate Names. NickGen génère 12 callsigns Apex uniques instantanément. Copie ton préféré ou utilise le mode Battle." }
        },
        {
          "@type": "Question",
          "name": "Quelle est la longueur d'un pseudo Apex Legends ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Les pseudos Apex Legends (EA ID) peuvent contenir de 3 à 16 caractères. Letttres, chiffres, espaces et certains caractères spéciaux sont acceptés. NickGen propose des filtres Short, Medium et Long pour cibler la bonne plage." }
        },
        {
          "@type": "Question",
          "name": "Comment changer son pseudo Apex Legends ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dans Apex, va dans Paramètres > Compte > Modifier le nom d'utilisateur. Le premier changement est gratuit. Les suivants coûtent des Apex Coins. Choisis bien avec NickGen avant de valider." }
        },
      ],
    },
  ],
};

export default function ApexNameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator
        game={GAMES.apex}
        intro={{
          h1: "Apex Legends Name Generator",
          text: "Génère des pseudos Apex Legends uniques avec notre générateur gratuit. NickGen propose 5 styles inspirés des rôles et legends du jeu — Legend, Aggressive, Support, Recon et Wraith — pour créer le callsign parfait adapté à ta legend principale. Filtre par longueur, active les symboles et partage ton pseudo directement sur Discord ou Twitter.",
        }}
      />
    </>
  );
}
