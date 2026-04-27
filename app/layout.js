import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nickgen.xyz/"),
  title: {
    default: "NickGen — Générateur de Pseudo Gaming",
    template: "%s — NickGen",
  },
  verification: {
    google: "BEfEAEg-SqMJCw_KS_ylHYkQgt_YOHHddbRzp8Ss9GM",
  },
  description: "Génère des pseudos gaming uniques pour Fortnite, Valorant, Minecraft, Apex Legends et Call of Duty. Styles variés, mode Battle, partage social. Gratuit et sans inscription.",
  keywords: ["pseudo gaming", "générateur de pseudo", "gaming username", "gamertag generator", "fortnite names", "valorant names", "minecraft username", "apex legends name", "call of duty name"],
  authors: [{ name: "NickGen" }],
  creator: "NickGen",
  openGraph: {
    type: "website",
    siteName: "NickGen",
    title: "NickGen — Générateur de Pseudo Gaming",
    description: "Génère des pseudos gaming uniques pour Fortnite, Valorant, Minecraft, Apex et COD. Gratuit et sans inscription.",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NickGen — Générateur de Pseudo Gaming",
    description: "Génère des pseudos gaming uniques en 1 clic. Fortnite, Valorant, Minecraft et plus.",
    creator: "@nickgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col">
       <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wi7kkq9vgi");
</script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
