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
        seoContent={{
          sections: [
            {
              heading: "Apex Legends name generator : trouver son callsign",
              text: "Dans Apex Legends, ton EA ID devient ton identité sur tous les serveurs — d'Olympus à Storm Point. Les meilleurs joueurs de la communauté comme Aceu, Hal ou ImperialHal ont construit leur marque autour de callsigns mémorables directement associés à leur style de jeu. NickGen génère des pseudos Apex dans 5 styles distincts inspirés des rôles et legends officiels du jeu, avec le mode Battle pour comparer deux options et l'historique pour garder tes favoris.",
            },
            {
              heading: "Choisir son pseudo Apex selon sa legend principale",
              text: "Le meilleur callsign Apex Legends est celui qui correspond à ta legend et ton rôle en équipe :",
              list: [
                "Legend — pseudos inspirés des legends iconiques (Wraith, Octane, Bloodhound, Seer)",
                "Aggressive — fragger et rusher (Rush_Flanker, Hunt_Blitz) — Octane, Revenant, Fuse",
                "Support — orienté team (Revive_Lifeline, Shield_Guardian) — Lifeline, Newcastle, Loba",
                "Recon — tracking et information (Scout_Radar, Track_Intel) — Bloodhound, Seer, Crypto",
                "Wraith — mystérieux et void (Phantom_Rift, Void_Shadow) — Wraith, Fade, Ash",
              ],
            },
            {
              level: 3,
              heading: "Apex Legends : règles et conseils pour changer son pseudo",
              text: "Ton pseudo Apex Legends correspond à ton EA ID. Il peut contenir de 3 à 16 caractères avec lettres, chiffres, espaces et certains caractères spéciaux. Le premier changement est gratuit dans les paramètres du jeu (Paramètres > Compte). Les suivants coûtent des Apex Coins. Un bon callsign Apex doit être court (8-12 car.), prononçable en vocal sur Discord et lié à ta legend principale pour créer une identité gaming cohérente sur toutes les plateformes.",
            },
          ],
        }}
      />
    </>
  );
}
