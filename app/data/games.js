// ─── Game navigation ──────────────────────────────────────────────────────────

export const GAME_NAV = [
  { name: "Fortnite",      slug: "/",          badge: "BR"    },
  { name: "Valorant",      slug: "/valorant",  badge: "FPS"   },
  { name: "Minecraft",     slug: "/minecraft", badge: "CRAFT" },
  { name: "Apex Legends",  slug: "/apex",      badge: "BR"    },
  { name: "Call of Duty",  slug: "/cod",       badge: "FPS"   },
];

// ─── Games data ───────────────────────────────────────────────────────────────

export const GAMES = {

  // ── Fortnite ────────────────────────────────────────────────────────────────
  fortnite: {
    name: "Fortnite",
    badge: "FORTNITE",
    slug: "/",
    headline: "Fortnite Name Generator",
    tagline: "Generate the perfect gaming username for your next W",
    styles: ["Sweaty", "Funny", "OG", "Aesthetic", "Tryhard", "Badass"],
    defaultStyle: "Sweaty",
    nameData: {
      Sweaty: {
        prefixes: { ascii: ["xX_", "iTz", "FaZe_", "TSM_", "NRG_", "RNG_", "C9_", "100T_", "Liquid_"] },
        words: ["Sniper", "Fragger", "Clutch", "Aimer", "Grinder", "Elite", "Viper", "Ghost", "Apex", "Zeus", "Rogue", "Phantom"],
        suffixes: { ascii: ["_TTV", "_YT", "Pro", "_GG", "_OP", "_W", "TV", "_Clan"] },
      },
      Funny: {
        prefixes: { ascii: ["Im_", "NotA_", "Fake", "Your_", "Just_A_"] },
        words: ["Potato", "Noob", "Camper", "Teabagger", "SaltyBot", "BoostedGamer", "RandomDude", "SilverBot", "SweatyKid", "CouchGamer"],
        suffixes: { ascii: ["_Lol", "XD", "_Gg", "_Bruh", "_Ngl", "Fr", "_Rip", "_Kek"] },
      },
      OG: {
        prefixes: { ascii: ["OG_", "Real_", "Original_", "Og"] },
        words: ["Legend", "King", "Elite", "Godmode", "ProPlayer", "Master", "Champion", "Veteran", "Pioneer", "Myth", "Ninja", "Icon"],
        suffixes: { ascii: ["_OG", "_2011", "_2012", "_Legacy", "_Classic", "_Original", "_2009"] },
      },
      Aesthetic: {
        prefixes: {
          ascii: ["Ae_", "Soft_", "Pure_", "Dream_", "Sky_", "Star_"],
          unicode: ["✦ ", "☽ ", "◈ ", "⁂ ", "♛ ", "꧁", "༒ ", "✿ "],
        },
        words: ["Lunar", "Solar", "Frost", "Neon", "Crystal", "Aurora", "Void", "Phantom", "Nexus", "Seraph", "Lyra", "Aether"],
        suffixes: {
          ascii: ["_Glow", "_Sky", "_Pure", "_Soft", "_Dream", "_Wave"],
          unicode: [" ✦", " ☽", " ◈", " ♡", " ⋆", "°", " ꧂", " ༒"],
        },
      },
      Tryhard: {
        prefixes: { ascii: ["xX", "M4X_", "L33T_", "H4X_", "W1N_", "N0_"], unicode: ["Ω_", "∞_", "Δ_"] },
        words: ["Godlike", "Unstoppable", "Infinite", "Maximum", "Ultimate", "Supreme", "Absolute", "Flawless", "Dominant", "Invincible"],
        suffixes: { ascii: ["666", "999", "_TH", "_Pro", "_GG", "420"], unicode: ["_Ω", "_∞", "_Δ"] },
      },
      Badass: {
        prefixes: { ascii: ["Dark", "Death", "Blood", "Iron", "Black", "Ghost", "Shadow", "Grim"], unicode: ["☠_", "⚔_", "💀"] },
        words: ["Reaper", "Wraith", "Skull", "Venom", "Cobra", "Viper", "Raven", "Doom", "Havoc", "Fury", "Slayer", "Nemesis"],
        suffixes: { ascii: ["X", "Z", "_Prime", "666", "_Alpha", "_Sigma"], unicode: ["_☠", "_⚔", "_Ψ"] },
      },
    },
    faq: [
      { q: "Comment créer un bon pseudo Fortnite ?", a: "Un bon pseudo Fortnite doit être mémorable, court (idéalement 8-12 caractères) et refléter ton style de jeu. Utilise NickGen pour explorer les styles Sweaty (compétitif), OG (ancienneté) ou Aesthetic (originalité) selon ta personnalité en jeu." },
      { q: "Quelle est la longueur maximale d'un pseudo Fortnite ?", a: "Epic Games impose une limite de 16 caractères pour les pseudos Fortnite. NickGen propose des filtres Short (≤8 car.), Medium (9-13 car.) et Long (14+) pour générer des pseudos adaptés à cette contrainte." },
      { q: "Peut-on utiliser des symboles dans un pseudo Fortnite ?", a: "Fortnite autorise certains caractères spéciaux mais pas tous les symboles Unicode. Le toggle Symbols de NickGen ajoute des caractères décoratifs pour le style Aesthetic. Teste la compatibilité avant de valider ton pseudo." },
      { q: "C'est quoi un pseudo Sweaty sur Fortnite ?", a: "Un pseudo Sweaty désigne un nom qui affiche clairement que tu es un joueur compétitif et acharné. Ces pseudos incluent souvent des prefixes de clan (FaZe_, NRG_), des suffixes TTV ou YT, et des mots évoquant l'élite comme Clutch, Grinder ou Phantom." },
      { q: "Est-ce que NickGen est gratuit ?", a: "Oui, NickGen est 100% gratuit et sans inscription. Génère autant de pseudos que tu veux, utilise le mode Battle pour choisir entre deux options et partage tes pseudos préférés sur Twitter, WhatsApp ou Discord." },
      { q: "Comment partager mon pseudo Fortnite avec mes amis ?", a: "Clique sur le bouton 📤 d'une carte. NickGen génère un lien unique que tes amis peuvent ouvrir pour voir ton pseudo mis en avant — et générer le leur." },
      { q: "Qu'est-ce que le mode Battle de NickGen ?", a: "Le mode Battle génère deux pseudos face à face et tu votes pour ton préféré. Idéal quand tu hésites entre plusieurs options. Le gagnant peut être partagé directement sur tes réseaux sociaux." },
    ],
  },

  // ── Valorant ────────────────────────────────────────────────────────────────
  valorant: {
    name: "Valorant",
    badge: "VALORANT",
    slug: "/valorant",
    headline: "Valorant Name Generator",
    tagline: "Find your agent alias and carry with the right Riot ID",
    styles: ["Agent", "Duelist", "Controller", "Initiator", "Sentinel"],
    defaultStyle: "Agent",
    nameData: {
      Agent: {
        prefixes: { ascii: ["Agent_", "Op_", "Delta_", "Echo_", "Zero_", "Alpha_"] },
        words: ["Cipher", "Oracle", "Vector", "Nova", "Atlas", "Nexus", "Kira", "Phantom", "Specter", "Vantage", "Sigma", "Helix"],
        suffixes: { ascii: ["_VII", "_Zero", "_One", "_Prime", "_GE", "_PH"] },
      },
      Duelist: {
        prefixes: { ascii: ["Rush_", "Entry_", "Top_", "Peak_", "Kill_"] },
        words: ["Jett", "Neon", "Phoenix", "Raze", "Reyna", "Yoru", "Iso", "Flash", "Frag", "Clutch", "Ace", "Entry"],
        suffixes: { ascii: ["_Frag", "_Kill", "_Aim", "_Clutch", "_Peak", "_Rush"] },
      },
      Controller: {
        prefixes: { ascii: ["Smoke_", "Line_", "Zone_", "Ctrl_", "Wall_"] },
        words: ["Brimstone", "Viper", "Omen", "Harbor", "Clove", "Smoke", "Toxin", "Astra", "Fog", "Haze", "Nebula", "Miasma"],
        suffixes: { ascii: ["_Smoke", "_Control", "_Post", "_Strat", "_Line"] },
      },
      Initiator: {
        prefixes: { ascii: ["Flash_", "Info_", "Scout_", "Ping_", "Track_"] },
        words: ["Sova", "Breach", "Fade", "Skye", "KayO", "Gekko", "Intel", "Scan", "Recon", "Signal", "Tracker", "Probe"],
        suffixes: { ascii: ["_Intel", "_Scan", "_Bot", "_Tag", "_Flash"] },
      },
      Sentinel: {
        prefixes: { ascii: ["Lock_", "Hold_", "Watch_", "Camp_", "Guard_"] },
        words: ["Killjoy", "Cypher", "Sage", "Chamber", "Deadlock", "Vyse", "Anchor", "Wire", "Trap", "Watcher", "Flank", "Post"],
        suffixes: { ascii: ["_Wall", "_Guard", "_Watch", "_Sight", "_Lock"] },
      },
    },
    faq: [
      { q: "Combien de caractères peut contenir un pseudo Valorant ?", a: "Un Riot ID Valorant peut contenir jusqu'à 16 caractères pour le nom et 5 pour le tag (#tag). Le générateur NickGen propose des filtres Short (≤8 car.) et Medium (9-13 car.) pour t'aider à respecter cette contrainte." },
      { q: "Comment changer son pseudo Valorant ?", a: "Connecte-toi sur account.riotgames.com, accède à 'Mon compte' et modifie ton Riot ID. Le changement est gratuit une fois tous les 30 jours." },
      { q: "Peut-on utiliser des espaces dans un pseudo Valorant ?", a: "Oui, Valorant autorise les espaces dans les Riot IDs, permettant des noms en deux mots comme 'Dark Cipher' ou 'Flash Entry'. Cette particularité permet de se démarquer des pseudos compactés." },
      { q: "Quels styles de pseudo fonctionnent le mieux en Valorant ?", a: "Les styles Agent (codenames tactiques) et Duelist (orienté frags) sont les plus populaires en Valorant. Les pseudos courts et percutants (6-10 caractères) sont recommandés pour être facilement identifiables en match." },
      { q: "Comment avoir un pseudo Radiant sur Valorant ?", a: "Les joueurs Radiant optent souvent pour des noms concis, pro-sounding, avec des références aux agents ou termes tactiques. Le style Agent de NickGen génère exactement ce type de pseudo épuré et professionnel." },
    ],
  },

  // ── Minecraft ───────────────────────────────────────────────────────────────
  minecraft: {
    name: "Minecraft",
    badge: "MINECRAFT",
    slug: "/minecraft",
    headline: "Minecraft Username Generator",
    tagline: "Find your perfect blocky identity for Java & Bedrock",
    styles: ["Survival", "Creative", "PvP", "Redstone", "Builder"],
    defaultStyle: "Survival",
    nameData: {
      Survival: {
        prefixes: { ascii: ["Dark_", "Deep_", "Wild_", "Cave_", "Lost_", "Dead_"] },
        words: ["Miner", "Digger", "Survivor", "Explorer", "Pioneer", "Wanderer", "Ranger", "Caver", "Hunter", "Drifter", "Nomad", "Forager"],
        suffixes: { ascii: ["_X", "_66", "_MC", "_SMP", "_Craft", "_Cave"] },
      },
      Creative: {
        prefixes: { ascii: ["Master_", "Grand_", "Pro_", "Epic_", "Ultra_"] },
        words: ["Builder", "Architect", "Creator", "Artist", "Mason", "Sculptor", "Planner", "Designer", "Maker", "Crafter", "Visionary", "Dreamer"],
        suffixes: { ascii: ["_Build", "_Create", "_Art", "_Pro", "_GG", "_Dev"] },
      },
      PvP: {
        prefixes: { ascii: ["xX_", "Top_", "Elite_", "Pro_", "Kill_", "God_"] },
        words: ["Warrior", "Fighter", "Slayer", "Hunter", "Champion", "Gladiator", "Archer", "Blade", "Axe", "Knight", "Berserker", "Duelist"],
        suffixes: { ascii: ["_PvP", "_Kill", "_GG", "_1v1", "_Pro", "_W"] },
      },
      Redstone: {
        prefixes: { ascii: ["Tech_", "Auto_", "Logic_", "Red_", "Piston_"] },
        words: ["Engineer", "Inventor", "Circuit", "Logic", "Mechanism", "Piston", "Repeater", "Contraption", "Device", "Wiring", "Timer", "Pulse"],
        suffixes: { ascii: ["_Tech", "_Logic", "_Auto", "_Bot", "_Eng"] },
      },
      Builder: {
        prefixes: { ascii: ["Build_", "Craft_", "Forge_", "Stone_", "Wood_"] },
        words: ["Mason", "Forger", "Constructor", "Carpenter", "Quarry", "Layer", "Foundation", "Pillar", "Beam", "Brick", "Timber", "Cornerstone"],
        suffixes: { ascii: ["_Build", "_Craft", "_Block", "_Pro", "_MC"] },
      },
    },
    faq: [
      { q: "Quelle est la longueur d'un pseudo Minecraft ?", a: "Les pseudos Minecraft doivent faire entre 3 et 16 caractères et ne peuvent contenir que des lettres, chiffres et underscores (_). Aucun espace ni symbole spécial n'est autorisé." },
      { q: "Comment changer son pseudo Minecraft ?", a: "Connecte-toi sur minecraft.net avec ton compte Microsoft, accède à 'Mon profil' et modifie ton nom de profil. Le changement est immédiat et gratuit." },
      { q: "Les pseudos Minecraft sont-ils sensibles à la casse ?", a: "Non, les pseudos sont uniques indépendamment de la casse. 'Steve' et 'steve' ne peuvent pas coexister. Utilise les majuscules stratégiquement pour améliorer la lisibilité (ex: DarkMiner vs darkminer)." },
      { q: "Quels pseudos fonctionnent le mieux sur les serveurs PvP Minecraft ?", a: "Sur les serveurs PvP, les pseudos courts (5-8 caractères), avec des connotations combatives et faciles à lire dans le chat de combat sont idéaux. Le style PvP de NickGen est optimisé pour cet usage." },
      { q: "Peut-on avoir le même pseudo que Herobrine sur Minecraft ?", a: "Herobrine et certains pseudos iconiques sont bloqués par Mojang. NickGen génère des variantes inspirées de ces noms légendaires pour un résultat original et disponible." },
    ],
  },

  // ── Apex Legends ────────────────────────────────────────────────────────────
  apex: {
    name: "Apex Legends",
    badge: "APEX",
    slug: "/apex",
    headline: "Apex Legends Name Generator",
    tagline: "Become a legend — find your perfect Apex callsign",
    styles: ["Legend", "Aggressive", "Support", "Recon", "Wraith"],
    defaultStyle: "Legend",
    nameData: {
      Legend: {
        prefixes: { ascii: ["Apex_", "Legend_", "Gold_", "Master_", "Pred_"] },
        words: ["Wraith", "Pathfinder", "Bloodhound", "Octane", "Lifeline", "Bangalore", "Caustic", "Mirage", "Rampart", "Seer", "Catalyst", "Newcastle"],
        suffixes: { ascii: ["_TTV", "_Pred", "_Master", "_Pro", "_GG"] },
      },
      Aggressive: {
        prefixes: { ascii: ["Rush_", "Push_", "Fast_", "Kill_", "Hunt_"] },
        words: ["Flanker", "Fragger", "Rusher", "Aggressor", "Hunter", "Predator", "Ravager", "Striker", "Blitz", "Charger", "Raider", "Assaulter"],
        suffixes: { ascii: ["_Frag", "_Rush", "_Kill", "_Blitz", "_W"] },
      },
      Support: {
        prefixes: { ascii: ["Team_", "Crew_", "Squad_", "Save_", "Clutch_"] },
        words: ["Lifeline", "Medic", "Reviver", "Anchor", "Guardian", "Keeper", "Shield", "Backbone", "Carry", "Healer", "Protector", "Savior"],
        suffixes: { ascii: ["_TTV", "_Support", "_GG", "_Revive", "_Mains"] },
      },
      Recon: {
        prefixes: { ascii: ["Scout_", "Track_", "Watch_", "Spy_", "Radar_"] },
        words: ["Scout", "Tracker", "Watcher", "Radar", "Shadow", "Observer", "Sentinel", "Prowler", "Stalker", "Eye", "Signal", "Spotter"],
        suffixes: { ascii: ["_Intel", "_Scan", "_Eye", "_Watch", "_Track"] },
      },
      Wraith: {
        prefixes: { ascii: ["Void_", "Dark_", "Ghost_", "Rift_", "Phase_"] },
        words: ["Phantom", "Specter", "Shadow", "Rift", "Void", "Nexus", "Vex", "Shade", "Apparition", "Fade", "Warp", "Dimension"],
        suffixes: { ascii: ["_Void", "_Rift", "_Phase", "_Ghost", "_Dark"] },
      },
    },
    faq: [
      { q: "Quelle est la longueur d'un pseudo sur Apex Legends ?", a: "Les pseudos Apex Legends peuvent contenir de 3 à 16 caractères. Ils acceptent lettres, chiffres et certains caractères spéciaux comme les underscores et tirets." },
      { q: "Comment changer son pseudo Apex Legends ?", a: "Dans Apex, va dans Paramètres > Compte > Modifier le nom d'utilisateur. Le premier changement est gratuit. Les changements suivants nécessitent des Apex Coins. Le pseudo EA correspond à ton EA ID global." },
      { q: "Quels pseudos sont populaires chez les joueurs Predator ?", a: "Les Predators optent souvent pour des noms évoquant la prédation, la vitesse ou leur legend principale. Des pseudos comme 'VoidWraith', 'BloodTracker' ou 'ApexPred' sont typiques du top tier Apex." },
      { q: "Peut-on utiliser des espaces dans un pseudo Apex Legends ?", a: "Oui, les espaces sont autorisés dans les pseudos Apex Legends, permettant des noms en deux mots plus lisibles. Cela te démarque des pseudos compactés sans espaces." },
      { q: "Quel style de pseudo selon sa legend principale ?", a: "Pour Wraith : style void et mystérieux. Pour Pathfinder : style scout positif. Pour Bangalore : style militaire. NickGen propose les styles Wraith (mystérieux) et Recon (tactique) parfaitement adaptés à chaque legend." },
    ],
  },

  // ── Call of Duty ────────────────────────────────────────────────────────────
  cod: {
    name: "Call of Duty",
    badge: "COD",
    slug: "/cod",
    headline: "Call of Duty Name Generator",
    tagline: "Dominate the battlefield with the ultimate COD callsign",
    styles: ["Operator", "Ghost", "Warzone", "Tactical", "Prestige"],
    defaultStyle: "Operator",
    nameData: {
      Operator: {
        prefixes: { ascii: ["Op_", "Sgt_", "Lt_", "Col_", "Cpt_"] },
        words: ["Ghost", "Soap", "Price", "Nikolai", "Shepherd", "Makarov", "Shadow", "Phoenix", "Hawk", "Viper", "Steel", "Granite"],
        suffixes: { ascii: ["_141", "_Bravo", "_Alpha", "_Six", "_Zero", "_Prime"] },
      },
      Ghost: {
        prefixes: { ascii: ["Dark_", "Silent_", "Stealth_", "Black_", "Night_"] },
        words: ["Phantom", "Specter", "Shadow", "Wraith", "Revenant", "Veil", "Shade", "Reaper", "Banshee", "Nightfall", "Eclipse", "Umbra"],
        suffixes: { ascii: ["_Ghost", "_Shadow", "_Stealth", "_Dark", "_X"] },
      },
      Warzone: {
        prefixes: { ascii: ["WZ_", "Zone_", "Drop_", "Gulag_", "Circle_"] },
        words: ["Plunder", "Contract", "Bounty", "Hunt", "Operator", "Drop", "Victory", "Clutch", "Final", "Gulag", "Circle", "Ring"],
        suffixes: { ascii: ["_WZ", "_Drop", "_W", "_Dub", "_GG", "_Wins"] },
      },
      Tactical: {
        prefixes: { ascii: ["Tac_", "Strat_", "Hold_", "Push_", "Cover_"] },
        words: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Romeo", "Sierra", "Tango", "Victor", "Whiskey", "Yankee"],
        suffixes: { ascii: ["_Tac", "_Two", "_Six", "_Ops", "_Team", "_Strat"] },
      },
      Prestige: {
        prefixes: { ascii: ["P_", "Max_", "Gold_", "Diamond_", "Nuke_"] },
        words: ["Veteran", "Legend", "Master", "Elite", "Champion", "Honor", "Glory", "Valor", "Prestige", "Icon", "Myth", "Pinnacle"],
        suffixes: { ascii: ["_P10", "_Master", "_Elite", "_Pro", "_GG", "_Legend"] },
      },
    },
    faq: [
      { q: "Quelle est la longueur d'un pseudo Call of Duty ?", a: "Les pseudos Activision peuvent contenir jusqu'à 16 caractères en jeu. Un pseudo court (8-12 car.) reste plus impactant et lisible dans le kill feed et le tableau des scores." },
      { q: "Comment changer son pseudo Call of Duty ?", a: "Connecte-toi sur s.activision.com, accède à ton profil et modifie ton Display Name. La modification est gratuite une fois par mois." },
      { q: "Peut-on utiliser des clan tags dans COD Warzone ?", a: "Oui, Warzone supporte les clan tags entre crochets comme [TAG] devant ton pseudo. Le style Tactical de NickGen génère des prefixes courts qui fonctionnent parfaitement comme clan tags (Alpha_, Bravo_)." },
      { q: "Quels sont les pseudos les plus populaires sur COD ?", a: "Les noms militaires (Ghost, Phantom, Shadow), les références aux personnages iconiques (Price, Soap) et les callsigns NATO (Alpha, Bravo, Delta) dominent le top des pseudos COD populaires." },
      { q: "Comment avoir un pseudo intimidant dans Warzone ?", a: "Le style Ghost de NickGen génère des pseudos sombres et menaçants : noms évocateurs de la mort, préfixes stealth, références au lore COD. L'objectif est de créer une aura de danger dès le lobby." },
    ],
  },
};
