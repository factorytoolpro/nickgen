/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Game hub redirects (308 Permanent) ─────────────────────────────
      { source: "/fortnite",  destination: "/fortnite-name-generator",          permanent: true },
      { source: "/roblox",    destination: "/roblox-username-generator",        permanent: true },
      { source: "/gta6",      destination: "/gta6-name-generator",              permanent: true },
      { source: "/minecraft", destination: "/minecraft-username-generator",     permanent: true },
      { source: "/valorant",  destination: "/valorant-name-generator",          permanent: true },
      { source: "/apex",      destination: "/apex-legends-name-generator",      permanent: true },
      { source: "/cod",       destination: "/call-of-duty-name-generator",      permanent: true },
    ];
  },
};

export default nextConfig;
