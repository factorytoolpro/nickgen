const BASE = "https://nickgen-kappa.vercel.app";

export const MINECRAFT_PAGES = {

  "minecraft-username-generator": {
    preSelectedStyle: "Survival",
    seo: {
      title: "Minecraft Username Generator — Générateur de Pseudo Minecraft Gratuit",
      description: "Le meilleur Minecraft username generator pour Java et Bedrock. 5 styles : Survival, Creative, PvP, Redstone, Builder. Génère ton pseudo Minecraft en 1 clic. Gratuit.",
      keywords: ["minecraft username generator", "minecraft name generator", "random minecraft username", "générateur pseudo minecraft", "minecraft username ideas generator", "minecraft name creator"],
      alternates: { canonical: `${BASE}/minecraft-username-generator` },
      openGraph: { title: "Minecraft Username Generator — NickGen", description: "Le meilleur Minecraft username generator pour Java et Bedrock. 5 styles.", url: `${BASE}/minecraft-username-generator` },
    },
    intro: {
      h1: "Minecraft Username Generator",
      text: "Génère des pseudos Minecraft uniques pour Java et Bedrock Edition avec notre générateur gratuit. Le Minecraft username generator de NickGen propose 5 styles — Survival, Creative, PvP, Redstone et Builder — pour créer des noms entre 3 et 16 caractères (lettres, chiffres et underscores uniquement). Trouve l'identité parfaite pour tes serveurs et tes aventures.",
    },
    seoContent: {
      sections: [
        {
          heading: "Trouver un pseudo Minecraft disponible sur Java et Bedrock",
          text: "Minecraft est l'un des jeux les plus anciens encore actifs — et ça se ressent dans la rareté des pseudos disponibles. Des millions de comptes créés depuis 2009 ont absorbé la majorité des noms courts et évidents. En 2025, la stratégie gagnante pour trouver un bon Minecraft username libre passe par la créativité : combiner un style de jeu (PvP, Survival, Redstone) avec un mot inattendu et un nombre discret. NickGen génère ces combinaisons originales dans 5 styles adaptés au gameplay Minecraft.",
        },
        {
          heading: "Java Edition vs Bedrock : les différences pour ton pseudo",
          text: "Les règles de pseudos varient selon la version de Minecraft que tu joues :",
          list: [
            "Java Edition — 3-16 caractères, lettres/chiffres/underscores uniquement, compte Microsoft obligatoire",
            "Bedrock/Xbox — Gamertag Xbox, 3-12 caractères, accepte les espaces et plus de symboles",
            "Unicité — la casse n'est pas distincte : 'Steve' et 'steve' ne peuvent coexister",
            "Changement Java — gratuit et immédiat sur minecraft.net, sans limite de fréquence",
            "Changement Bedrock — 1 changement gratuit sur Xbox, puis payant selon le compte",
          ],
        },
        {
          level: 3,
          heading: "Conventions de nommage par type de joueur Minecraft",
          text: "Chaque profil de joueur Minecraft a ses propres codes. Les compétitifs PvP (Hypixel, SkyWars, BedWars) préfèrent des pseudos courts avec préfixes xX_ ou God_. Les créateurs et builders optent pour des noms évocateurs (Master_Builder, Grand_Architect). Les joueurs SMP choisissent des pseudos narratifs et détendus. Le style Redstone est le moins exploité et donc statistiquement le plus facile à trouver disponible — une aubaine pour les joueurs techniques.",
        },
      ],
    },
    faq: [
      { q: "Comment fonctionne le Minecraft username generator de NickGen ?", a: "Sélectionne un style selon ton type de jeu (Survival pour l'exploration, PvP pour le combat, Creative ou Builder pour la construction, Redstone pour la technique), choisis la longueur et génère 12 pseudos Minecraft instantanément. Tous les pseudos respectent les règles Minecraft (3-16 car., lettres/chiffres/underscores)." },
      { q: "Les pseudos générés fonctionnent-ils sur Java ET Bedrock ?", a: "Oui, les pseudos Minecraft générés par NickGen respectent les contraintes communes aux deux éditions (3-16 caractères, caractères alphanumériques et underscores). Note que Java utilise un compte Microsoft unique, tandis que Bedrock permet des Gamertags Xbox avec plus de caractères spéciaux." },
      { q: "Comment vérifier si un Minecraft username est disponible ?", a: "Après avoir généré ton pseudo avec NickGen, connecte-toi sur minecraft.net avec ton compte Microsoft et va dans les paramètres de profil pour tenter de changer ton nom. Le système indiquera immédiatement si le pseudo est disponible ou déjà pris." },
      { q: "Combien coûte le changement de pseudo Minecraft ?", a: "Changer son Minecraft username est gratuit. Connecte-toi sur minecraft.net, accède à ton profil Microsoft et modifie ton nom de joueur. Le changement prend effet immédiatement sur les serveurs Java. Il n'y a aucune limite au nombre de changements." },
      { q: "Quelle est la longueur idéale pour un Minecraft username ?", a: "Un Minecraft username idéal fait entre 8 et 14 caractères : assez court pour être mémorable et affiché correctement en jeu, assez long pour avoir de meilleures chances d'être disponible. Les pseudos très courts (3-6 car.) sont presque tous pris depuis des années." },
    ],
  },

  "minecraft-usernames": {
    preSelectedStyle: "Survival",
    seo: {
      title: "Minecraft Usernames — Idées de Pseudos Minecraft Originaux",
      description: "Trouve des Minecraft usernames uniques pour Java et Bedrock. Les meilleures idées de pseudos Minecraft : Survival, PvP, Creative, Builder. Génère le tien gratuitement.",
      keywords: ["minecraft usernames", "minecraft username ideas", "good minecraft usernames", "best minecraft usernames", "minecraft username list", "unique minecraft usernames"],
      alternates: { canonical: `${BASE}/minecraft-usernames` },
      openGraph: { title: "Minecraft Usernames — Idées de Pseudos Originaux — NickGen", description: "Trouve des Minecraft usernames uniques pour Java et Bedrock.", url: `${BASE}/minecraft-usernames` },
    },
    intro: {
      h1: "Minecraft Usernames",
      text: "Trouver un Minecraft username original et disponible est de plus en plus difficile avec des dizaines de millions de joueurs actifs. NickGen génère des idées de Minecraft usernames créatifs dans 5 styles — Survival, Creative, PvP, Redstone et Builder — pour que tu te démarques sur les serveurs. Compatible Java Edition et Bedrock.",
    },
    faq: [
      { q: "Quelles sont les règles pour les Minecraft usernames ?", a: "Un Minecraft username doit faire entre 3 et 16 caractères. Seuls les lettres (A-Z, a-z), chiffres (0-9) et underscores (_) sont acceptés. Les espaces et symboles spéciaux ne sont pas autorisés. Le pseudo doit être unique sur toute la plateforme Minecraft Java — sur Bedrock, c'est ton Gamertag Xbox qui est utilisé." },
      { q: "Quels sont les meilleurs Minecraft usernames en 2025 ?", a: "Les meilleurs Minecraft usernames en 2025 se concentrent dans trois catégories : PvP (Dark_Warrior, Elite_Slayer, God_Fighter), Survival/Exploration (Wild_Explorer, Deep_Miner, Lost_Nomad) et Creative (Master_Builder, Grand_Architect, Epic_Creator). Les pseudos avec underscore au milieu sont particulièrement tendance." },
      { q: "Comment trouver un Minecraft username disponible ?", a: "La stratégie la plus efficace : utilise des combinaisons de deux mots avec underscore (ex: Dark_Pioneer, Wild_Circuit), ajoute un chiffre non évident (pas _1 ou _99 qui sont pris), ou combine un style rare (Redstone) avec un mot courant. NickGen génère ces combinaisons originales automatiquement." },
      { q: "Les anciens pseudos Minecraft deviennent-ils disponibles ?", a: "Oui, Mojang libère parfois des pseudos de comptes inactifs depuis de nombreuses années. Garde un œil sur les annonces Mojang. En attendant, NickGen génère des variations créatives de pseudos populaires qui ont de bonnes chances d'être disponibles dès maintenant." },
    ],
  },

  "cool-minecraft-usernames": {
    preSelectedStyle: "PvP",
    seo: {
      title: "Cool Minecraft Usernames — Les Meilleurs Pseudos Minecraft Cool",
      description: "Génère des cool Minecraft usernames uniques : Shadow, Warrior, Thunder, Apex. Les meilleurs pseudos Minecraft cool pour serveurs PvP et SMP. Gratuit.",
      keywords: ["cool minecraft usernames", "cool minecraft names", "best cool minecraft usernames", "minecraft cool username ideas", "epic minecraft usernames", "swag minecraft names"],
      alternates: { canonical: `${BASE}/cool-minecraft-usernames` },
      openGraph: { title: "Cool Minecraft Usernames — NickGen", description: "Génère des cool Minecraft usernames uniques : Shadow, Warrior, Thunder, Apex.", url: `${BASE}/cool-minecraft-usernames` },
    },
    intro: {
      h1: "Cool Minecraft Usernames",
      text: "Les cool Minecraft usernames imposent le respect dès l'entrée sur un serveur PvP ou une session SMP. Les meilleurs cool Minecraft names combinent des mots à fort impact (Warrior, Shadow, Thunder, Champion), des préfixes puissants (Dark_, God_, Elite_) et des suffixes distinctifs (_PvP, _GG, _Pro). Génère des cool Minecraft usernames uniques avec NickGen.",
    },
    faq: [
      { q: "Qu'est-ce qui rend un Minecraft username vraiment cool ?", a: "Un cool Minecraft username doit être mémorable, évoquer une image forte et être facile à lire dans le chat et les tableaux de score. Les mots qui fonctionnent le mieux : Shadow, Warrior, Apex, Thunder, Champion. Les préfixes Dark_, God_, Elite_ ou Ultra_ amplifient l'effet. Évite les underscores répétés qui rendent le pseudo illisible." },
      { q: "Les cool Minecraft usernames PvP sont-ils différents des autres ?", a: "Oui, les cool Minecraft usernames pour le PvP tendent vers des termes combatifs (Warrior, Fighter, Slayer, Champion) et des préfixes aggressifs (God_, xX_, Kill_). Pour les serveurs SMP et Survival, des pseudos comme Dark_Pioneer ou Wild_Ranger sont plus appropriés. NickGen propose des styles adaptés à chaque contexte." },
      { q: "Comment trouver un cool Minecraft username disponible en 2025 ?", a: "Les cool Minecraft usernames très courts et évidents sont presque tous pris. Vise 10-14 caractères avec une combinaison originale. Exemples : 'Shadow_Warrior_X', 'Dark_Champion_GG' ou 'Elite_Thunder_Pro'. Utilise NickGen avec le filtre Medium ou Long pour ces combinaisons." },
      { q: "Est-ce que les cool Minecraft usernames avec xX sont encore populaires ?", a: "Le format xX_Pseudo_Xx était populaire en 2013-2016 mais est considéré dépassé aujourd'hui. En 2025, les cool Minecraft usernames tendance combinent deux mots forts avec un underscore (Dark_Shadow, Elite_Warrior) sans les xX encadrants. NickGen génère des pseudos modernes adaptés aux tendances actuelles." },
    ],
  },

  "minecraft-username-ideas": {
    preSelectedStyle: "Creative",
    seo: {
      title: "Minecraft Username Ideas — Idées de Noms Minecraft Originaux",
      description: "En panne d'inspiration pour ton pseudo Minecraft ? NickGen génère des Minecraft username ideas pour tous les styles : Survival, PvP, Creative, Redstone, Builder. Gratuit.",
      keywords: ["minecraft username ideas", "minecraft name ideas", "minecraft username inspiration", "good minecraft username ideas", "minecraft names list", "minecraft nickname ideas"],
      alternates: { canonical: `${BASE}/minecraft-username-ideas` },
      openGraph: { title: "Minecraft Username Ideas — NickGen", description: "Génère des Minecraft username ideas pour tous les styles de jeu.", url: `${BASE}/minecraft-username-ideas` },
    },
    intro: {
      h1: "Minecraft Username Ideas",
      text: "En panne d'inspiration pour ton pseudo Minecraft ? NickGen génère des Minecraft username ideas pour tous les profils — de l'explorateur Survival au builder créatif, du guerrier PvP au technicien Redstone. Explore des combinaisons originales entre 3 et 16 caractères et trouve l'identité parfaite pour tes aventures Java ou Bedrock.",
    },
    faq: [
      { q: "Comment trouver des Minecraft username ideas vraiment originales ?", a: "Pour des Minecraft username ideas originales, combine des thèmes inattendus : un élément naturel + un rôle (Wild_Architect, Deep_Engineer), une couleur + un terme de jeu (Red_Wanderer, Gold_Circuit), ou un adjectif peu commun + un nom (Lost_Forager, Epic_Piston). NickGen génère ces combinaisons créatives automatiquement dans 5 styles." },
      { q: "Quels styles génèrent les Minecraft username ideas les plus originales ?", a: "Le style Redstone génère les Minecraft username ideas les plus originales car les termes techniques (Circuit, Piston, Contraption, Timer) sont moins utilisés que les mots génériques. Combiner Redstone avec des préfixes créatifs (Tech_, Logic_, Auto_) produit des pseudos Minecraft vraiment uniques." },
      { q: "Les Minecraft username ideas avec des métiers de jeu sont-elles populaires ?", a: "Oui, les Minecraft username ideas basées sur les activités du jeu (Miner, Builder, Farmer, Warrior, Explorer) restent très populaires car elles reflètent authentiquement le gameplay. La clé est d'ajouter un qualificatif distinctif : 'Deep_Miner' plutôt que 'Miner', 'Epic_Builder' plutôt que 'Builder'." },
      { q: "NickGen peut-il générer des Minecraft username ideas pour les filles ?", a: "Oui, NickGen génère des Minecraft username ideas pour tous. Le style Creative produit des pseudos évocateurs et artistiques (Master_Sculptor, Grand_Dreamer, Epic_Visionary) appréciés par les joueuses créatives. Le style Survival génère des pseudos d'aventurière (Wild_Explorer, Lost_Pioneer, Deep_Forager) également très populaires." },
    ],
  },

  "funny-minecraft-usernames": {
    preSelectedStyle: "Survival",
    seo: {
      title: "Funny Minecraft Usernames — Pseudos Minecraft Drôles et Originaux",
      description: "Génère des funny Minecraft usernames hilarants. Pseudos Minecraft drôles inspirés du gameplay : Creeper, Lava, Noob. Les meilleurs funny Minecraft names. Gratuit.",
      keywords: ["funny minecraft usernames", "funny minecraft names", "hilarious minecraft usernames", "minecraft funny username ideas", "meme minecraft usernames", "minecraft joke names"],
      alternates: { canonical: `${BASE}/funny-minecraft-usernames` },
      openGraph: { title: "Funny Minecraft Usernames — NickGen", description: "Génère des funny Minecraft usernames hilarants inspirés du gameplay.", url: `${BASE}/funny-minecraft-usernames` },
    },
    intro: {
      h1: "Funny Minecraft Usernames",
      text: "Les funny Minecraft usernames jouent sur les situations absurdes et iconiques du gameplay — se faire exploser par un Creeper, tomber dans la lave avec son full diamond, ou ne jamais trouver son lit de respawn. Des noms comme Dark_Miner_Oof, Lost_Caver_Rip ou Dead_Nomad_666 font sourire tout le serveur. Génère des funny Minecraft names originaux avec NickGen.",
    },
    faq: [
      { q: "Quels sont les funny Minecraft usernames les plus populaires ?", a: "Les funny Minecraft usernames les plus populaires jouent sur les expériences universelles du jeu : mourir de chute ('FellInVoid'), se faire tuer par un Creeper ('BlastedByCreeper'), perdre ses items dans la lave ('LavaLoot_Gone') ou ne jamais trouver son lit ('SleeplessNomad'). Ces références créent une complicité immédiate avec la communauté." },
      { q: "Les funny Minecraft usernames fonctionnent-ils sur les grands serveurs ?", a: "Oui, les funny Minecraft usernames fonctionnent particulièrement bien sur les serveurs publics où les joueurs interagissent dans le chat. Un pseudo drôle comme 'Dead_Miner_Rip' ou 'Wild_Noob_MC' génère souvent des réactions positives et facilite les premières interactions sociales sur le serveur." },
      { q: "Comment créer un funny Minecraft username personnalisé ?", a: "Les meilleures funny Minecraft usernames personnalisées viennent de tes propres moments mémorables en jeu. Une mort épique ? Intègre-la dans ton pseudo. Un biome préféré ? Combine-le avec une situation absurde. NickGen génère des bases que tu peux personnaliser avec tes propres références Minecraft." },
      { q: "Les funny Minecraft usernames respectent-ils les règles Mojang ?", a: "Oui, NickGen génère uniquement des funny Minecraft usernames respectant les règles Mojang (3-16 car., alphanumériques et underscores, pas de contenu offensant). Tous nos pseudos drôles jouent sur l'humour innocent du gameplay sans termes inappropriés." },
    ],
  },

  "good-minecraft-usernames": {
    preSelectedStyle: "Builder",
    seo: {
      title: "Good Minecraft Usernames — Les Meilleurs Pseudos Minecraft",
      description: "Génère des good Minecraft usernames mémorables et originaux pour Java et Bedrock. Les meilleurs pseudos Minecraft pour serveurs SMP, PvP et créatif. Gratuit.",
      keywords: ["good minecraft usernames", "best minecraft usernames", "minecraft username suggestions", "nice minecraft usernames", "minecraft good name ideas", "top minecraft usernames"],
      alternates: { canonical: `${BASE}/good-minecraft-usernames` },
      openGraph: { title: "Good Minecraft Usernames — NickGen", description: "Génère des good Minecraft usernames mémorables pour Java et Bedrock.", url: `${BASE}/good-minecraft-usernames` },
    },
    intro: {
      h1: "Good Minecraft Usernames",
      text: "Un good Minecraft username doit être mémorable, respecter les contraintes de la plateforme (3-16 caractères, lettres/chiffres/underscores) et refléter ton style de jeu. Les bons pseudos Minecraft sont originaux sans être illisibles, courts sans être déjà pris. NickGen génère des good Minecraft usernames dans 5 styles pour Java et Bedrock Edition.",
    },
    faq: [
      { q: "Qu'est-ce qui fait un good Minecraft username ?", a: "Un good Minecraft username réunit quatre qualités : mémorable (facile à retenir après une seule rencontre), disponible (pas déjà pris), approprié au contexte (PvP, SMP, serveur créatif) et représentatif de ton style. Les pseudos entre 8 et 14 caractères avec un underscore central remplissent généralement ces critères." },
      { q: "Quels sont les good Minecraft usernames pour un serveur SMP ?", a: "Pour un serveur SMP (Survival Multiplayer), les good Minecraft usernames sont ceux qui reflètent une personnalité de joueur authentique sans être trop agressifs. Des pseudos comme 'Wild_Forager', 'Deep_Pioneer' (Survival) ou 'Grand_Builder' (Builder) s'intègrent parfaitement à la culture collaborative des SMP." },
      { q: "Les good Minecraft usernames courts sont-ils encore disponibles ?", a: "Les pseudos Minecraft de moins de 7 caractères sont quasi-intégralement pris. Pour les good Minecraft usernames courts disponibles, vise 7-9 caractères avec des combinaisons inattendues. Le style Redstone génère des pseudos techniques moins communs (Tech_Eng, Logic_Bot) avec de meilleures chances de disponibilité." },
      { q: "Comment choisir entre plusieurs good Minecraft username options ?", a: "Utilise le mode Battle de NickGen : génère deux pseudos et vote pour ton préféré. Critères de sélection : prononciation (est-il facile à dire à voix haute ?), mémorabilité (peut-on le retenir après une seule lecture ?), disponibilité (vérifie sur minecraft.net), et cohérence avec ton style de jeu principal." },
    ],
  },
};
