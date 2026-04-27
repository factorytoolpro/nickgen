/**
 * NickGen Pro Engine v3 — Hub-isolated high-quality generation
 * Each hub has its own word banks. Universes never mix.
 */

// ─── Hub-isolated word banks ──────────────────────────────────────────────────

const BANKS = {
  Fortnite: {
    sweaty:    { roots: ["Edit","Crank","Elim","Clutch","Zone","Piece","Storm","Pump","Build","Boxfight","Layer","Reset","Sprint","Piece","ZeroPing"],            pfx: ["FaZe","NRG","C9","TSM","100T","Pro","Real","Top","Raw"],   sfx: ["TTV","YT","GG","W","Dubs","Clips","Edits"] },
    tryhard:   { roots: ["AimBot","FlickShot","ZeroPing","BuildFight","ClickTime","TrackRate","EditSpeed","ReactTime","Mongraal","60fps"],                         pfx: ["xX","0ms","Max","L33T","W1N"],                             sfx: ["999","666","TH","1v1","Ranked"] },
    funny:     { roots: ["Llama","Default","Noob","Camper","Loot","Troll","Rotate","Medkit","BushHide","Revive","Tilted","Storm"],                                  pfx: ["Im_A_","Just_","Local_","Free_","Your_"],                  sfx: ["_Lol","_Oof","_Bruh","_Ngl","_Fr"] },
    og:        { roots: ["Tilted","Dusty","Season1","Chapter1","Default","Veteran","Launch","Vault","OGWin","Classic","Trophy","S1"],                               pfx: ["OG_","S1_","Day1_","Real_","Chapter1_"],                   sfx: ["_OG","_S1","_2018","_Legacy","_Classic"] },
    badass:    { roots: ["Reaper","Titan","Slayer","Warlord","Destroyer","Skull","Inferno","Savage","Fury","Nemesis","Ravager","Wreck"],                            pfx: ["Dark","Storm","Iron","Black","Death","Grim"],              sfx: ["X","Z","_Prime","666","_Alpha","_Sigma"] },
    aesthetic: { roots: ["Lunar","Solar","Frost","Neon","Crystal","Aurora","Void","Phantom","Nexus","Seraph","Lyra","Aether"],                                     pfx: ["✦","☽","◈","★"],                                         sfx: ["✦","☽","◈","♡"] },
  },

  Roblox: {
    cute:      { roots: ["Bunny","Star","Cloud","Petal","Honey","Kawaii","Glitter","Angel","Mochi","Bloom","Sparkle","Sugar"],                                     pfx: ["Lil_","Sweet_","Baby_","Tiny_","Soft_"],                   sfx: ["_Uwu","_Soft","_Pink","Xo","_Bb"] },
    cool:      { roots: ["Shadow","Storm","Nova","Edge","Blaze","Strike","Titan","Nexus","Force","Core","Alpha","Surge"],                                           pfx: ["Dark_","Pro_","Ultra_","Epic_","Mega_"],                   sfx: ["_X","_Pro","_GG","_V2","_Elite"] },
    funny:     { roots: ["BaconHair","OofMaster","Troll","Lag","Scammer","Admin","Guest","Mod","Sussy","Impostor","Hacker","Noob"],                                 pfx: ["Im_","Local_","Fake_","NotA_","Just_"],                    sfx: ["_Oof","_Lol","_XD","_Bruh","_Banned"] },
    proplayer: { roots: ["Clutch","Carry","Grind","Meta","Combo","Skill","Slay","Aim","OP","Win","GrindSet","SweatLord"],                                          pfx: ["Top_","Pro_","God_","Elite_","Ranked_"],                   sfx: ["_Pro","_GG","_W","_TTV","_1v1"] },
    aesthetic: { roots: ["Lunar","Aurora","Crystal","Dreamer","Starlight","Moonbeam","Glimmer","Shimmer","Ethereal","Celestial","Twilight","Radiance"],            pfx: ["Soft_","Dream_","Moon_","Star_","Cloud_"],                 sfx: ["_Dream","_Glow","_Sky","_Star","_Moon"] },
  },

  TikTok: {
    viral:     { roots: ["FYP","Views","Duet","Clip","Vibe","Slay","Trend","Wave","Hit","Fire","Viral","Content"],                                                 pfx: ["its","notthe","official_","real_","the"],                  sfx: ["_tv","tok","_official",".fy","_clips"] },
    aesthetic: { roots: ["Celestial","Dreamy","Neon","Pastel","Bloom","Mellow","Haze","Glow","Lush","Velvet","Drift","Lune"],                                     pfx: ["soft.","luna.","star.","its.","mellow."],                  sfx: [".glow","_soft",".lush","_dreamy"] },
    clean:     { roots: ["Clean","Sharp","Light","Pure","Fresh","Crisp","Smooth","Calm","Still","Clear","Neat","Simple"],                                          pfx: ["its","the","just","only","hey"],                          sfx: ["x","1","7","99","0"] },
    funny:     { roots: ["Chaotic","POV","Unhinged","Gremlin","Goblin","Clown","Awkward","NPC","Flop","Era","Chaos","Rat"],                                        pfx: ["im_a_","just_","local_","literally_","not_"],              sfx: [".exe","_irl","_pov","_era","_szn"] },
    influencer:{ roots: ["Creator","Content","Brand","Daily","Life","Vibes","Energy","Goals","World","Show","Story","Journey"],                                    pfx: ["its","xo","hey","just","im"],                             sfx: ["_official","_daily","_tv","_studio","_creates"] },
  },

  GTA: {
    rp:        { roots: ["Rivera","Santos","Cruz","Torres","Vega","Martinez","Reyes","Castillo","Morales","Delgado","Ramirez","Espinoza"],                         pfx: ["Tommy_","Luis_","Carlos_","Marcus_","Rico_","Dante_"],     sfx: ["_RP","_305","_Vice","_VI"] },
    gang:      { roots: ["Cartel","Viper","Grove","Banger","Block","Hood","Rider","Click","Shot","Set","Rep","Kingpin"],                                           pfx: ["East_","South_","Vice_","Leonida_","Beach_"],              sfx: ["_Gang","_Set","_Block","_Hood","_Click"] },
    criminal:  { roots: ["Heist","Score","Hustle","Grind","Chase","Paper","Drip","Stack","Flip","Drop","Lick","Flow"],                                             pfx: ["Vice_","Miami_","Neon_","South_","305_"],                  sfx: ["_VC","_305","_786","_Bando"] },
    outlaw:    { roots: ["Bandit","Outlaw","Renegade","Maverick","Drifter","Fugitive","Desperado","Rogue","Exile","Wanted","Runaway","Vagrant"],                   pfx: ["Wild_","Free_","Lone_","Rebel_","Rogue_"],                 sfx: ["_666","_Wanted","_Law","_Free","_Out"] },
    mafia:     { roots: ["Valentini","Esposito","DeLuca","Marchetti","Carbone","Ricci","Romano","Ferraro","Conti","Moretti","Barbieri","Amato"],                   pfx: ["Don_","Il_","La_","Capo_","Boss_"],                        sfx: ["_Don","_Capo","_Boss","_Famiglia"] },
    character: { roots: ["Valentino","Esposito","DeLuca","Marchetti","Carbone","Ricci","Romano","Ferraro","Conti","Marino","Leone","Riva"],                        pfx: ["Vice_","Miami_","Neon_","Palm_","Ocean_"],                 sfx: ["_VC","_305","_VI","_Vice","_786"] },
  },

  Minecraft: {
    survival:  { roots: ["Diamond","Creeper","Enderman","Nether","Cave","Spider","Zombie","Village","Portal","Chest","Mine","Harvest"],                           pfx: ["Cave_","Deep_","Wild_","Dark_","Lost_"],                   sfx: ["_SMP","_MC","_S1","_Cave","_Craft"] },
    pvp:       { roots: ["Combo","Crit","Sword","Axe","Strafe","Pearl","Duel","Click","Knockback","Bridge","Reset","Clutch"],                                      pfx: ["xX_","God_","Top_","Click_","Kill_"],                     sfx: ["_PvP","_CPS","_GG","_1v1","_Combo"] },
    creative:  { roots: ["Pixel","Blueprint","Voxel","Canvas","Render","Sketch","Layer","Grid","Frame","Asset","Palette","Tileset"],                              pfx: ["Pixel_","Map_","Build_","Art_","Design_"],                 sfx: ["_Build","_Map","_Dev","_Art","_Create"] },
    redstone:  { roots: ["Piston","Comparator","Repeater","Dispenser","Hopper","Observer","Dropper","Clock","Memory","Gate","Pulse","Timer"],                     pfx: ["Logic_","Circuit_","Clock_","Gate_","Signal_"],            sfx: ["_RS","_RC","_Logic","_Clock","_Bot"] },
    builder:   { roots: ["Castle","Tower","Bridge","Cathedral","Arch","Dome","Fortress","Temple","Palace","Citadel","Mansion","Hamlet"],                          pfx: ["Master_","Epic_","Grand_","Mega_","Pro_"],                 sfx: ["_Build","_Craft","_Arch","_GG","_MC"] },
  },

  Valorant: {
    agent:      { roots: ["Cipher","Phoenix","Breach","Viper","Killjoy","Fade","Neon","KayO","Omen","Sova","Jett","Sage"],                                        pfx: ["Op_","Agent_","Zero_","Delta_","Echo_"],                   sfx: ["_VII","_Prime","_GE","_EU","_NA"] },
    duelist:    { roots: ["Jett","Raze","Reyna","Neon","Phoenix","Iso","Dash","Ace","Entry","Flash","Frag","PopFlash"],                                            pfx: ["Rush_","Entry_","Frag_","Ace_","Peek_"],                   sfx: ["_Ace","_Frag","_Entry","_Duel","_Aim"] },
    controller: { roots: ["Viper","Omen","Brimstone","Harbor","Astra","Smokes","Molly","Orbit","Wall","Block","Setup","Control"],                                 pfx: ["Smoke_","Post_","Line_","Zone_","Setup_"],                 sfx: ["_Smoke","_Post","_Zone","_Line","_Setup"] },
    initiator:  { roots: ["Sova","Breach","Fade","Skye","KayO","Gekko","Drone","Arrow","Recon","Intel","Ult","Reveal"],                                           pfx: ["Flash_","Recon_","Scan_","Dart_","Info_"],                 sfx: ["_Intel","_Info","_Scan","_Recon","_Flash"] },
    sentinel:   { roots: ["Killjoy","Cypher","Sage","Chamber","Deadlock","Vyse","Turret","Wire","Flank","Trip","Anchor","Watch"],                                 pfx: ["Lock_","Flank_","Trip_","Wire_","Hold_"],                  sfx: ["_Lock","_Guard","_Watch","_Trip","_Flank"] },
  },

  Apex: {
    legend:     { roots: ["Wraith","Octane","Lifeline","Bloodhound","Pathfinder","Bangalore","Revenant","Seer","Horizon","Gibraltar","Catalyst","Ballistic"],     pfx: ["Apex_","Pred_","Master_","Plat_","Gold_"],                 sfx: ["_TTV","_Pred","_Master","_Mains","_GG"] },
    aggressive: { roots: ["Thirsti","Pusher","Flanker","Diver","Fighter","Fragger","Rusher","Aggro","Slayer","Hunter","Grinder","Blitz"],                          pfx: ["Rush_","Push_","Thirst_","Fight_","Down_"],                sfx: ["_Kills","_Frag","_Rush","_TTV","_W"] },
    support:    { roots: ["Lifeline","Medic","Reviver","Backbone","Clutchpack","Guardian","Shield","Carrier","Anchor","Cover","Heal","Protect"],                  pfx: ["Res_","Revive_","Carry_","Save_","Shield_"],               sfx: ["_Res","_Heal","_Support","_GG","_TTV"] },
    recon:      { roots: ["Bloodhound","Crypto","Seer","Vantage","Tracker","Scanner","Drone","Radar","Ping","Tag","Intel","Sensor"],                              pfx: ["Scout_","Track_","Eye_","Scan_","Drone_"],                 sfx: ["_Scan","_Eye","_Track","_Intel","_Tag"] },
    wraith:     { roots: ["Void","Rift","Phase","Nexus","Portal","Ghost","Fade","Shadow","Quantum","Phantom","Blink","Tunnel"],                                   pfx: ["Void_","Rift_","Phase_","Into_","Quantum_"],               sfx: ["_Void","_Rift","_Ghost","_Phase","_Dark"] },
  },

  COD: {
    operator:  { roots: ["Ghost","Soap","Price","Graves","Roach","Gaz","Farah","König","Shepherd","Makarov","Alejandro","Horangi"],                               pfx: ["Sgt_","Spec_","Op_","Cpt_","Lt_"],                        sfx: ["_141","_Ops","_Actual","_Six","_Lead"] },
    ghost:     { roots: ["Phantom","Specter","Revenant","Eclipse","Veil","Reaper","Banshee","Nightfall","Shade","Wraith","Apparition","Umbra"],                   pfx: ["Shadow_","Dark_","Silent_","Black_","Night_"],             sfx: ["_Ghost","_Shadow","_Dark","_Recon","_Silent"] },
    warzone:   { roots: ["Gulag","Plunder","Contract","Loadout","Revive","Gas","Circle","Rotate","Clutch","Final","Loot","Bounty"],                               pfx: ["WZ_","Gulag_","Circle_","Drop_","Gas_"],                  sfx: ["_WZ","_Dub","_Win","_GG","_Drop"] },
    tactical:  { roots: ["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Hotel","India","Juliet","Kilo","Lima","Sierra"],                                     pfx: ["Alpha_","Bravo_","Charlie_","Delta_","Echo_"],            sfx: ["_Actual","_Lead","_Two","_Six","_Ops"] },
    prestige:  { roots: ["MaxRank","Nuclear","Diamond","Platinum","Champion","Prestige","Elite","Legend","Master","Glory","Icon","Myth"],                         pfx: ["Max_","Nuke_","Diamond_","Gold_","Damasc_"],              sfx: ["_P10","_Master","_Elite","_Legend","_GG"] },
  },

  Discord: {
    aesthetic: { roots: ["Luminous","Celestial","Velvet","Solace","Aurora","Prism","Iris","Mirage","Lyra","Bloom","Zephyr","Opaque"],                            pfx: ["Soft_","Luna_","Star_","Neon_","Dream_"],                  sfx: ["_glow","_soft","_bloom","_dream","_haze"] },
    cool:      { roots: ["Server","Bot","Dev","Token","Node","Core","API","Cache","Proxy","Stack","Sync","Nexus"],                                                pfx: ["Dark_","Neo_","Cyber_","Void_","Ultra_"],                  sfx: ["_x","_dev","_gg","_v2","_zero"] },
    funny:     { roots: ["Ping","Meme","Vibe","Chaos","Admin","Troll","Mod","Nerd","Lurker","Lag","Afk","Spam"],                                                  pfx: ["im_","local_","not_a_","your_","just_"],                   sfx: ["_lol","_xd","_bruh","_irl","_rip"] },
    cute:      { roots: ["Mochi","Biscuit","Pudding","Pebble","Sprinkle","Clover","Daisy","Maple","Cinnamon","Honey","Petal","Boba"],                             pfx: ["tiny_","sweet_","fluffy_","itsy_","baby_"],                sfx: ["_uwu","_owo","_soft","xo","_pink"] },
    unique:    { roots: ["Axiom","Quasar","Zephyr","Lyric","Vesper","Noctis","Lazuli","Selene","Aether","Soleil","Tempest","Vexil"],                              pfx: ["xn_","qz_","zr_","vy_","kx_"],                            sfx: ["_ix","_og","_rare","_unit","_onyx"] },
  },
};

// ─── Rare mutations ────────────────────────────────────────────────────────────

const LEET = { a:"4", e:"3", i:"1", o:"0", s:"5", t:"7" };
function leet(word) {
  let count = 0;
  return [...word].map(c => {
    if (count < 2 && LEET[c.toLowerCase()] && Math.random() < 0.45) {
      count++;
      return LEET[c.toLowerCase()];
    }
    return c;
  }).join("");
}

function bracketWrap(word) {
  const styles = [
    w => `[${w}]`, w => `{${w}}`, w => `(${w})`,
    w => `⌈${w}⌉`, w => `『${w}』`, w => `【${w}】`,
  ];
  return p(styles)(word);
}

function mirrorCaps(word) {
  // Alternate caps inversion: "Storm" → "sToRm"
  return [...word].map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("");
}

// ─── 12 patterns with rarity + weights ────────────────────────────────────────

function patterns(bank) {
  const { roots, pfx, sfx } = bank;
  const cleanPfx = () => p(pfx).replace(/^_+|_+$/g, "");
  const cleanSfx = () => p(sfx).replace(/^_+/, "");

  return [
    // ── COMMON (weight 2–3) ─────────────────────────────────────────────────
    { rarity: "common",    w: 3.0, fn: () => p(roots) },
    { rarity: "common",    w: 2.5, fn: () => { const a=p(roots),b=p(roots); return a!==b && a.length+b.length<=13 ? a+b : a; } },
    { rarity: "common",    w: 2.0, fn: () => cleanPfx() + p(roots) },
    { rarity: "common",    w: 2.0, fn: () => p(roots) + p(["x","7","99","47","1","77"]) },
    { rarity: "common",    w: 1.8, fn: () => p(roots).toLowerCase() },
    { rarity: "common",    w: 1.5, fn: () => p(roots) + p(["z","x","zz","xx"]) },

    // ── RARE (weight 0.8–1.3) ───────────────────────────────────────────────
    { rarity: "rare",      w: 1.3, fn: () => `${cleanPfx().toLowerCase()}.${p(roots).toLowerCase()}` },
    { rarity: "rare",      w: 1.1, fn: () => p(roots) + p([".vibe",".gg",".exe",".io",".dev"]) },
    { rarity: "rare",      w: 0.9, fn: () => { const a=p(roots),b=p(roots); return a!==b ? `${a}_${b}` : a; } },
    { rarity: "rare",      w: 0.8, fn: () => cleanPfx() + p(roots) + cleanSfx() },

    // ── LEGENDARY (weight 0.25–0.5) ─────────────────────────────────────────
    { rarity: "legendary", w: 0.5, fn: () => leet(p(roots)) },
    { rarity: "legendary", w: 0.3, fn: () => bracketWrap(p(roots)) },
  ];
}

// ─── Weighted random pick ──────────────────────────────────────────────────────

function p(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function pickWeighted(pts) {
  const total = pts.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  for (const x of pts) { r -= x.w; if (r <= 0) return x; }
  return pts[0];
}

// ─── Scoring (0–100) ──────────────────────────────────────────────────────────

export function score(name) {
  let s = 100;
  const vis = name.replace(/[^\x00-\x7F]/g, "xx").length;

  // Length sweet spot 5–13
  if (vis < 4)        s -= 45;
  else if (vis < 6)   s -= 15;
  else if (vis <= 13) s += 15;
  else if (vis <= 18) s -= 8;
  else                s -= 30;

  // Underscore penalty
  s -= (name.match(/_/g) || []).length * 12;

  // Spam hard penalties
  if (/xXx/i.test(name))             s -= 70;
  if (/\d{4,}/.test(name))           s -= 30;
  if (/(.)\1{4,}/.test(name))        s -= 25;
  if (/(xx|xX|Xx){2,}/i.test(name)) s -= 45;
  if (/_\d{3,}/.test(name))          s -= 20;

  // Quality bonuses
  if (/^[A-Z][a-z]+[A-Z]/.test(name))                  s += 10; // CamelCase
  if (/^[a-z]+\.[a-z]+/.test(name))                    s += 10; // dot.style
  if (/\.(vibe|gg|io|exe|dev|soft|glow)$/.test(name))  s += 8;
  if (vis >= 5 && vis <= 10)                             s += 8;  // short bonus

  // Unpronounceable consonant runs
  s -= (name.replace(/[^a-zA-Z]/g,"").match(/[bcdfghjklmnpqrstvwxyz]{5,}/gi)||[]).length * 15;

  return Math.max(0, Math.min(100, s));
}

// ─── Quality filter ────────────────────────────────────────────────────────────

const BAD = [
  /xXx/i, /xX_/i, /^x{2,}$/i,
  /\d{5,}/, /_{3,}/, /(.)\1{4,}/,
  /(gaming|gamer|player\d*|user\d*)$/i,
  /^(noname|username|myname)/i,
];

function isGood(name) {
  if (name.length < 3 || name.length > 24) return false;
  for (const rx of BAD) if (rx.test(name)) return false;
  return score(name) >= 52;
}

// ─── GTA 6 — Specialized generation system ────────────────────────────────────
// Completely isolated from the generic engine.
// Each style has its own sub-generator with realistic GTA / RP / street logic.

const GTA6 = {
  // ── First names (Latino / Italian / American street) ──────────────────────
  firstNames: [
    "Carlos","Luis","Tony","Diego","Marco","Rafael","Miguel","Angelo",
    "Rico","Dante","Victor","Eduardo","Antonio","Mateo","Alejandro",
    "Sofia","Isabella","Lucia","Carmen","Elena","Rosa","Valentina",
    "Tommy","Jason","Marcus","Ray","Tyrone","Malik","Andre","DeShawn",
    "Luca","Nico","Pablo","Sergio","Hector","Ernesto","Raul","Ivan",
  ],

  // ── Last names (Latino / Italian / mixed) ─────────────────────────────────
  lastNames: [
    "Vega","Martinez","Moretti","Alvarez","Santos","Esposito","Delgado",
    "Rossi","Romano","Torres","Reyes","Garcia","Rivera","Conti",
    "DeLuca","Marchetti","Cruz","Flores","Ferrari","Colombo",
    "Jimenez","Herrera","Medina","Castillo","Ramos","Ortega","Salazar",
    "Ricci","Barbieri","Amato","Leone","Marino","Ferraro","Conti",
  ],

  // ── Nicknames used in RP / Mafia ──────────────────────────────────────────
  // Format: Carlos "El Toro" Vega
  nicknames: [
    "El Toro","Ghost","Diablo","Scar","Shadow","Cobra","Tigre",
    "El Lobo","Fantasma","El Cuchillo","Silencio","La Vibora",
    "Serpiente","Machete","El Sicario","Viper","El Patron",
  ],

  // ── Street / Gang prefixes ────────────────────────────────────────────────
  gangPrefixes: [
    "Lil","Big","Young","OG","Baby","Dirty","Trap","Slim",
    "Trigga","Ghost","Loc","Vato","Tiny","Solo","Lucky",
  ],

  // ── Street / Gang suffixes ────────────────────────────────────────────────
  gangSuffixes: [
    "Savage","Ghost","Rider","King","Shooter","Banger","Hustler",
    "Loc","Capone","Cartel","Sicario","Santos","Reyes","Vega",
  ],

  // ── Dark words for Criminal / Outlaw combos ───────────────────────────────
  darkWords: [
    "Night","Shadow","Blood","Venom","Dark","Silent","Phantom",
    "Vice","Death","Black","Cold","Steel","Iron","Viper",
  ],

  // ── GTA-universe nouns ────────────────────────────────────────────────────
  gtaNouns: [
    "Cartel","Syndicate","Familia","Phantom","Ghost","Reaper",
    "Viper","Outlaw","Bandido","Sicario","Rider","Crew",
  ],

  // ── Kingpin / Boss titles ─────────────────────────────────────────────────
  bossTitles: [
    "ElPatron","ElJefe","ElPadrino","LaFamilia","ElGrande",
    "TheDon","IlPatrone","ElBoss","LaVoz","ElSenor",
  ],

  // ── Crew / group name parts ───────────────────────────────────────────────
  crewLocations: [
    "Vice","Santos","Leonida","EastSide","SouthBeach","Downtown",
    "WestSide","NorthSide","Uptown","Southside","305","786",
  ],
  crewNouns: [
    "Cartel","Familia","Kings","Phantoms","Hustlers","Crew",
    "Syndicate","Riders","Brotherhood","Saints","Vipers","Squad",
  ],
};

// Style → generation route
const GTA6_ROUTES = {
  rp:"rp", character:"rp",
  mafia:"mafia",
  gang:"gang", street:"gang", hustler:"gang",
  criminal:"criminal", outlaw:"criminal",
  kingpin:"kingpin",
  crew:"crew",
};

/** RP / Character → "Carlos Vega", "Luis 'El Toro' Martinez", "CarlosVega" */
function _gta6RP(d) {
  const first = p(d.firstNames), last = p(d.lastNames);
  const r = Math.random();
  if (r < 0.07) return `${first} '${p(d.nicknames)}' ${last}`; // rare full nickname format
  if (r < 0.55) return `${first} ${last}`;                      // most common (spaces OK in GTA)
  return first + last;                                           // gamertag-safe CamelCase
}

/** Mafia → DonVega, CapoEsposito, "Don Carlo Vega", ElPatron */
function _gta6Mafia(d) {
  const last = p(d.lastNames), first = p(d.firstNames);
  const r = Math.random();
  if (r < 0.28) return p(["Don","Capo","Boss","Patron","Padrino"]) + last;   // DonVega
  if (r < 0.52) return `${p(["Don","Capo","Il","La"])} ${first} ${last}`;   // Don Carlo Vega
  if (r < 0.72) return first + last;                                          // TonyMoretti
  return p(d.bossTitles);                                                     // ElPatron
}

/** Gang / Street / Hustler → LilVega, RicoSavage, OGShadow, VegaRider */
function _gta6Gang(d) {
  const r = Math.random();
  if (r < 0.38) return p(d.gangPrefixes) + p(d.lastNames);   // LilVega
  if (r < 0.62) return p(d.firstNames)   + p(d.gangSuffixes);// RicoSavage
  if (r < 0.80) return p(d.lastNames)    + p(d.gangSuffixes);// VegaRider
  return p(d.gangPrefixes) + p(d.firstNames);                 // BigTony
}

/** Criminal / Outlaw → ShadowVega, ElBandido, ViceReaper, NightRider */
function _gta6Criminal(d) {
  const r = Math.random();
  if (r < 0.33) return p(d.darkWords) + p(d.lastNames);    // ShadowVega
  if (r < 0.58) return "El" + p([                          // ElBandido
    "Bandido","Sicario","Fantasma","Lobo","Viper",
    "Cobra","Diablo","Cuchillo","Sombra","Toro",
  ]);
  if (r < 0.78) return p(d.darkWords) + p(d.gtaNouns);     // BloodPhantom
  return p(["Vice","Dark","Midnight","Iron","Steel"]) + p(["Rider","Ghost","Reaper","Viper","Outlaw"]);
}

/** Kingpin → ElPatron, DonVega, KingReyes, VegaBoss */
function _gta6Kingpin(d) {
  const r = Math.random();
  if (r < 0.30) return p(d.bossTitles);                                           // ElPatron
  if (r < 0.65) return p(["Don","King","Lord","Boss","ElGrande"]) + p(d.lastNames);// DonVega
  return p(d.lastNames) + p(["Boss","King","Don","ElPatron"]);                     // VegaBoss
}

/** Crew → VegaCartel, EastSideKings, LosPhantoms */
function _gta6Crew(d) {
  const r = Math.random();
  if (r < 0.35) return p(d.lastNames)      + p(d.crewNouns);       // VegaCartel
  if (r < 0.62) return p(d.crewLocations)  + p(d.crewNouns);       // EastSideRiders
  if (r < 0.80) return p(d.lastNames)      + p(["Cartel","Familia","Crew","Gang"]);
  return p(["The","Los","Los Santos","Vice"]) + p(d.crewNouns);     // ThePhantoms
}

/**
 * GTA 6 main router — calls the right sub-generator per style.
 * Completely isolated: never touches the generic engine.
 */
function generateGTA6Name(style) {
  const route = GTA6_ROUTES[style.toLowerCase()] || "gang";
  switch (route) {
    case "rp":       return _gta6RP(GTA6);
    case "mafia":    return _gta6Mafia(GTA6);
    case "gang":     return _gta6Gang(GTA6);
    case "criminal": return _gta6Criminal(GTA6);
    case "kingpin":  return _gta6Kingpin(GTA6);
    case "crew":     return _gta6Crew(GTA6);
    default:         return _gta6Gang(GTA6);
  }
}

// ─── Hub bank lookup ───────────────────────────────────────────────────────────

function getBank(gameName, style) {
  const hub = BANKS[gameName];
  if (!hub) return null;
  const key = style.toLowerCase();
  return hub[key] || hub[Object.keys(hub)[0]]; // fallback to first style
}

// ─── Main generation ───────────────────────────────────────────────────────────

/**
 * Generate one quality name for a given hub+style.
 * Falls back to gameWords if hub bank not found.
 */
export function generateAdvancedName(gameWords, style, gameName, useSymbols) {
  // ── GTA 6 → dedicated realistic generator (isolated system) ──────────────
  if (gameName === "GTA 6" || gameName === "GTA") {
    return generateGTA6Name(style);
  }

  const bank = getBank(gameName, style);

  // If no hub bank, use gameWords with simple patterns
  if (!bank) {
    const root = p(gameWords.length ? gameWords : ["Player"]);
    return root + p(["x","7","v2","","zz"]);
  }

  // Blend bank roots with game-specific words for variety
  const pool = [...bank.roots, ...bank.roots, ...gameWords].filter(Boolean);
  const blendedBank = { roots: pool, pfx: bank.pfx, sfx: bank.sfx };

  const pts = patterns(blendedBank);

  for (let i = 0; i < 10; i++) {
    const chosen = pickWeighted(pts);
    const name = chosen.fn();
    if (name && isGood(name)) return name;
  }

  return p(bank.roots); // safe fallback
}

/**
 * Generate a deduplicated quality batch.
 * @returns {{ names: string[], rarities: string[] }}
 */
export function generateBatch(gameWords, style, gameName, useSymbols, count = 5) {
  const bank = getBank(gameName, style);
  const pool = bank
    ? [...bank.roots, ...bank.roots, ...gameWords].filter(Boolean)
    : gameWords.length ? gameWords : ["Player"];
  const blendedBank = bank
    ? { roots: pool, pfx: bank.pfx, sfx: bank.sfx }
    : { roots: pool, pfx: ["Pro","Real","Top"], sfx: ["x","7","v2"] };

  const pts = patterns(blendedBank);
  const seen = new Set();
  const names = [];
  const rarities = [];
  let attempts = 0;

  while (names.length < count && attempts < count * 15) {
    attempts++;
    const chosen = pickWeighted(pts);
    const name = chosen.fn();
    if (name && !seen.has(name) && isGood(name)) {
      seen.add(name);
      names.push(name);
      rarities.push(chosen.rarity);
    }
  }

  // Fallback fill
  while (names.length < count) {
    const fb = p(pool) + p(["x","7",""]);
    if (!seen.has(fb)) { names.push(fb); rarities.push("common"); seen.add(fb); }
  }

  return names; // Keep returning string[] for backward compat
}
