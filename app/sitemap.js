const BASE = "https://nickgen.xyz";
const UPDATED = "2025-04-25";

function url(path, { priority = 0.7, changeFrequency = "monthly" } = {}) {
  return { url: `${BASE}${path}`, lastModified: UPDATED, changeFrequency, priority };
}

export default function sitemap() {
  return [
    url("/",                       { priority: 1.0, changeFrequency: "daily"  }),
    url("/fortnite-name-generator",         { priority: 0.9, changeFrequency: "weekly" }),
    url("/roblox-username-generator",       { priority: 0.9, changeFrequency: "weekly" }),
    url("/gta6-name-generator",             { priority: 0.9, changeFrequency: "weekly" }),
    url("/minecraft-username-generator",    { priority: 0.9, changeFrequency: "weekly" }),
    url("/valorant-name-generator",         { priority: 0.9, changeFrequency: "weekly" }),
    url("/apex-legends-name-generator",     { priority: 0.9, changeFrequency: "weekly" }),
    url("/call-of-duty-name-generator",     { priority: 0.9, changeFrequency: "weekly" }),
    url("/sweaty-fortnite-names",           { priority: 0.8 }),
    url("/tryhard-fortnite-names",          { priority: 0.8 }),
    url("/og-fortnite-names",               { priority: 0.8 }),
    url("/cool-fortnite-names",             { priority: 0.8 }),
    url("/funny-fortnite-names",            { priority: 0.8 }),
    url("/aesthetic-fortnite-names",        { priority: 0.8 }),
    url("/badass-fortnite-names",           { priority: 0.8 }),
    url("/roblox-usernames",                { priority: 0.8 }),
    url("/aesthetic-roblox-usernames",      { priority: 0.8 }),
    url("/cute-roblox-usernames",           { priority: 0.8 }),
    url("/cool-roblox-usernames",           { priority: 0.8 }),
    url("/funny-roblox-usernames",          { priority: 0.8 }),
    url("/gta6-rp-names",                   { priority: 0.8 }),
    url("/gta6-gang-names",                 { priority: 0.8 }),
    url("/gta6-crew-names",                 { priority: 0.8 }),
    url("/gta6-character-names",            { priority: 0.8 }),
    url("/gta6-mafia-names",               { priority: 0.8 }),
    url("/minecraft-usernames",             { priority: 0.8 }),
    url("/cool-minecraft-usernames",        { priority: 0.8 }),
    url("/minecraft-username-ideas",        { priority: 0.8 }),
    url("/funny-minecraft-usernames",       { priority: 0.7 }),
    url("/good-minecraft-usernames",        { priority: 0.7 }),
    url("/valorant-usernames",              { priority: 0.7 }),
    url("/cool-valorant-names",             { priority: 0.7 }),
    url("/sweaty-valorant-names",           { priority: 0.7 }),
    url("/valorant-username-ideas",         { priority: 0.7 }),
    url("/tryhard-valorant-names",          { priority: 0.7 }),
  ];
}
