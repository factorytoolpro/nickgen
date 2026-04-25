"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const nameData = {
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
    prefixes: {
      ascii: ["xX", "M4X_", "L33T_", "H4X_", "W1N_", "N0_"],
      unicode: ["Ω_", "∞_", "Δ_"],
    },
    words: ["Godlike", "Unstoppable", "Infinite", "Maximum", "Ultimate", "Supreme", "Absolute", "Flawless", "Dominant", "Invincible"],
    suffixes: {
      ascii: ["666", "999", "_TH", "_Pro", "_GG", "420"],
      unicode: ["_Ω", "_∞", "_Δ"],
    },
  },
  Badass: {
    prefixes: {
      ascii: ["Dark", "Death", "Blood", "Iron", "Black", "Ghost", "Shadow", "Grim"],
      unicode: ["☠_", "⚔_", "💀"],
    },
    words: ["Reaper", "Wraith", "Skull", "Venom", "Cobra", "Viper", "Raven", "Doom", "Havoc", "Fury", "Slayer", "Nemesis"],
    suffixes: {
      ascii: ["X", "Z", "_Prime", "666", "_Alpha", "_Sigma"],
      unicode: ["_☠", "_⚔", "_Ψ"],
    },
  },
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getParts(parts, useSymbols) {
  if (!parts) return [];
  return useSymbols && parts.unicode ? [...parts.ascii, ...parts.unicode] : parts.ascii;
}

function generateName(style, useSymbols) {
  const data = nameData[style];
  const prefix = Math.random() > 0.38 ? pick(getParts(data.prefixes, useSymbols)) : "";
  const word = pick(data.words);
  const suffix = Math.random() > 0.38 ? pick(getParts(data.suffixes, useSymbols)) : "";
  return `${prefix}${word}${suffix}`;
}

const LENGTH_RANGES = { Any: null, Short: [1, 8], Medium: [9, 13], Long: [14, 99] };

function generateNames(style, lengthFilter, useSymbols, count = 12) {
  const range = LENGTH_RANGES[lengthFilter];
  if (!range) return Array.from({ length: count }, () => generateName(style, useSymbols));
  const results = [];
  let attempts = 0;
  while (results.length < count && attempts < 3000) {
    attempts++;
    const name = generateName(style, useSymbols);
    const len = [...name].filter((c) => c.charCodeAt(0) < 0x300).length;
    if (len >= range[0] && len <= range[1]) results.push(name);
  }
  while (results.length < count) results.push(generateName(style, useSymbols));
  return results;
}

// ─── Daily counter ────────────────────────────────────────────────────────────

function getDailyKey() {
  return `nickgen_daily_${new Date().toISOString().split("T")[0]}`;
}

function getDailyBase() {
  const d = new Date();
  const doy = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86_400_000);
  let hash = 0;
  for (const c of d.toISOString().split("T")[0]) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff;
  return 9_200 + doy * 28 + (hash % 4_400);
}

function loadUserCount() {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(getDailyKey()) || "0", 10);
}

function saveUserCount(n) {
  if (typeof window === "undefined") return;
  localStorage.setItem(getDailyKey(), String(n));
}

// ─── Share utilities ──────────────────────────────────────────────────────────

function buildShareUrl(name, style) {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("name", name);
  url.searchParams.set("style", style);
  return url.toString();
}

function readUrlSharedName() {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  const name = p.get("name");
  const style = p.get("style");
  return name ? { name, style: style || "Sweaty" } : null;
}

// ─── Flame cluster ────────────────────────────────────────────────────────────

function FlameCluster({ mirror }) {
  return (
    <div className="flex items-end" style={{ transform: mirror ? "scaleX(-1)" : "none", gap: 2 }}>
      <span style={{ fontSize: 13, display: "inline-block", opacity: 0.55, marginBottom: 3, animation: "flicker 1.4s ease-in-out infinite 0.6s, float-flame 2.2s ease-in-out infinite 0.4s" }}>🔥</span>
      <span style={{ fontSize: 26, display: "inline-block", animation: "flicker 1.8s ease-in-out infinite, float-flame 2.5s ease-in-out infinite" }}>🔥</span>
      <span style={{ fontSize: 18, display: "inline-block", opacity: 0.75, marginBottom: 2, animation: "flicker 1.55s ease-in-out infinite 0.9s, float-flame 2s ease-in-out infinite 0.6s" }}>🔥</span>
    </div>
  );
}

// ─── Flame counter ────────────────────────────────────────────────────────────

function FlameCounter({ total }) {
  const [displayed, setDisplayed] = useState(0);
  const prevRef = useRef(0);
  const popRef = useRef(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = total;
    if (start === end) return;
    prevRef.current = end;
    const duration = start === 0 ? 1100 : 650;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setDisplayed(Math.round(start + (end - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    if (start > 0 && popRef.current) {
      popRef.current.style.animation = "none";
      void popRef.current.offsetWidth;
      popRef.current.style.animation = "count-pop 0.45s ease-out forwards";
    }
  }, [total]);

  return (
    <div className="flex flex-col items-center" style={{ margin: "28px 0 32px" }}>
      <div className="relative flex items-center justify-center" style={{ gap: 20 }}>
        <div style={{ position: "absolute", inset: "-24px -60px", background: "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 68%)", animation: "glow-pulse 2.8s ease-in-out infinite", pointerEvents: "none" }} />
        <FlameCluster mirror />
        <div ref={popRef} style={{ fontSize: 58, fontWeight: 900, lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em", background: "linear-gradient(175deg, #fcd34d 0%, #f97316 45%, #c2410c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 16px rgba(249,115,22,0.5))" }}>
          {displayed.toLocaleString("fr-FR")}
        </div>
        <FlameCluster />
      </div>
      <p className="text-xs font-black uppercase tracking-widest mt-1" style={{ color: "#64748b", letterSpacing: "0.18em" }}>
        noms générés aujourd'hui
      </p>
      <div style={{ marginTop: 20, width: "100%", maxWidth: 320, height: 1, background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)" }} />
    </div>
  );
}

// ─── Particles ────────────────────────────────────────────────────────────────

function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.6 + 0.4, alpha: Math.random() * 0.45 + 0.08,
      color: Math.random() > 0.55 ? "#f97316" : "#3b82f6",
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; else if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, p.color); grad.addColorStop(1, "transparent");
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad; ctx.globalAlpha = p.alpha * 0.18; ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

// ─── Share modal ──────────────────────────────────────────────────────────────

function ShareModal({ name, style, onClose }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);
  const url = buildShareUrl(name, style);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 1800);
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(`Mon pseudo Fortnite : **${name}** 🔥\nGénère le tien → ${url}`);
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 1800);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Mon pseudo Fortnite : ${name} 🔥\nGénère le tien →`)}&url=${encodeURIComponent(url)}`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(`Mon pseudo Fortnite : ${name} 🔥\nGénère le tien sur NickGen → ${url}`)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-6"
        style={{ background: "linear-gradient(160deg,#0d1526,#0f1830)", border: "1px solid rgba(249,115,22,0.3)", boxShadow: "0 28px 64px rgba(0,0,0,0.65), 0 0 50px rgba(249,115,22,0.06)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#7dd3fc" }}>
            📤 Partager ce pseudo
          </p>
          <button onClick={onClose} style={{ color: "#475569", fontSize: 22, lineHeight: 1, padding: "0 2px" }}>×</button>
        </div>

        {/* Name display */}
        <div className="text-center rounded-xl py-5 mb-6" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.18)" }}>
          <p className="text-3xl font-black mb-1 break-all" style={{ background: "linear-gradient(90deg,#fbbf24,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {name}
          </p>
          <p className="text-xs font-bold" style={{ color: "#475569" }}>Style {style}</p>
        </div>

        {/* Platforms */}
        <div className="flex flex-col gap-2.5">
          <a
            href={tweetUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all"
            style={{ background: "rgba(255,255,255,0.05)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
          >
            <span style={{ fontSize: 15, fontFamily: "serif", fontWeight: 900 }}>𝕏</span>
            Twitter / X
          </a>

          <a
            href={waUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all"
            style={{ background: "rgba(37,211,102,0.07)", color: "#4ade80", border: "1px solid rgba(37,211,102,0.18)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(37,211,102,0.15)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(37,211,102,0.07)"}
          >
            <span>💬</span>
            WhatsApp
          </a>

          <button
            onClick={copyDiscord}
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left w-full"
            style={discordCopied
              ? { background: "rgba(88,101,242,0.2)", color: "#a5b4fc", border: "1px solid rgba(88,101,242,0.45)" }
              : { background: "rgba(88,101,242,0.07)", color: "#818cf8", border: "1px solid rgba(88,101,242,0.18)" }
            }
          >
            <span>🎮</span>
            {discordCopied ? "Copié pour Discord ✓" : "Copier pour Discord"}
          </button>

          <button
            onClick={copyLink}
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left w-full"
            style={linkCopied
              ? { background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }
              : { background: "rgba(249,115,22,0.08)", color: "#f97316", border: "1px solid rgba(249,115,22,0.22)" }
            }
          >
            <span>{linkCopied ? "✓" : "🔗"}</span>
            {linkCopied ? "Lien copié !" : "Copier le lien"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Shared name banner ───────────────────────────────────────────────────────

function SharedNameBanner({ name, style, onDismiss }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="px-6 py-4" style={{ background: "linear-gradient(90deg,rgba(249,115,22,0.1),rgba(30,58,138,0.08))", borderBottom: "1px solid rgba(249,115,22,0.22)" }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-0.5" style={{ color: "#f97316" }}>
            🔥 Pseudo partagé avec toi
          </p>
          <p className="text-xl font-black text-white">{name}</p>
          <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Style {style} · Génère le tien ci-dessous 👇</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copy}
            className="px-4 py-2 rounded-xl text-xs font-black transition-all"
            style={copied
              ? { background: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }
              : { background: "rgba(249,115,22,0.15)", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)" }
            }
          >
            {copied ? "COPIÉ ✓" : "COPIER"}
          </button>
          <button onClick={onDismiss} style={{ color: "#475569", fontSize: 22, padding: "0 4px", lineHeight: 1 }}>×</button>
        </div>
      </div>
    </div>
  );
}

// ─── Battle fighter card ──────────────────────────────────────────────────────

function BattleFighter({ name, index, winner, onVote, onShare }) {
  const [hov, setHov] = useState(false);
  const isWinner = winner === index;
  const isLoser = winner !== null && !isWinner;
  const pending = winner === null;

  return (
    <div
      className="flex flex-col items-center rounded-2xl p-6 transition-all"
      style={{
        background: isWinner
          ? "linear-gradient(160deg,rgba(30,20,5,0.97),rgba(50,25,5,0.95))"
          : isLoser ? "rgba(15,20,35,0.5)"
          : hov ? "linear-gradient(160deg,rgba(22,33,68,0.95),rgba(28,18,52,0.92))"
          : "rgba(15,23,42,0.78)",
        border: `1px solid ${isWinner ? "rgba(249,115,22,0.75)" : isLoser ? "rgba(30,58,138,0.15)" : hov ? "rgba(249,115,22,0.55)" : "rgba(30,58,138,0.4)"}`,
        boxShadow: isWinner ? "0 0 48px rgba(249,115,22,0.28), inset 0 0 60px rgba(249,115,22,0.05)" : "none",
        opacity: isLoser ? 0.38 : 1,
        filter: isLoser ? "grayscale(0.6)" : "none",
        transform: isWinner ? "scale(1.03)" : isLoser ? "scale(0.96)" : hov && pending ? "translateY(-3px)" : "none",
        transition: "all 0.35s ease",
        cursor: pending ? "pointer" : "default",
        minHeight: 160,
        justifyContent: "center",
      }}
      onMouseEnter={() => pending && setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => pending && onVote()}
    >
      {isWinner && <div className="text-3xl mb-3" style={{ filter: "drop-shadow(0 0 10px rgba(251,191,36,0.9))" }}>🏆</div>}
      {isLoser && <div className="text-2xl mb-3" style={{ opacity: 0.4 }}>💀</div>}
      {pending && (
        <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: hov ? "#f97316" : "#334155" }}>
          {hov ? "⚔ Voter" : `Fighter ${index + 1}`}
        </p>
      )}

      <p
        className="text-lg font-black text-center break-all mb-4 leading-snug"
        style={{
          color: isWinner ? "#fbbf24" : isLoser ? "#475569" : "#fff",
          textShadow: isWinner ? "0 0 20px rgba(251,191,36,0.55)" : "none",
        }}
      >
        {name}
      </p>

      {isWinner && (
        <button
          onClick={(e) => { e.stopPropagation(); onShare(); }}
          className="text-xs font-black px-4 py-2 rounded-xl transition-all"
          style={{ background: "rgba(249,115,22,0.22)", color: "#f97316", border: "1px solid rgba(249,115,22,0.45)" }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.38)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.22)"}
        >
          📤 Partager
        </button>
      )}

      {pending && (
        <div
          className="text-xs font-black px-4 py-2 rounded-xl transition-all"
          style={{
            background: hov ? "rgba(249,115,22,0.2)" : "rgba(30,58,138,0.3)",
            color: hov ? "#f97316" : "#60a5fa",
            border: `1px solid ${hov ? "rgba(249,115,22,0.4)" : "rgba(30,64,175,0.3)"}`,
          }}
        >
          {hov ? "⚔ Je vote pour lui !" : "Cliquer pour voter"}
        </div>
      )}
    </div>
  );
}

// ─── Battle arena ─────────────────────────────────────────────────────────────

function BattleArena({ style, useSymbols, onShare, onCountIncrement }) {
  const [fighters, setFighters] = useState([null, null]);
  const [winner, setWinner] = useState(null);
  const initialized = useRef(false);

  const newBattle = useCallback(() => {
    setWinner(null);
    setFighters([generateName(style, useSymbols), generateName(style, useSymbols)]);
    onCountIncrement(2);
  }, [style, useSymbols, onCountIncrement]);

  useEffect(() => {
    if (!initialized.current) { initialized.current = true; newBattle(); }
  }, [newBattle]);

  if (!fighters[0]) return null;

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "#f97316" }}>
          ⚔ Quel pseudo s'impose ?
        </p>
        {winner !== null ? (
          <p className="text-2xl font-black text-white">
            🏆 <span style={{ color: "#fbbf24" }}>{fighters[winner]}</span> s'impose !
          </p>
        ) : (
          <p className="font-bold" style={{ color: "#93c5fd" }}>Vote pour ton pseudo préféré</p>
        )}
      </div>

      {/* Fighters + VS badge */}
      <div className="relative grid grid-cols-2 gap-4 items-stretch mb-8">
        {fighters.map((name, i) => (
          <BattleFighter
            key={`${name}-${i}`}
            name={name}
            index={i}
            winner={winner}
            onVote={() => setWinner(i)}
            onShare={() => onShare(name, style)}
          />
        ))}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 10,
            width: 46, height: 46, borderRadius: "50%",
            background: winner !== null ? "linear-gradient(135deg,#fbbf24,#f97316)" : "linear-gradient(135deg,#1e3a8a,#1d4ed8)",
            border: `2px solid ${winner !== null ? "rgba(251,191,36,0.5)" : "rgba(30,64,175,0.5)"}`,
            boxShadow: winner !== null ? "0 0 22px rgba(251,191,36,0.45)" : "0 0 14px rgba(30,58,138,0.5)",
            transition: "all 0.4s ease",
          }}
        >
          <span className="text-xs font-black text-white">{winner !== null ? "🏆" : "VS"}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={newBattle}
          className="px-10 py-3 font-black text-base rounded-2xl transition-all active:scale-95"
          style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", boxShadow: "0 8px 28px rgba(249,115,22,0.28)" }}
        >
          ⚔ Nouveau Battle
        </button>
      </div>
    </div>
  );
}

// ─── Name card ────────────────────────────────────────────────────────────────

function NameCard({ name, isCopied, onCopy, onShare }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "linear-gradient(135deg,rgba(22,33,68,0.95),rgba(28,18,52,0.92))" : "rgba(15,23,42,0.72)",
        border: `1px solid ${hov ? "rgba(249,115,22,0.6)" : "rgba(30,58,138,0.4)"}`,
        boxShadow: hov ? "0 6px 28px rgba(249,115,22,0.2),inset 0 0 40px rgba(249,115,22,0.04)" : "0 2px 10px rgba(0,0,0,0.35)",
        transform: hov ? "translateY(-3px) scale(1.015)" : "none",
        transition: "all 0.18s ease",
      }}
      className="flex items-center justify-between rounded-xl px-4 py-3 gap-2"
    >
      <span className="text-white font-bold text-sm truncate flex-1" style={{ textShadow: hov ? "0 0 14px rgba(249,115,22,0.35)" : "none" }}>
        {name}
      </span>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={onShare}
          title="Partager"
          className="text-sm px-2 py-1.5 rounded-lg transition-all"
          style={{ color: hov ? "#f97316" : "#475569", background: hov ? "rgba(249,115,22,0.1)" : "transparent" }}
        >
          📤
        </button>
        <button
          onClick={() => onCopy(name)}
          className="text-xs font-black px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
          style={isCopied
            ? { background: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.35)", minWidth: 72 }
            : { background: hov ? "rgba(249,115,22,0.18)" : "rgba(30,58,138,0.35)", color: hov ? "#f97316" : "#7dd3fc", border: `1px solid ${hov ? "rgba(249,115,22,0.4)" : "rgba(30,64,175,0.4)"}`, minWidth: 72 }
          }
        >
          {isCopied ? "COPIED ✓" : "COPY"}
        </button>
      </div>
    </div>
  );
}

// ─── History card ─────────────────────────────────────────────────────────────

function HistoryCard({ name, style: entryStyle }) {
  const [c, setC] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(name); setC(true); setTimeout(() => setC(false), 1400); };
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 gap-2" style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(30,58,138,0.3)" }}>
      <div className="min-w-0">
        <p className="text-white text-xs font-semibold truncate">{name}</p>
        <p className="text-xs" style={{ color: "#475569" }}>{entryStyle}</p>
      </div>
      <button onClick={copy} className="shrink-0 text-xs font-black px-2 py-1 rounded-lg transition-all" style={c ? { color: "#4ade80", background: "rgba(74,222,128,0.1)" } : { color: "#60a5fa" }}>
        {c ? "✓" : "⎘"}
      </button>
    </div>
  );
}

// ─── Toggle switch ────────────────────────────────────────────────────────────

function Toggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => onChange(!value)}>
      <div className="relative rounded-full transition-all" style={{ width: 44, height: 24, background: value ? "linear-gradient(135deg,#f97316,#ea580c)" : "rgba(30,58,138,0.4)", border: `1px solid ${value ? "rgba(249,115,22,0.5)" : "rgba(30,64,175,0.3)"}`, boxShadow: value ? "0 0 12px rgba(249,115,22,0.3)" : "none", transition: "all 0.2s" }}>
        <div style={{ position: "absolute", top: 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", left: value ? 23 : 3, transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.4)" }} />
      </div>
      <span className="text-xs font-black" style={{ color: value ? "#f97316" : "#60a5fa" }}>{value ? "ON" : "OFF"}</span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [style, setStyle] = useState("Sweaty");
  const [names, setNames] = useState([]);
  const [copied, setCopied] = useState(null);
  const [lengthFilter, setLengthFilter] = useState("Any");
  const [useSymbols, setUseSymbols] = useState(true);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dailyBase, setDailyBase] = useState(0);
  const [dailyUserCount, setDailyUserCount] = useState(0);
  const [mode, setMode] = useState("normal"); // "normal" | "battle"
  const [shareTarget, setShareTarget] = useState(null); // { name, style }
  const [sharedName, setSharedName] = useState(null); // from URL

  const styleList = ["Sweaty", "Funny", "OG", "Aesthetic", "Tryhard", "Badass"];
  const lengths = ["Any", "Short", "Medium", "Long"];

  useEffect(() => {
    setDailyBase(getDailyBase());
    setDailyUserCount(loadUserCount());
    const shared = readUrlSharedName();
    if (shared) {
      setSharedName(shared);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const addToCount = useCallback((n) => {
    setDailyUserCount((prev) => { const next = prev + n; saveUserCount(next); return next; });
  }, []);

  const generate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newNames = generateNames(style, lengthFilter, useSymbols);
      setNames(newNames);
      setHistory((prev) => [...newNames.map((n) => ({ name: n, style })), ...prev].slice(0, 20));
      addToCount(newNames.length);
      setIsGenerating(false);
    }, 280);
  };

  const copyName = useCallback(async (name, index) => {
    await navigator.clipboard.writeText(name);
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: "#0a0e1a" }}>
      <ParticleCanvas />

      {shareTarget && (
        <ShareModal name={shareTarget.name} style={shareTarget.style} onClose={() => setShareTarget(null)} />
      )}

      <div className="relative" style={{ zIndex: 1 }}>
        {/* ── Header ──────────────────────────────────────────────────── */}
        <header className="sticky top-0 px-6 py-4 backdrop-blur-md" style={{ zIndex: 20, borderBottom: "1px solid rgba(30,58,138,0.35)", background: "rgba(10,14,26,0.88)" }}>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-base" style={{ background: "linear-gradient(135deg,#f97316,#c2410c)", boxShadow: "0 4px 18px rgba(249,115,22,0.45)" }}>N</div>
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">Nick</span><span style={{ color: "#f97316" }}>Gen</span>
              </span>
              <span className="ml-1 text-xs rounded px-2 py-0.5 font-black tracking-widest" style={{ color: "#60a5fa", border: "1px solid rgba(30,64,175,0.5)" }}>FORTNITE</span>
            </div>
            <button
              onClick={() => setShowHistory((v) => !v)}
              className="flex items-center gap-2 text-xs font-black px-3 py-1.5 rounded-lg transition-all"
              style={{ color: showHistory ? "#f97316" : "#60a5fa", background: showHistory ? "rgba(249,115,22,0.1)" : "rgba(30,58,138,0.18)", border: `1px solid ${showHistory ? "rgba(249,115,22,0.35)" : "rgba(30,64,175,0.3)"}` }}
            >
              🕐 History{history.length > 0 && ` (${history.length})`}
            </button>
          </div>
        </header>

        {/* ── Shared name banner ──────────────────────────────────────── */}
        {sharedName && (
          <SharedNameBanner name={sharedName.name} style={sharedName.style} onDismiss={() => setSharedName(null)} />
        )}

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: "#f97316" }}>
              ⚡ Gaming Username Generator
            </div>
            <h1 className="text-5xl font-black text-white mb-3 leading-tight">
              Fortnite Name{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Generator
              </span>
            </h1>
            <p className="text-sm" style={{ color: "#93c5fd" }}>
              Generate the perfect gaming username for your next W
            </p>
            <FlameCounter total={dailyBase + dailyUserCount} />
          </div>

          {/* Controls bar */}
          <div className="flex flex-wrap items-end justify-between gap-5 p-5 rounded-2xl mb-8" style={{ background: "rgba(13,20,40,0.7)", border: "1px solid rgba(30,58,138,0.35)", backdropFilter: "blur(8px)" }}>
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-2.5" style={{ color: "#7dd3fc" }}>Length</p>
              <div className="flex gap-2">
                {lengths.map((l) => (
                  <button key={l} onClick={() => setLengthFilter(l)} className="px-3 py-1.5 rounded-lg text-xs font-black transition-all active:scale-95"
                    style={lengthFilter === l
                      ? { background: "rgba(249,115,22,0.2)", color: "#f97316", border: "1px solid rgba(249,115,22,0.45)", boxShadow: "0 0 10px rgba(249,115,22,0.15)" }
                      : { background: "rgba(15,23,42,0.7)", color: "#60a5fa", border: "1px solid rgba(30,64,175,0.3)" }
                    }
                  >{l}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-2.5" style={{ color: "#7dd3fc" }}>Unicode Symbols</p>
              <Toggle value={useSymbols} onChange={setUseSymbols} />
            </div>
          </div>

          {/* Style selector */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest mb-4 text-center font-black" style={{ color: "#7dd3fc" }}>Choose your style</p>
            <div className="flex flex-wrap justify-center gap-3">
              {styleList.map((s) => (
                <button key={s} onClick={() => setStyle(s)} className="px-6 py-2 rounded-full text-sm font-black transition-all active:scale-95"
                  style={style === s
                    ? { background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", boxShadow: "0 0 22px rgba(249,115,22,0.38)" }
                    : { background: "rgba(15,23,42,0.7)", color: "#93c5fd", border: "1px solid rgba(30,58,138,0.5)" }
                  }
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Mode tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { id: "normal", label: "⚡ Générateur" },
              { id: "battle", label: "⚔ Battle Mode" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className="px-6 py-2.5 rounded-xl text-sm font-black transition-all active:scale-95"
                style={mode === id
                  ? { background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", boxShadow: "0 0 22px rgba(249,115,22,0.35)" }
                  : { background: "rgba(15,23,42,0.7)", color: "#60a5fa", border: "1px solid rgba(30,58,138,0.45)" }
                }
              >{label}</button>
            ))}
          </div>

          {/* ── Normal mode ─────────────────────────────────────────── */}
          {mode === "normal" && (
            <>
              <div className="flex justify-center mb-12">
                <button
                  onClick={generate}
                  disabled={isGenerating}
                  className="px-14 py-4 font-black text-lg rounded-2xl transition-all active:scale-95"
                  style={{ background: isGenerating ? "rgba(249,115,22,0.35)" : "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", boxShadow: isGenerating ? "none" : "0 8px 36px rgba(249,115,22,0.32)", cursor: isGenerating ? "not-allowed" : "pointer" }}
                >
                  {isGenerating ? "Generating..." : "⚡ Generate Names"}
                </button>
              </div>

              {names.length > 0 ? (
                <div>
                  <p className="text-xs text-center uppercase tracking-widest mb-5" style={{ color: "#334155" }}>
                    {style} · {lengthFilter} · {useSymbols ? "Symbols ON" : "Symbols OFF"} · {names.length} names
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {names.map((name, i) => (
                      <NameCard
                        key={`${name}-${i}`}
                        name={name}
                        isCopied={copied === i}
                        onCopy={(n) => copyName(n, i)}
                        onShare={() => setShareTarget({ name, style })}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 rounded-2xl" style={{ border: "1px dashed rgba(30,58,138,0.35)", color: "#1e3a5f" }}>
                  <div className="text-4xl mb-3">🎮</div>
                  <p className="text-sm font-medium">Select a style and click Generate Names</p>
                </div>
              )}
            </>
          )}

          {/* ── Battle mode ─────────────────────────────────────────── */}
          {mode === "battle" && (
            <BattleArena
              style={style}
              useSymbols={useSymbols}
              onShare={(name, s) => setShareTarget({ name, style: s })}
              onCountIncrement={addToCount}
            />
          )}
        </main>

        <footer className="text-center py-6" style={{ color: "#1e3a5f", fontSize: "12px" }}>
          NickGen — Gaming Username Generator
        </footer>
      </div>

      {/* ── History panel ───────────────────────────────────────────── */}
      <div
        className="fixed left-0 right-0 bottom-0 backdrop-blur-xl"
        style={{ zIndex: 30, background: "rgba(8,12,24,0.97)", borderTop: "1px solid rgba(249,115,22,0.22)", maxHeight: showHistory ? "42vh" : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-black" style={{ color: "#f97316" }}>Recent History — {history.length} / 20</h3>
            <button onClick={() => setShowHistory(false)} className="text-xl leading-none font-black" style={{ color: "#475569" }}>×</button>
          </div>
          {history.length === 0 ? (
            <p className="text-xs text-center py-6" style={{ color: "#334155" }}>Generate names to see them here</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 overflow-y-auto pr-1" style={{ maxHeight: "calc(42vh - 72px)" }}>
              {history.map((entry, i) => <HistoryCard key={i} name={entry.name} style={entry.style} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
