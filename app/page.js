import GameGenerator from "./components/GameGenerator";
import { GAMES } from "./data/games";

export const dynamic = "force-dynamic";

const game = GAMES.fortnite;

// ─── Global FAQ (overrides the game-specific FAQ) ─────────────────────────────

const globalFaq = [
  {
    q: "What is a good gaming username?",
    a: "A good gaming username is short (6–14 characters), memorable and easy to pronounce. It should reflect your playstyle or personality — competitive players often use eSport-style names (FaZe prefixes, TTV suffixes), while content creators prefer clean formats like CamelCase (CleanVibes) or dot-style (its.aurora). NickGen generates quality-scored usernames across 6 styles for every type of gamer.",
  },
  {
    q: "How do I create a unique username?",
    a: "To create a unique username, combine a short, impactful word with a modern style format: CamelCase (ClutchEdit), dot-style (soft.luna), or a suffix like .gg or .vibe. Avoid generic patterns like xXx or consecutive numbers — they feel outdated. NickGen's advanced engine uses platform-specific word banks and 12 generation patterns to produce combinations that are statistically rare and unlikely to already be taken.",
  },
  {
    q: "Can I use special characters in usernames?",
    a: "It depends on the platform. Most platforms (Fortnite, Roblox, Minecraft) accept only letters, numbers and underscores. TikTok and Discord also allow dots (.). Some platforms accept certain Unicode symbols. NickGen's Symbol toggle adds compatible characters where appropriate, always respecting each platform's formatting rules.",
  },
  {
    q: "What is a gamertag generator?",
    a: "A gamertag generator creates original usernames for gaming platforms. NickGen combines hub-specific word banks (Fortnite terms, COD callsigns, TikTok culture) with 12 generation patterns and a quality scoring system to produce authentic, stylized gamertags. Unlike simple random generators, NickGen filters weak results so every suggestion is memorable and platform-appropriate.",
  },
  {
    q: "Is NickGen free to use?",
    a: "Yes, NickGen is 100% free with no account required. Generate unlimited usernames, use Battle Mode to compare options, save favorites in your browser and share directly to social media. All 9 gaming hubs — Fortnite, Roblox, GTA 6, Minecraft, Valorant, Apex, COD, Discord and TikTok — are completely free.",
  },
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Username Generator – Create Cool & Unique Gaming Names",
  description: "Generate unique, cool and stylish usernames instantly. Free gaming username generator for Fortnite, COD, TikTok, Minecraft and more. No sign-up required.",
  keywords: [
    "username generator",
    "gaming username generator",
    "nickname generator",
    "gamertag generator",
    "cool usernames",
    "unique usernames",
    "free username generator",
    "gaming name generator",
  ],
  alternates: { canonical: "https://nickgen.xyz/" },
  openGraph: {
    title: "Username Generator – Create Cool & Unique Gaming Names",
    description: "Generate unique, cool and stylish usernames instantly. Free gaming username generator for all platforms.",
    url: "https://nickgen.xyz/",
  },
};

// ─── JSON-LD (WebApplication + FAQPage) ──────────────────────────────────────
// Same structure as /call-of-duty-name-generator, /tiktok-username-generator, etc.

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://nickgen.xyz/#app",
      "name": "NickGen — Free Gaming Username Generator",
      "url": "https://nickgen.xyz",
      "description": "Free gaming username generator for Fortnite, COD, TikTok, Minecraft, Valorant, Apex, GTA 6, Roblox and Discord.",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": globalFaq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
// Exact same structure as game-specific pages (COD, TikTok, Fortnite, etc.)
// Only the text content differs — no new components, no layout changes.

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GameGenerator
        game={game}
        intro={{
          h1: "Gaming Username Generator",
          text: "Your gaming username is more than just a name — it's your identity in every match, every lobby, and every community. With NickGen, generate unique usernames for Fortnite, Valorant, Minecraft, Roblox, TikTok and more. Whether you want a sweaty gamertag, an aesthetic nickname or an OG username, create a name that reflects your style, builds your reputation, and makes you stand out instantly. Generate powerful, creative, and memorable usernames in seconds — completely free.",
        }}
        faqOverride={globalFaq}
        seoContent={{
          sections: [
            {
              heading: "How to Generate a Unique Username",
              text: "Generating a unique username with NickGen takes three steps. First, select your style — Sweaty for competitive gamers, Aesthetic for visual creators, Funny for entertainers, or Clean for a professional look. Click Generate Names to instantly receive 5 original, quality-scored suggestions. Use Battle Mode to compare two options head-to-head, save favorites with the ❤️ button, and share directly to Discord, Twitter or WhatsApp. The advanced engine automatically filters generic combinations, so every result is usable.",
            },
            {
              heading: "Best Gaming Username Ideas in 2025",
              text: "The best gaming usernames in 2025 are short (6–14 characters), easy to pronounce and immediately recognizable. Each platform has its own naming culture:",
              list: [
                "Fortnite — short, eSport-ready (FaZeEdit, ClutchZone, NRGPiece)",
                "Roblox — cute or cool, simple to spell (TinyMochi, ShadowX, OofMaster)",
                "TikTok — brand-ready, dot style (its.aurora, soft.luna, just.vibes)",
                "Call of Duty — military callsigns (GhostOps, DeltaLead, BravoActual)",
                "Valorant — agent-inspired, competitive (JettDash, AceEntry, FlashFrag)",
                "Discord — internet culture, expressive (local.goblin, PingAbuser)",
              ],
            },
            {
              heading: "Tips to Create a Good Gamertag",
              text: "A great gamertag follows three rules: memorability, availability and identity. Keep it under 14 characters so it displays correctly on all platforms. Avoid excessive underscores and number spam (xXx_123) — these patterns are outdated and immediately recognizable as auto-generated. Use CamelCase, dot-style or a single stylized word instead. Match your username to your content or playstyle: aggressive names for competitive gaming, aesthetic names for lifestyle content. NickGen's scoring system automatically filters weak combinations, so every suggestion meets quality standards.",
            },
            {
              level: 3,
              heading: "Username Generator for All Gaming Platforms",
              text: "NickGen supports 9 major gaming platforms with dedicated generators, each tuned to its community's naming conventions. Fortnite uses eSport prefixes and gameplay terms, Minecraft references blocks and mobs, TikTok uses dot-style personal branding, GTA 6 generates realistic RP names and street aliases. Browse all our specialized generators: Fortnite Name Generator, Roblox Username Generator, Call of Duty Name Generator, TikTok Username Generator, Minecraft Username Generator, Valorant Name Generator, Apex Legends Name Generator, Discord Username Generator and GTA 6 Name Generator.",
            },
          ],
        }}
      />
    </>
  );
}
