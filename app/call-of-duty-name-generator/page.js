import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";

export const metadata = {
  title: "Call of Duty Name Generator — Générateur de Pseudo COD Gratuit",
  description: "Génère des pseudos Call of Duty uniques pour Warzone et Modern Warfare : Operator, Ghost, Warzone, Tactical, Prestige. Callsigns militaires stylés. Gratuit.",
  keywords: ["call of duty name generator", "cod name generator", "warzone username generator", "call of duty pseudo generator", "cod name ideas", "générateur pseudo cod"],
  alternates: { canonical: "https://nickgen-kappa.vercel.app/call-of-duty-name-generator" },
  openGraph: {
    title: "Call of Duty Name Generator — NickGen",
    description: "Génère des pseudos COD uniques pour Warzone et MW : Operator, Ghost, Warzone, Tactical, Prestige.",
    url: "https://nickgen-kappa.vercel.app/call-of-duty-name-generator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Call of Duty Name Generator — NickGen",
      "url": "https://nickgen-kappa.vercel.app/call-of-duty-name-generator",
      "description": "Générateur de pseudos gratuit pour Call of Duty et Warzone",
      "applicationCategory": "GameApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment générer un pseudo Call of Duty unique ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sélectionne un style (Operator, Ghost, Warzone, Tactical ou Prestige), configure la longueur et clique sur Generate Names. NickGen génère 12 callsigns COD uniques. Utilise le mode Battle pour comparer deux options avant de choisir." }
        },
        {
          "@type": "Question",
          "name": "Comment changer son pseudo Call of Duty ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Connecte-toi sur s.activision.com, accède à ton profil et modifie ton Display Name. Le changement est gratuit une fois par mois. Les pseudos COD générés par NickGen respectent le format Activision." }
        },
        {
          "@type": "Question",
          "name": "Les pseudos COD peuvent-ils contenir des clan tags ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, Warzone supporte les clan tags entre crochets comme [TAG] devant le pseudo. Le style Tactical de NickGen génère des préfixes courts (Alpha_, Bravo_, Delta_) qui fonctionnent parfaitement comme clan tags." }
        },
      ],
    },
  ],
};

export default function CodNameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameGenerator
        game={GAMES.cod}
        intro={{
          h1: "Call of Duty Name Generator",
          text: "Génère des pseudos Call of Duty uniques avec notre générateur gratuit. NickGen propose 5 styles inspirés de l'univers COD — Operator, Ghost, Warzone, Tactical et Prestige — pour créer le callsign militaire parfait pour Warzone et Modern Warfare. Filtre par longueur et partage ton pseudo sur Discord, Twitter ou WhatsApp.",
        }}
        seoContent={{
          sections: [
            {
              heading: "Call of Duty name generator : créer son callsign militaire",
              text: "Sur Call of Duty Warzone et Modern Warfare, ton Display Name Activision est visible dans chaque kill feed, tableau de scores et écran de victoire. Un callsign COD efficace doit être intimidant, mémorable et cohérent avec l'univers militaire du jeu. NickGen génère des pseudos dans 5 styles directement inspirés de la saga — des callsigns d'opérateurs légendaires comme Ghost aux vétérans Prestige en passant par les joueurs Warzone orientés victoires.",
            },
            {
              heading: "Les styles de pseudos Call of Duty les plus populaires",
              text: "La communauté COD a développé des conventions de nommage bien distinctes selon le mode de jeu :",
              list: [
                "Operator — codes militaires avec grades (Sgt_, Lt_, Col_) et numéros d'unité (_141, _Six)",
                "Ghost — pseudos sombres et stealth (Dark_Phantom, Silent_Shadow) — inspirés de Simon Riley",
                "Warzone — callsigns battle royale (_WZ, _Dub, Drop_) — optimisés pour les sessions",
                "Tactical — alphabet NATO (Alpha, Bravo, Delta, Echo) — pour les joueurs stratèges",
                "Prestige — pseudos de vétérans (_P10, Diamond_, Gold_) — pour afficher son niveau",
              ],
            },
            {
              level: 3,
              heading: "Changer son pseudo COD et utiliser les clan tags",
              text: "Ton pseudo COD est ton Activision Display Name, modifiable gratuitement une fois par mois sur s.activision.com. Dans Warzone, un clan tag entre crochets ([TAG]) peut précéder ton pseudo pour identifier ton équipe. Les pseudos COD générés par NickGen respectent le format Activision. Le style Tactical produit des préfixes courts (Alpha_, Delta_, Bravo_) qui fonctionnent parfaitement comme clan tags — une façon d'allier identité individuelle et identité de team.",
            },
          ],
        }}
      />
    </>
  );
}
