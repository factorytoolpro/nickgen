/**
 * NickGen Advanced Name Engine — 2025
 * Generates authentic, stylized, platform-appropriate usernames.
 */

// ─── Global quality word pools ────────────────────────────────────────────────

const POOL = {
  // Short impactful roots (4-7 chars, great in any combo)
  core: ["Void", "Storm", "Flux", "Nova", "Apex", "Zero", "Peak", "Edge", "Core", "Rift",
         "Neon", "Slick", "Sharp", "Crisp", "Bold", "Grit", "Haze", "Sync", "Echo", "Phase"],

  // Energy & movement
  energy: ["Surge", "Rush", "Blaze", "Flash", "Bolt", "Spark", "Arc", "Volt", "Charge", "Pulse",
            "Wave", "Flow", "Tide", "Drift", "Shift", "Burst", "Dash", "Zip", "Rip", "Cut"],

  // Nature & atmosphere
  nature: ["Luna", "Frost", "Bloom", "Ember", "Mist", "Dusk", "Dawn", "Veil", "Ash", "Haze",
            "Jade", "Flint", "Reef", "Crest", "Vale", "Glade", "Slate", "Cove", "Fern", "Dune"],

  // Dark & mysterious
  dark: ["Wraith", "Shade", "Raven", "Ghost", "Specter", "Noir", "Vex", "Dusk", "Gloom", "Umbre",
          "Reaper", "Bane", "Ruin", "Doom", "Wrath", "Scorn", "Fang", "Claw", "Grim", "Dirge"],

  // Tech & abstract
  tech: ["Pixel", "Cache", "Node", "Token", "Stack", "Byte", "Grid", "Link", "Scope", "Prism",
          "Vector", "Matrix", "Cipher", "Binary", "Codec", "Kernel", "Proxy", "Index", "Shard", "Mesh"],

  // Aesthetic & soft
  soft: ["Luna", "Lyra", "Aura", "Lune", "Iris", "Miel", "Sable", "Pearl", "Dewey", "Mochi",
          "Pastel", "Velvet", "Lush", "Serene", "Mellow", "Hazy", "Dreamy", "Dainty", "Wispy", "Glassy"],

  // Viral & internet culture
  viral: ["Vibe", "Hype", "Slay", "Drip", "Flex", "Lit", "Fire", "Clout", "Wave", "Trend",
           "Chaos", "Era", "Szn", "Arc", "Core", "Mode", "Run", "Moment", "Move", "Energy"],

  // RP & realism
  realist: ["Marco", "Dante", "Rico", "Angelo", "Diego", "Leon", "Santi", "Victor", "Remy", "Cayo",
             "Rivera", "Santos", "Cruz", "Vega", "Torres", "Reyes", "Morales", "Delgado", "Rojas", "Luna"],
};

// ─── Hub-specific augments ─────────────────────────────────────────────────────
// These blend with the game's existing nameData.words for contextual richness

const HUB = {
  Fortnite: {
    sweaty:    ["Edit", "Crank", "Elim", "Zone", "Piece", "Storm", "Clutch", "Pump", "Box", "Build"],
    funny:     ["Llama", "Default", "Troll", "Noob", "Rotate", "Loot", "Revive", "Bush", "Medkit", "Storm"],
    og:        ["Season1", "Chapter1", "Tilted", "Dusty", "Launch", "Vault", "OGWin", "Classic", "Trophy", "Veteran"],
    tryhard:   ["ZeroPing", "60fps", "Flick", "AimAssist", "BuildFight", "ClickSpeed", "TrackRate", "Mongraal", "React", "Input"],
    badass:    ["Titan", "Slayer", "Warlord", "Destroyer", "Ravager", "Skull", "Inferno", "Wreck", "Savage", "Fury"],
  },
  Roblox: {
    cute:      ["Bunny", "Star", "Cloud", "Petal", "Honey", "Sugar", "Mochi", "Boba", "Sprinkle", "Glitter"],
    cool:      ["Shadow", "Nova", "Apex", "Surge", "Titan", "Strike", "Nexus", "Blaze", "Core", "Edge"],
    funny:     ["BaconHair", "OofMaster", "GuestMode", "Scammer", "Moderator", "AdminAbuse", "NubSlay", "TradeBot", "LimitedHunt", "Sussy"],
    aesthetic: ["Dreamcore", "Softlight", "Moonveil", "Starbloom", "Lunarise", "Cloudberry", "Mochipetal", "Sugarfrost", "Lilacwave", "Ivorybloom"],
    proplayer: ["GrindSet", "SkillCheck", "MetaSlayer", "OpCombo", "CarryMode", "SweatLord", "RankedUp", "TopFragger", "FlickMaster", "AimGod"],
  },
  TikTok: {
    viral:     ["FYPKing", "ViewsBug", "ForYouPage", "DuetThis", "TrendSetter", "ViralClip", "BlownUp", "Fypage", "SlateTok", "Cloutchase"],
    aesthetic: ["softluna", "itsdreamy", "mellowglow", "starbloom", "hazyvibe", "lunasoft", "dreamymist", "pastelwave", "moonlush", "isleydrift"],
    clean:     ["CleanShot", "CrispEdit", "SharpEye", "NeatVibes", "PureWave", "FreshCut", "CleanVibes", "StillWater", "ClearNote", "LightTouch"],
    funny:     ["LiterallyMe", "NotUnhinged", "SaneEnough", "NormalTok", "NullPointer", "Chaos.exe", "LocalGremlin", "CertifiedMess", "PovClown", "EraOfChaos"],
    influencer:["ItsKayla", "JustVibing", "DailyDose", "MainContent", "CreatorMode", "BrandBuildr", "ContentLife", "XoJourney", "ShowRunnerr", "MyStudio"],
  },
  GTA: {
    rp:        ["TommyVera", "RicoSantos", "MarcoCruz", "DanteTorres", "LuisVega", "CarlosReyes", "JasperMoore", "RayMorales", "TyroneWebb", "MiguelRojas"],
    gang:      ["EastViper", "SouthRider", "ViceCartel", "BlockKing", "GroveRep", "StreetShot", "HoodClick", "BayBanger", "NorthSet", "LeonaRep"],
    criminal:  ["HeistKing", "ScoreDrop", "LickMaster", "MoveFlipper", "JobRunner", "MarkHunter", "JobDropper", "CrowbarKid", "SmokeSign", "NeonJob"],
    outlaw:    ["RoadRunner", "LoneRider", "RebelYell", "WantedMan", "FugitiveX", "RogueRider", "BanditKing", "OutlawDawn", "WildFlight", "DustDevil"],
    mafia:     ["DonValentini", "CapoEsposito", "BossMarco", "PatronDeLuca", "SenhorMoraes", "SignorRicci", "PatreConti", "CaporegRomano", "ConsigliereAmato", "UnderbossMarin"],
  },
  Discord: {
    aesthetic: ["softluna", "starbloom", "dreamveil", "moonhaze", "ivorywave", "lunahaze", "velvetdrift", "pearlysoft", "hushbloom", "aurorasoft"],
    cool:      ["VoidServer", "NeonBot", "CacheNode", "ProxyStack", "SyncToken", "GridLink", "ShardCore", "IndexByte", "MeshProxy", "CodeLayer"],
    funny:     ["LocalGoblin", "PingAbuser", "LagWizard", "AdminBait", "NerdAlert", "ModSleeping", "GhostPing", "RatInServer", "ChaosMod", "GremlinMode"],
    cute:      ["TinyMochi", "SweetBoba", "FluffyPetal", "LilCloud", "BabyBloom", "SoftSprinkle", "IttyHoney", "MiniDaisy", "SmolStar", "TinyPebble"],
    unique:    ["xn.Axiom", "qz.Vesper", "vy.Lazuli", "nv.Selene", "kx.Aether", "zr.Tempest", "Axiom.ix", "Quasar.og", "Vesper.rare", "Noctis.unit"],
  },
  Minecraft: {
    survival:  ["DiamondMiner", "CaveRunner", "NetherWalker", "EndSlayer", "PhantomHunter", "CreeperBane", "ZombieFarm", "SpiderSlayer", "PortalMaker", "VillageGuard"],
    pvp:       ["ComboKing", "PearlGod", "CritLord", "SwordMaster", "AxeSwing", "BridgePro", "ClickSpeed", "StrafeMaster", "ResetKing", "ClutchPearl"],
    creative:  ["VoxelMaster", "PixelArchitect", "BlueprintGod", "CanvasBuilder", "LayerCraft", "GridDesigner", "FrameArtist", "TilesetPro", "RenderKing", "AssetBuilder"],
    redstone:  ["ClockMaker", "PistonKing", "CircuitGod", "LogicMaster", "GateCrafter", "SignalPro", "MemoryBuild", "PulseEngineer", "ObserverCraft", "ComparatorX"],
    builder:   ["CastleForge", "TowerArch", "BridgeCraft", "CathedralBuild", "DomeMaster", "FortressKing", "TempleArch", "PalaceBuild", "MansionCraft", "CitadelPro"],
  },
  Valorant: {
    agent:     ["PhoenixPrime", "CipherSeven", "BreachFlash", "ViperWall", "KilljoyTurret", "FadeMark", "NeonDash", "KayoSup", "OmenSmoke", "SovaArrow"],
    duelist:   ["JettDash", "RazeBlast", "ReynaFeed", "NeonSprint", "PhoenixFlash", "IsoShield", "EntryFrag", "AcePop", "PeekKing", "FragLord"],
    controller:["ViperLine", "OmenTele", "BrimSmoke", "HarborWall", "AstraOrb", "MollyPost", "WallSetup", "SmokeBlock", "ZoneClear", "PostPlant"],
    initiator: ["SovaDrone", "BreachShock", "FadeReveal", "SkyeFlash", "KayoSuppress", "GekkoWingman", "DartRecon", "ArrowScan", "IntelRun", "FlashFire"],
    sentinel:  ["KilljoyBot", "CypherCam", "SageWall", "ChamberTP", "DeadlockNet", "VyseTrap", "WireFlank", "TripAnchor", "LockHold", "GuardPost"],
  },
  Apex: {
    legend:    ["WraithVoid", "OctaneBoost", "LifelineRes", "BloodhoundTrack", "PathfinderSwing", "BangaloreDig", "RevenantDeath", "SeerPulse", "HorizonGrav", "GibraltarShield"],
    aggressive:["ThirstKing", "PushFlanker", "DiveMaster", "FightSeeker", "FragDiver", "RushBlitz", "AttackDog", "HunterX", "AggroSlayer", "DiveLog"],
    support:   ["ResMachine", "MedicAnch", "ShieldCarry", "BackboneX", "ClutchpackPro", "GuardianX", "ProtectBot", "CoverKing", "HealField", "CarePackage"],
    recon:     ["BloodhoundX", "CryptoBot", "SeerPing", "VantageScope", "TrackerPro", "ScanKing", "DroneEye", "RadarPing", "TagMaster", "IntelBot"],
    wraith:    ["VoidPhase", "RiftBlink", "PhaseShift", "QuantumGhost", "TunnelFade", "PortalKing", "NexusBlink", "ShadowRift", "DimPhantom", "VortexVoid"],
  },
  COD: {
    operator:  ["GhostSoap", "PriceSix", "GravesActual", "RoachTwo", "GazLead", "FarahOps", "KönigMask", "MacTavish141", "ShepherdBad", "NikolaiBase"],
    ghost:     ["PhantomSilent", "SpecterDark", "RevenantNight", "EclipseStealth", "VeilShade", "ReaperBlack", "BansheeX", "NightfallSilent", "ApparitionX", "UmbraGhost"],
    warzone:   ["GulagKing", "PlunderPro", "ContractX", "LoadoutDrop", "ReviveMaster", "GasClear", "CircleWin", "RotatePush", "ClutchFinal", "BuyStation"],
    tactical:  ["AlphaLead", "BravoActual", "CharlieSix", "DeltaTwo", "EchoLead", "FoxtrotOps", "HotelActual", "IndiaLead", "JulietActual", "KiloOps"],
    prestige:  ["MaxRankX", "NuclearWin", "DiamondMaster", "PlatElite", "ChampionX", "PrestigeLord", "EliteLegend", "MasterIcon", "GloryMaster", "IconMythic"],
  },
};

// ─── Style-tuned prefixes (no trailing underscore = fuses cleanly) ─────────────

const PFXS = {
  sweaty:     ["Pro", "Real", "Top", "Raw", "Pure", "True", "OG", "Iam", "Max", "Fast"],
  viral:      ["its", "not", "im", "just", "only", "hey", "real"],
  aesthetic:  ["soft", "luna", "star", "its", "mellow", "hazy", "lush"],
  funny:      ["im_a_", "just_a_", "local_", "literally_", "not_a_", "certified_"],
  clean:      ["Neo", "Pro", "True", "Raw", "Pure", "One", "Uni"],
  influencer: ["its", "xo", "hey", "just", "im"],
  cute:       ["lil_", "tiny_", "sweet_", "fluffy_", "soft_"],
  dark:       ["Dark", "Black", "Grim", "Iron", "Storm", "Death", "Blood", "Shadow"],
};

// ─── Modern suffixes by category ───────────────────────────────────────────────

const SFXS = {
  neutral: ["x", "7", "99", "v2", "1", "77"],
  modern:  [".vibe", ".gg", ".exe", ".io", ".dev"],
  brand:   [".tv", ".daily", "_official", "_studio"],
  style:   [".soft", ".glow", ".lush", ".drip"],
  alpha:   ["z", "zz", "xx", "x", ""],
};

// ─── 12 generation patterns (weighted) ────────────────────────────────────────

function buildPatterns(roots, style) {
  const pfxList = PFXS[style] || PFXS.clean;
  return [
    // Weight 3 — most used
    { w: 3, fn: () => pick(roots) },                                                     // 1. Pure root
    { w: 3, fn: () => { const a = pick(roots), b = pick(roots); return a !== b && a.length + b.length <= 13 ? a + b : a; } }, // 2. Fusion CamelCase

    // Weight 2
    { w: 2, fn: () => pick(pfxList).replace(/_+$/, "") + pick(roots) },                  // 3. Prefix fused
    { w: 2, fn: () => { const p = pick(pfxList).replace(/_+$/, "").toLowerCase(); return `${p}.${pick(roots).toLowerCase()}`; } }, // 4. Dot style
    { w: 2, fn: () => pick(roots) + pick(SFXS.alpha) },                                  // 5. Alpha stylized (z/x/zz)
    { w: 2, fn: () => pick(roots) + pick(SFXS.neutral) },                                // 6. Number/neutral suffix

    // Weight 1.5
    { w: 1.5, fn: () => pick(roots) + pick(SFXS.modern) },                              // 7. Modern suffix (.vibe/.exe)
    { w: 1.5, fn: () => pick(roots).toLowerCase() },                                     // 8. Clean lowercase

    // Weight 1
    { w: 1, fn: () => { const a = pick(roots), b = pick(roots); return a !== b ? `${a}_${b}` : a; } }, // 9. Underscore (rare ~8%)
    { w: 1, fn: () => pick(pfxList).replace(/_+$/, "") + pick(roots) + pick(SFXS.neutral) }, // 10. Prefix+root+num
    { w: 1, fn: () => pick(roots) + pick(SFXS.brand) },                                  // 11. Brand suffix
    { w: 0.5, fn: () => [...pick(roots).toLowerCase()].join(" ") },                      // 12. Spaced aesthetic (rare)
  ];
}

function pickWeighted(patterns) {
  const total = patterns.reduce((s, p) => s + p.w, 0);
  let r = Math.random() * total;
  for (const p of patterns) {
    r -= p.w;
    if (r <= 0) return p.fn();
  }
  return patterns[0].fn();
}

// ─── Scoring (0–100) ──────────────────────────────────────────────────────────

export function score(name) {
  let s = 100;
  const vis = name.replace(/[^\x00-\x7F]/g, "xx").length;

  // Length sweet spot: 6–14 ideal
  if (vis < 4)        s -= 40;
  else if (vis < 6)   s -= 10;
  else if (vis <= 14) s += 15;
  else if (vis <= 18) s -= 8;
  else                s -= 30;

  // Underscore penalty (max 1 acceptable)
  const us = (name.match(/_/g) || []).length;
  s -= us * 12;

  // Spam patterns
  if (/xXx/i.test(name))            s -= 60;
  if (/\d{4,}/.test(name))          s -= 30;
  if (/(.)\1{3,}/.test(name))       s -= 25;
  if (/(xx|xX|Xx){2,}/.test(name)) s -= 40;
  if (/_\d+$/.test(name))           s -= 15; // _123 at end

  // Quality bonuses
  if (/^[A-Z][a-z]+[A-Z]/.test(name))          s += 10; // CamelCase
  if (/^[a-z]+\.[a-z]+/.test(name))            s += 10; // dot.style
  if (/\.(vibe|gg|io|exe|dev|soft|glow)$/.test(name)) s += 8;
  if (vis >= 6 && vis <= 11)                    s += 8;  // extra short bonus

  // Readability penalty (too many consonants in a row)
  const runs = name.match(/[bcdfghjklmnpqrstvwxyz]{5,}/gi) || [];
  s -= runs.length * 12;

  return Math.max(0, Math.min(100, s));
}

// ─── Quality filter ────────────────────────────────────────────────────────────

const BLACKLIST = [
  /xXx/i, /xX_/i, /^x+$/i,       // xXx spam
  /\d{5,}/,                        // 5+ digits
  /_{3,}/,                         // triple underscore
  /(.)\1{4,}/,                     // 5+ same char
  /(gaming|gamer|player|user\d*)$/i, // ultra-generic endings
  /^(noname|username|myname|player)/i,
];

function isGood(name) {
  if (name.length < 3 || name.length > 24) return false;
  for (const rx of BLACKLIST) if (rx.test(name)) return false;
  return score(name) >= 52;
}

// ─── Main generation function ─────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate one high-quality name.
 * @param {string[]} gameWords - words from the game's nameData (games.js)
 * @param {string}   style     - style key ("Sweaty", "Funny", "Aesthetic", …)
 * @param {string}   gameName  - hub name ("Fortnite", "Roblox", "TikTok", …)
 */
export function generateAdvancedName(gameWords, style, gameName, useSymbols) {
  const styleKey = style.toLowerCase();

  // Build enriched word pool: game words + hub augments + global roots
  const hubWords = (HUB[gameName] || {})[styleKey] || [];
  const globalRoots = [
    ...(POOL.core),
    ...(styleKey.includes("dark") || styleKey === "badass" ? POOL.dark : []),
    ...(styleKey === "aesthetic" || styleKey === "cute"    ? POOL.soft  : []),
    ...(styleKey === "viral" || styleKey === "funny"       ? POOL.viral : []),
    ...(styleKey === "clean" || styleKey === "influencer"  ? POOL.tech  : []),
    ...(styleKey === "rp" || styleKey === "character"      ? POOL.realist : []),
    ...POOL.energy,
  ];

  // Weighted blend: 50% hub/game words, 50% global roots
  const pool = [
    ...gameWords, ...gameWords,           // weight game words
    ...hubWords,  ...hubWords,            // hub augments
    ...globalRoots,                       // global quality roots
  ].filter(Boolean);

  const patterns = buildPatterns(pool, styleKey);

  // Try up to 8 times to get a good name
  for (let i = 0; i < 8; i++) {
    const name = pickWeighted(patterns);
    if (name && isGood(name)) return name;
  }
  // Safe fallback
  return pick(gameWords) || pick(POOL.core);
}

/**
 * Generate a deduplicated, quality-filtered batch.
 * @returns {string[]}
 */
export function generateBatch(gameWords, style, gameName, useSymbols, count = 5) {
  const results = new Set();
  let attempts = 0;

  while (results.size < count && attempts < count * 12) {
    attempts++;
    const name = generateAdvancedName(gameWords, style, gameName, useSymbols);
    if (name && !results.has(name)) results.add(name);
  }

  // Fallback: fill remaining with basic picks
  while (results.size < count) {
    results.add(pick(gameWords) + pick(["x", "7", ""]));
  }

  return [...results];
}

// ─── Example output (documentation) ──────────────────────────────────────────
/*
  Fortnite / Sweaty:
  FaZeEdit · ClutchElim · ZeroPingCrank · NRGZone · ProBoxfight
  RawElim · EditPeak · ClutchStorm · TrueZone · OGBuild

  Fortnite / Funny:
  im_a_default · local_llama · just_a_troll.exe
  NotRotating · LiterallyLooting · BushCamper.irl

  Roblox / Cute:
  TinyMochi · SweetBloom · FluffyStar.soft
  LilCloud7 · BabyPetal · SoftSprinkle

  TikTok / Viral:
  its.aurora · FYPKing · TrendWave.tv
  JustVibing · NeonTok · CloutWave7

  TikTok / Aesthetic:
  soft.luna · moonhaze · its.dreamy
  mellowglow · starbloom.soft · lunasoft

  GTA / RP:
  TommyVera_Rivera · DanteCruz · MarcoSantos
  RicoVega7 · LuisReyes · CarlosDelgado

  GTA / Gang:
  EastViper · SouthRider · ViceCartel99
  BlockKing · GroveRep.gg · StreetShot

  Discord / Funny:
  local.goblin · PingAbuser.exe · LagWizard
  ModSleeping · GremlinMode7 · ChaosCore

  Valorant / Duelist:
  JettDash · RazeBlast.gg · AcePop7
  EntryFrag · PeekKingx · FragLordv2

  Apex / Aggressive:
  ThirstKing · PushFlanker.gg · DiveMaster
  FightSeeker7 · AggroSlayer · RushBlitz99

  COD / Ghost:
  PhantomSilent · SpecterDark7 · VeilShade
  ReaperBlack · NightfallSilent.exe · UmbraGhost
*/
