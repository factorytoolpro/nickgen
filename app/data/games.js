// ─── Game navigation ──────────────────────────────────────────────────────────

export const GAME_NAV = [
  { name: "Fortnite",      slug: "/fortnite-name-generator",         badge: "BR"    },
  { name: "Roblox",        slug: "/roblox-username-generator",       badge: "MMO"   },
  { name: "GTA 6",         slug: "/gta6-name-generator",             badge: "RPG"   },
  { name: "Minecraft",     slug: "/minecraft-username-generator",    badge: "CRAFT" },
  { name: "Valorant",      slug: "/valorant-name-generator",         badge: "FPS"   },
  { name: "Apex Legends",  slug: "/apex-legends-name-generator",     badge: "BR"    },
  { name: "Call of Duty",  slug: "/call-of-duty-name-generator",     badge: "FPS"   },
  { name: "Discord",       slug: "/discord-username-generator",      badge: "CHAT"  },
  { name: "TikTok",        slug: "/tiktok-username-generator",       badge: "SOCIAL" },
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
        prefixes: { ascii: ["xX_", "iTz", "FaZe_", "TSM_", "NRG_", "C9_", "100T_", "Liquid_"] },
        words: ["Clutch", "Edit", "Crank", "Elim", "Storm", "Zone", "Piece", "Pump", "Spray", "Boxfight", "ZeroPing", "Combo"],
        suffixes: { ascii: ["_TTV", "_YT", "Pro", "_GG", "_Dubs", "_W", "_Edits", "_Clips"] },
      },
      Funny: {
        prefixes: { ascii: ["Im_A_", "NotA_", "Just_", "Free_", "Your_"] },
        words: ["Potato", "Llama", "Noob", "Camper", "Default", "Loot", "Storm", "Troll", "Rotate", "Revive", "Medkit", "BushHide"],
        suffixes: { ascii: ["_Lol", "_Oof", "_Bruh", "_Ngl", "_Fr", "_Rip", "_Xd"] },
      },
      OG: {
        prefixes: { ascii: ["OG_", "S1_", "Day1_", "Real_", "Chapter1_"] },
        words: ["Tilted", "Dusty", "Season1", "Chapter1", "Default", "Veteran", "Launch", "FirstW", "TopGlider", "OGWin", "Classic", "Trophy"],
        suffixes: { ascii: ["_OG", "_S1", "_2018", "_Legacy", "_Classic", "_Chapter1"] },
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
        prefixes: { ascii: ["0ms_", "60fps_", "xX", "M4X_", "999fps_"], unicode: ["Ω_", "∞_", "Δ_"] },
        words: ["AimBot", "EditSpeed", "Crank", "ZeroPing", "FlickShot", "ClickTime", "TrackRate", "Combo", "React", "Input", "Movement", "BuildFight"],
        suffixes: { ascii: ["666", "999", "_TH", "_1v1", "_Ranked"], unicode: ["_Ω", "_∞", "_Δ"] },
      },
      Badass: {
        prefixes: { ascii: ["Dark", "Storm", "Iron", "Black", "Death", "Grim", "Shadow"], unicode: ["☠_", "⚔_", "💀"] },
        words: ["Reaper", "Titan", "Wraith", "Skull", "Viper", "Slayer", "Doom", "Fury", "Havoc", "Nemesis", "Destroyer", "Ruin"],
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

  // ── Roblox ──────────────────────────────────────────────────────────────────
  roblox: {
    name: "Roblox",
    badge: "ROBLOX",
    slug: "/roblox",
    headline: "Roblox Username Generator",
    tagline: "Find the perfect Roblox username — 3 to 20 characters, no spaces",
    styles: ["Cute", "Cool", "Funny", "Aesthetic", "ProPlayer"],
    defaultStyle: "Cool",
    nameData: {
      Cute: {
        prefixes: { ascii: ["Lil_", "Sweet_", "Baby_", "Soft_", "Tiny_", "Mini_"] },
        words: ["Bunny", "Star", "Cloud", "Petal", "Honey", "Kawaii", "Glitter", "Sparkle", "Sugar", "Fluffy", "Angel", "Blossom"],
        suffixes: { ascii: ["_Uwu", "_Owo", "_Soft", "xo", "_Pink", "_Bb"] },
      },
      Cool: {
        prefixes: { ascii: ["Dark_", "Pro_", "Epic_", "Ultra_", "Hyper_"] },
        words: ["Shadow", "Storm", "Nova", "Edge", "Strike", "Surge", "Titan", "Alpha", "Nexus", "Force", "Core", "Blaze"],
        suffixes: { ascii: ["_X", "_Pro", "_GG", "_V2", "_Elite", "_HD"] },
      },
      Funny: {
        prefixes: { ascii: ["Im_", "Local_", "Fake_", "NotA_", "Just_"] },
        words: ["Noob", "BaconHair", "OofMaster", "Troll", "Lag", "Scammer", "Admin", "Guest", "Mod", "Sussy", "Impostor", "Hacker"],
        suffixes: { ascii: ["_Oof", "_Lol", "_XD", "_Bruh", "_Rip", "_Banned"] },
      },
      Aesthetic: {
        prefixes: { ascii: ["Soft_", "Dream_", "Moon_", "Star_", "Cloud_", "Sky_"] },
        words: ["Lunar", "Aurora", "Crystal", "Dreamer", "Starlight", "Moonbeam", "Glimmer", "Shimmer", "Radiance", "Ethereal", "Celestial", "Twilight"],
        suffixes: { ascii: ["_Dream", "_Glow", "_Sky", "_Star", "_Moon", "_Soft"] },
      },
      ProPlayer: {
        prefixes: { ascii: ["Top_", "Ranked_", "Elite_", "God_", "Sweat_"] },
        words: ["Clutch", "Carry", "Grind", "GrindSet", "Meta", "Combo", "SkillZ", "Ranked", "Slayer", "Aim", "OP", "Win"],
        suffixes: { ascii: ["_Pro", "_GG", "_W", "_TTV", "_Ranked", "_1v1"] },
      },
    },
    faq: [
      { q: "Quelle est la longueur d'un pseudo Roblox ?", a: "Les pseudos Roblox doivent faire entre 3 et 20 caractères. Seuls les lettres, chiffres et underscores (_) sont autorisés. Les espaces et symboles spéciaux ne sont pas acceptés par la plateforme." },
      { q: "Comment changer son pseudo Roblox ?", a: "Connecte-toi sur roblox.com, clique sur l'icône de profil > Paramètres > Compte > Modifier le nom d'utilisateur. Le changement coûte 1 000 Robux (environ 10€). Choisis bien avant de payer !" },
      { q: "Un pseudo Roblox peut-il contenir des espaces ?", a: "Non, les espaces ne sont pas autorisés dans les pseudos Roblox. Utilise l'underscore (_) pour séparer les mots, comme Dark_Shadow ou Pro_Player. NickGen génère automatiquement des pseudos compatibles avec cette règle." },
      { q: "Pourquoi mon pseudo Roblox est-il refusé ?", a: "Roblox refuse les pseudos déjà pris, ceux contenant des mots inappropriés, ou ceux ne respectant pas le format (3-20 chars, lettres/chiffres/underscores). NickGen génère des pseudos originaux qui maximisent les chances de disponibilité." },
      { q: "Quels pseudos sont populaires sur Roblox en 2025 ?", a: "Les pseudos Cute (BunnyXo, SoftDream), Cool (ShadowX, VortexPro) et Aesthetic (LunarGlow, AuroraDream) sont très populaires sur Roblox. Le style ProPlayer monte en puissance avec l'essor du gaming compétitif Roblox." },
    ],
  },

  // ── GTA 6 ────────────────────────────────────────────────────────────────────
  gta6: {
    name: "GTA 6",
    badge: "GTA VI",
    slug: "/gta6",
    headline: "GTA 6 Name Generator",
    tagline: "Build your Vice City criminal empire with the perfect callsign",
    styles: ["Hustler", "Criminal", "Outlaw", "Street", "Kingpin", "RP", "Gang", "Crew", "Character", "Mafia"],
    defaultStyle: "Criminal",
    nameData: {
      Hustler: {
        prefixes: { ascii: ["Vice_", "Miami_", "Neon_", "Surf_", "South_"] },
        words: ["Hustle", "Stack", "Grind", "Chase", "Score", "Paper", "Bread", "Drip", "Flow", "Hype", "Wave", "Vibe"],
        suffixes: { ascii: ["_305", "_VC", "_786", "_Bando", "_Gang"] },
      },
      Criminal: {
        prefixes: { ascii: ["Mob_", "Crime_", "Heist_", "Cartel_", "Crew_"] },
        words: ["Viper", "Cobra", "Boss", "Phantom", "Reaper", "Ghost", "Shadow", "Kingpin", "Don", "Capo", "Hitman", "Pistol"],
        suffixes: { ascii: ["_OG", "_GTA", "_VI", "_Six", "_Crime"] },
      },
      Outlaw: {
        prefixes: { ascii: ["Wild_", "Free_", "Rogue_", "Lone_", "Rebel_"] },
        words: ["Bandit", "Outlaw", "Renegade", "Maverick", "Vagabond", "Drifter", "Fugitive", "Desperado", "Rogue", "Exile", "Wanted", "Runaway"],
        suffixes: { ascii: ["_666", "_Wanted", "_Out", "_Law", "_Free"] },
      },
      Street: {
        prefixes: { ascii: ["Block_", "Hood_", "Corner_", "Strip_", "East_"] },
        words: ["Rider", "Cruiser", "Lowrider", "Banger", "Drifter", "Runner", "Roller", "Slinger", "Rep", "Local", "OG", "Plug"],
        suffixes: { ascii: ["_LA", "_VC", "_305", "_Neon", "_Strip"] },
      },
      Kingpin: {
        prefixes: { ascii: ["Big_", "Top_", "Head_", "Chief_", "Boss_"] },
        words: ["King", "Don", "Godfather", "Emperor", "Overlord", "Warlord", "Baron", "Duke", "Lord", "Czar", "Sovereign", "Tyrant"],
        suffixes: { ascii: ["_VI", "_Boss", "_OG", "_King", "_Crown"] },
      },
      RP: {
        prefixes: { ascii: ["Tommy_", "Luis_", "Carlos_", "Marcus_", "Rico_", "Dante_", "Jason_", "Miguel_", "Ray_", "Tyrone_"] },
        words: ["Rivera", "Santos", "Cruz", "Torres", "Vega", "Martinez", "Reyes", "Castillo", "Morales", "Delgado", "Ramirez", "Espinoza"],
        suffixes: { ascii: ["_RP", "_305", "_Vice", "_VC", "_VI"] },
      },
      Gang: {
        prefixes: { ascii: ["East_", "South_", "Vice_", "Leonida_", "Beach_"] },
        words: ["Cartel", "Viper", "Grove", "Kingpin", "Banger", "Block", "Hood", "Rider", "Click", "Shot", "Set", "Rep"],
        suffixes: { ascii: ["_Gang", "_Set", "_Block", "_Hood", "_Click"] },
      },
      Crew: {
        prefixes: { ascii: ["Crew_", "Squad_", "Team_", "Unit_", "Pack_"] },
        words: ["Phantom", "Shadow", "Spectre", "Cipher", "Raven", "Ghost", "Havoc", "Chaos", "Apex", "Venom", "Cobra", "Predator"],
        suffixes: { ascii: ["_Crew", "_Squad", "_Unit", "_Force", "_Pack"] },
      },
      Character: {
        prefixes: { ascii: ["Vice_", "Miami_", "Neon_", "Palm_", "Ocean_", "Bay_"] },
        words: ["Valentino", "Esposito", "DeLuca", "Marchetti", "Carbone", "Ricci", "Romano", "Ferraro", "Conti", "Marino", "Leone", "Riva"],
        suffixes: { ascii: ["_VC", "_305", "_VI", "_Vice", "_786"] },
      },
      Mafia: {
        prefixes: { ascii: ["Don_", "Il_", "La_", "Capo_", "Boss_"] },
        words: ["Valentini", "Esposito", "DeLuca", "Marchetti", "Carbone", "Ricci", "Romano", "Ferraro", "Conti", "Moretti", "Barbieri", "Amato"],
        suffixes: { ascii: ["_Don", "_Capo", "_Boss", "_Famiglia", "_Family"] },
      },
    },
    faq: [
      { q: "Peut-on personnaliser son pseudo dans GTA 6 Online ?", a: "Oui, GTA 6 Online permettra la personnalisation du nom de personnage comme dans GTA 5 Online. Choisis bien ton pseudo dès le lancement — il devient ton identité dans tout GTA Online." },
      { q: "Quel style de pseudo choisir pour GTA 6 ?", a: "Pour GTA 6 (Vice City), les pseudos inspirés du milieu criminel, du style Miami/305, ou des noms de gangsters fonctionnent parfaitement. NickGen propose 5 styles : Hustler, Criminal, Outlaw, Street et Kingpin." },
      { q: "Quelle est la longueur idéale d'un pseudo GTA Online ?", a: "Les pseudos GTA Online acceptent jusqu'à 16 caractères. Un pseudo court (6-10 car.) est plus impactant en mission et dans les sessions libres. Utilise le filtre Short de NickGen pour cibler cette plage." },
      { q: "GTA 6 est-il sorti en 2025 ?", a: "GTA 6 est attendu pour 2026 sur PlayStation 5 et Xbox Series X/S. Prépare ton pseudo dès maintenant avec NickGen pour être prêt dès le jour du lancement de GTA 6 Online." },
      { q: "Comment avoir un pseudo intimidant dans GTA 6 ?", a: "Le style Criminal et Kingpin de NickGen génèrent des pseudos basés sur des références mafieuses et des termes de Vice City (les deux protagonistes de GTA 6 se déroulent à Leonida / Vice City). Des noms comme 'Don_Cartel' ou 'BigBoss_VI' créent immédiatement une aura menaçante." },
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
        prefixes: { ascii: ["Op_", "Agent_", "Zero_", "Delta_", "Echo_"] },
        words: ["Cipher", "Phoenix", "Breach", "Viper", "Killjoy", "Fade", "Neon", "KayO", "Omen", "Sova", "Jett", "Sage"],
        suffixes: { ascii: ["_VII", "_Prime", "_GE", "_EU", "_NA"] },
      },
      Duelist: {
        prefixes: { ascii: ["Rush_", "Entry_", "Frag_", "Ace_", "Peek_"] },
        words: ["Jett", "Raze", "Reyna", "Neon", "Phoenix", "Iso", "Dash", "Ace", "Entry", "Flash", "Frag", "PopFlash"],
        suffixes: { ascii: ["_Ace", "_Frag", "_Entry", "_Duel", "_Aim"] },
      },
      Controller: {
        prefixes: { ascii: ["Smoke_", "Post_", "Line_", "Zone_", "Setup_"] },
        words: ["Viper", "Omen", "Brimstone", "Harbor", "Astra", "Smokes", "Molly", "Orbit", "Wall", "Block", "Setup", "Control"],
        suffixes: { ascii: ["_Smoke", "_Post", "_Zone", "_Line", "_Setup"] },
      },
      Initiator: {
        prefixes: { ascii: ["Flash_", "Recon_", "Scan_", "Dart_", "Info_"] },
        words: ["Sova", "Breach", "Fade", "Skye", "KayO", "Gekko", "Drone", "Arrow", "Recon", "Intel", "Ult", "Reveal"],
        suffixes: { ascii: ["_Intel", "_Info", "_Scan", "_Recon", "_Flash"] },
      },
      Sentinel: {
        prefixes: { ascii: ["Lock_", "Flank_", "Trip_", "Wire_", "Hold_"] },
        words: ["Killjoy", "Cypher", "Sage", "Chamber", "Deadlock", "Vyse", "Turret", "Wire", "Flank", "Trip", "Anchor", "Watch"],
        suffixes: { ascii: ["_Lock", "_Guard", "_Watch", "_Trip", "_Flank"] },
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
        prefixes: { ascii: ["Cave_", "Deep_", "Wild_", "Dark_", "Lost_"] },
        words: ["Diamond", "Creeper", "Enderman", "Nether", "Cave", "Spider", "Zombie", "Village", "Portal", "Chest", "Mine", "Harvest"],
        suffixes: { ascii: ["_SMP", "_MC", "_S1", "_Cave", "_Craft"] },
      },
      Creative: {
        prefixes: { ascii: ["Pixel_", "Map_", "Build_", "Art_", "Design_"] },
        words: ["Pixel", "Blueprint", "Voxel", "Canvas", "Render", "Sketch", "Layer", "Grid", "Frame", "Asset", "Palette", "Tileset"],
        suffixes: { ascii: ["_Build", "_Map", "_Dev", "_Art", "_Create"] },
      },
      PvP: {
        prefixes: { ascii: ["xX_", "God_", "Top_", "Click_", "Kill_"] },
        words: ["Combo", "Crit", "Sword", "Axe", "Strafe", "Pearl", "Duel", "Click", "Knockback", "Bridge", "Reset", "Clutch"],
        suffixes: { ascii: ["_PvP", "_CPS", "_GG", "_1v1", "_Combo"] },
      },
      Redstone: {
        prefixes: { ascii: ["Logic_", "Circuit_", "Clock_", "Gate_", "Signal_"] },
        words: ["Piston", "Comparator", "Repeater", "Dispenser", "Hopper", "Observer", "Dropper", "Clock", "Memory", "Gate", "Pulse", "Timer"],
        suffixes: { ascii: ["_RS", "_RC", "_Logic", "_Clock", "_Bot"] },
      },
      Builder: {
        prefixes: { ascii: ["Master_", "Epic_", "Grand_", "Mega_", "Pro_"] },
        words: ["Castle", "Tower", "Bridge", "Cathedral", "Arch", "Dome", "Fortress", "Temple", "Palace", "Citadel", "Mansion", "Hamlet"],
        suffixes: { ascii: ["_Build", "_Craft", "_Arch", "_GG", "_MC"] },
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
        prefixes: { ascii: ["Apex_", "Pred_", "Master_", "Plat_", "Gold_"] },
        words: ["Wraith", "Octane", "Lifeline", "Bloodhound", "Pathfinder", "Bangalore", "Revenant", "Seer", "Horizon", "Gibraltar", "Catalyst", "Ballistic"],
        suffixes: { ascii: ["_TTV", "_Pred", "_Master", "_Mains", "_GG"] },
      },
      Aggressive: {
        prefixes: { ascii: ["Rush_", "Push_", "Thirst_", "Fight_", "Down_"] },
        words: ["Thirsti", "Pusher", "Flanker", "Diver", "Fighter", "Fragger", "Rusher", "Aggro", "Slayer", "Hunter", "Grinder", "Blitz"],
        suffixes: { ascii: ["_Kills", "_Frag", "_Rush", "_TTV", "_W"] },
      },
      Support: {
        prefixes: { ascii: ["Res_", "Revive_", "Carry_", "Save_", "Shield_"] },
        words: ["Lifeline", "Medic", "Reviver", "Backbone", "Clutchpack", "Guardian", "Shield", "Carrier", "Anchor", "Cover", "Heal", "Protect"],
        suffixes: { ascii: ["_Res", "_Heal", "_Support", "_GG", "_TTV"] },
      },
      Recon: {
        prefixes: { ascii: ["Scout_", "Track_", "Eye_", "Scan_", "Drone_"] },
        words: ["Bloodhound", "Crypto", "Seer", "Vantage", "Tracker", "Scanner", "Drone", "Radar", "Ping", "Tag", "Intel", "Sensor"],
        suffixes: { ascii: ["_Scan", "_Eye", "_Track", "_Intel", "_Tag"] },
      },
      Wraith: {
        prefixes: { ascii: ["Void_", "Rift_", "Phase_", "Into_", "Quantum_"] },
        words: ["Void", "Rift", "Phase", "Nexus", "Portal", "Ghost", "Fade", "Shadow", "Quantum", "Phantom", "Blink", "Tunnel"],
        suffixes: { ascii: ["_Void", "_Rift", "_Ghost", "_Phase", "_Dark"] },
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
        prefixes: { ascii: ["Sgt_", "Spec_", "Op_", "Cpt_", "Lt_"] },
        words: ["Ghost", "Soap", "Price", "Graves", "Roach", "Gaz", "Farah", "Alejandro", "König", "Shepherd", "Makarov", "Horangi"],
        suffixes: { ascii: ["_141", "_Ops", "_Actual", "_Six", "_Lead"] },
      },
      Ghost: {
        prefixes: { ascii: ["Shadow_", "Dark_", "Silent_", "Black_", "Night_"] },
        words: ["Phantom", "Specter", "Revenant", "Eclipse", "Veil", "Reaper", "Banshee", "Nightfall", "Shade", "Wraith", "Apparition", "Umbra"],
        suffixes: { ascii: ["_Ghost", "_Shadow", "_Dark", "_Recon", "_Silent"] },
      },
      Warzone: {
        prefixes: { ascii: ["WZ_", "Gulag_", "Circle_", "Drop_", "Gas_"] },
        words: ["Gulag", "Plunder", "Contract", "Bounty", "Loadout", "Revive", "Gas", "Circle", "Rotate", "Clutch", "Final", "Loot"],
        suffixes: { ascii: ["_WZ", "_Dub", "_Win", "_GG", "_Drop"] },
      },
      Tactical: {
        prefixes: { ascii: ["Alpha_", "Bravo_", "Charlie_", "Delta_", "Echo_"] },
        words: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Hotel", "India", "Juliet", "Kilo", "Lima", "Sierra"],
        suffixes: { ascii: ["_Actual", "_Lead", "_Two", "_Six", "_Ops"] },
      },
      Prestige: {
        prefixes: { ascii: ["Max_", "Nuke_", "Diamond_", "Gold_", "Damasc_"] },
        words: ["MaxRank", "Nuclear", "Diamond", "Platinum", "Champion", "Prestige", "Elite", "Legend", "Master", "Glory", "Icon", "Myth"],
        suffixes: { ascii: ["_P10", "_Master", "_Elite", "_Legend", "_GG"] },
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

  // ── Discord ──────────────────────────────────────────────────────────────────
  discord: {
    name: "Discord",
    badge: "DISCORD",
    slug: "/discord-username-generator",
    headline: "Discord Username Generator",
    tagline: "Find the perfect Discord username for your servers and communities",
    styles: ["Aesthetic", "Cool", "Funny", "Cute", "Unique"],
    defaultStyle: "Aesthetic",
    nameData: {
      Aesthetic: {
        prefixes: {
          ascii: ["Soft_", "Luna_", "Star_", "Neon_", "Dream_", "Haze_"],
          unicode: ["✦", "☽", "◈", "★", "⋆"],
        },
        words: ["Luminous", "Celestial", "Velvet", "Solace", "Aurora", "Prism", "Iris", "Mirage", "Lyra", "Bloom", "Zephyr", "Opaque"],
        suffixes: {
          ascii: ["_glow", "_soft", "_bloom", "_dream", "_haze"],
          unicode: ["✦", "☽", "◈", "⋆", "°"],
        },
      },
      Cool: {
        prefixes: { ascii: ["Dark_", "Neo_", "Cyber_", "Void_", "Ultra_"] },
        words: ["Server", "Bot", "Dev", "Token", "Node", "Core", "API", "Cache", "Proxy", "Stack", "Sync", "Nexus"],
        suffixes: { ascii: ["_x", "_dev", "_gg", "_v2", "_zero", "_pro"] },
      },
      Funny: {
        prefixes: { ascii: ["im_", "local_", "not_a_", "your_", "just_"] },
        words: ["Ping", "Meme", "Vibe", "Chaos", "Admin", "Troll", "Mod", "Nerd", "Lurker", "Lag", "Afk", "Spam"],
        suffixes: { ascii: ["_lol", "_xd", "_bruh", "_irl", "_rip"] },
      },
      Cute: {
        prefixes: { ascii: ["tiny_", "sweet_", "fluffy_", "itsy_", "baby_", "lil_"] },
        words: ["Mochi", "Biscuit", "Pudding", "Pebble", "Sprinkle", "Clover", "Daisy", "Maple", "Cinnamon", "Honey", "Petal", "Boba"],
        suffixes: { ascii: ["_uwu", "_owo", "_soft", "xo", "_pink", "_bb"] },
      },
      Unique: {
        prefixes: { ascii: ["xn_", "qz_", "zr_", "vy_", "kx_", "nv_"] },
        words: ["Axiom", "Quasar", "Zephyr", "Lyric", "Vesper", "Noctis", "Lazuli", "Selene", "Aether", "Soleil", "Tempest", "Vexil"],
        suffixes: { ascii: ["_ix", "_og", "_rare", "_unit", "_onyx"] },
      },
    },
    faq: [
      { q: "Quelles sont les règles pour un username Discord en 2025 ?", a: "Depuis la mise à jour Discord de 2023, les usernames sont entièrement uniques (sans discriminateur #1234). Ils doivent faire entre 2 et 32 caractères et n'acceptent que les lettres, chiffres, underscores (_) et points (.). Les espaces et emojis ne sont pas autorisés dans le username (mais sont acceptés dans le display name)." },
      { q: "Comment changer son username Discord ?", a: "Ouvre Discord, clique sur ton avatar en bas à gauche > Modifier le profil > Nom d'utilisateur. Entre ton nouveau nom et confirme avec ton mot de passe. Le changement est gratuit et immédiat." },
      { q: "Quelle est la différence entre username et display name sur Discord ?", a: "Le username (@nom) est unique sur toute la plateforme et sert à identifier ton compte. Le display name est le nom affiché et peut être différent — il accepte les espaces, accents et emojis. NickGen génère des usernames (le champ unique), pas les display names." },
      { q: "Peut-on avoir des emojis dans un username Discord ?", a: "Non, les emojis ne sont pas autorisés dans le username Discord (@username). Ils sont acceptés dans le display name. Avec le toggle Symbols de NickGen, des caractères Unicode proches des emojis (✦, ☽, ◈) sont ajoutés — vérifie leur compatibilité avec Discord avant de valider." },
      { q: "Est-ce que NickGen génère des usernames Discord disponibles ?", a: "NickGen génère des combinaisons originales maximisant les chances de disponibilité, sans vérification en temps réel. Après avoir copié ton pseudo, essaie de changer ton username dans les paramètres Discord pour vérifier. Si le nom est pris, génère 5 nouvelles options avec le bouton '+5 pseudos'." },
    ],
  },

  // ── TikTok ───────────────────────────────────────────────────────────────────
  tiktok: {
    name: "TikTok",
    badge: "TIKTOK",
    slug: "/tiktok-username-generator",
    headline: "TikTok Username Generator",
    tagline: "Find the perfect TikTok username to grow your account and go viral",
    styles: ["Viral", "Aesthetic", "Clean", "Funny", "Influencer"],
    defaultStyle: "Viral",
    nameData: {
      Viral: {
        prefixes: { ascii: ["its_", "notthe", "official_", "real_", "the"] },
        words: ["Trending", "Viral", "FYP", "Views", "Duet", "Wave", "Clip", "Vibe", "Slay", "Hit", "Trend", "Content"],
        suffixes: { ascii: ["_tv", "tok", "_official", ".fy", "_clips"] },
      },
      Aesthetic: {
        prefixes: {
          ascii: ["soft.", "luna.", "star.", "its.", "mellow."],
          unicode: ["✦", "☽", "◈", "★"],
        },
        words: ["Celestial", "Dreamy", "Neon", "Pastel", "Bloom", "Mellow", "Haze", "Glow", "Lush", "Velvet", "Drift", "Lune"],
        suffixes: {
          ascii: [".glow", "_soft", ".lush", "_dreamy"],
          unicode: ["✦", "☽"],
        },
      },
      Clean: {
        prefixes: { ascii: ["its", "the", "just", "only", "hey"] },
        words: ["Clean", "Simple", "Clear", "Neat", "Sharp", "Light", "Pure", "Fresh", "Crisp", "Smooth", "Calm", "Still"],
        suffixes: { ascii: ["x", "1", "7", "99", "0"] },
      },
      Funny: {
        prefixes: { ascii: ["im_a_", "just_", "local_", "literally_", "not_"] },
        words: ["Chaotic", "POV", "Unhinged", "Gremlin", "Goblin", "Clown", "Awkward", "NPC", "Flop", "Era", "Rat", "Chaos"],
        suffixes: { ascii: [".exe", "_irl", "_pov", "_era", "_szn"] },
      },
      Influencer: {
        prefixes: { ascii: ["its", "im", "just", "hey", "xo"] },
        words: ["Creator", "Content", "Brand", "Daily", "Life", "Vibes", "Energy", "Goals", "World", "Show", "Story", "Journey"],
        suffixes: { ascii: ["_official", "_daily", "_tv", "_studio", "_creates"] },
      },
    },
    faq: [
      { q: "Quelles sont les règles pour un username TikTok ?", a: "Un username TikTok doit faire entre 2 et 24 caractères. Il accepte les lettres, chiffres, underscores (_) et points (.). Les espaces, emojis et symboles spéciaux ne sont pas autorisés. Le username est unique sur toute la plateforme et visible sur ton profil public." },
      { q: "Comment changer son username TikTok ?", a: "Ouvre TikTok, va dans Profil > Modifier le profil > Nom d'utilisateur. TikTok limite les changements de username à une fois tous les 30 jours. Choisis bien ton pseudo avec NickGen avant de valider — tu devras attendre un mois pour le modifier à nouveau." },
      { q: "Peut-on utiliser des points dans un username TikTok ?", a: "Oui, les points (.) sont autorisés dans les usernames TikTok. C'est une particularité qui permet des formats comme 'its.aurora' ou 'luna.glow' très populaires dans les niches aesthetic et lifestyle." },
      { q: "Quel username TikTok favorise l'algorithme ?", a: "L'algorithme TikTok n'est pas directement influencé par le username, mais un pseudo mémorable et cohérent avec ta niche aide à la reconnaissance et au bouche-à-oreille. Un username court, unique et facile à mentionner dans les commentaires augmente naturellement ta découvrabilité." },
      { q: "NickGen génère-t-il des usernames TikTok disponibles ?", a: "NickGen génère des combinaisons originales avec de bonnes chances d'être disponibles, sans vérification en temps réel. Après avoir copié ton pseudo préféré, essaie de changer ton username dans les paramètres TikTok pour vérifier sa disponibilité." },
    ],
  },
};
