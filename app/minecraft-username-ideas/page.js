import GameGenerator from "../components/GameGenerator";
import { GAMES } from "../data/games";
import { MINECRAFT_PAGES } from "../data/minecraft-seo";

const config = MINECRAFT_PAGES["minecraft-username-ideas"];
export const metadata = config.seo;

export default function MinecraftUsernameIdeasPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faq.map((i) => ({ "@type": "Question", "name": i.q, "acceptedAnswer": { "@type": "Answer", "text": i.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><GameGenerator game={GAMES.minecraft} preSelectedStyle={config.preSelectedStyle} intro={config.intro} faqOverride={config.faq} /></>);
}
