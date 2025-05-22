"use client";
import React from "react";
import { useScramble } from "use-scramble";

const mainLinks = [
  {
    title: "Source loci",
    url: "https://awhmaisy.com",
    subline: "@awhmaisy personal site >:)",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/awhmaisy",
    subline: "I am here occasionally",
  },
  {
    title: "Maisyverse TikTok",
    url: "https://tiktok.com/@maisyverse",
    subline: "Science/tech, space and physics",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@awhmaisy",
    subline: "Soon!",
  },
  {
    title: "Amazon Book List",
    url: "https://amazon.com/hz/wishlist/ls/example",
    subline: "Books I recommend and love",
  },
  {
    title: "Substack",
    url: "https://awhmaisy.substack.com/",
    subline: "Monthlies",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/user/msf84l3xh0uyy5vvf1nn0idon?si=c04a0dd18d184ae0",
    subline: "Occasional indulgences",
  }
];

const sideLinks = [
  {
    title: "Are.na",
    url: "https://are.na/mei-higashi",
    subline: "Quick-shot designs and apparel graphics",
  },
  {
    title: "Pinterest",
    url: "https://pinterest.com/awhmaisy",
    subline: "Algorithmic aesthetic injection",
  },
  {
    title: "Zora",
    url: "https://zora.co/maisy",
    subline: "I have not been taking photos lately but I will one day be called to fufill a Zora mission",
  },
  {
    title: "Orb / Lens",
    url: "https://orb.club/@maisyy",
    subline: "Lens Protocol?",
  },
  {
    title: "Cosmos",
    url: "https://cosmos.so/maisy",
    subline: "Abandoned satellite...",
  },
  {
    title: "Pinboard",
    url: "https://pinboard.in/u:maisy",
    subline: "Archives",
  },
];

export default function Home() {
  const { ref } = useScramble({ text: "Mei Higashi", speed: 0.1, range: [0x2661, 0x2727, 0x22B9, 0xFF61, 0x2661, 0x02DA] });

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "Exposure-0, system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 0,
      }}
    >
      <div className="profile-header" style={{ width: "100%", padding: "2rem 2rem 0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ position: "relative", width: 88, height: 88, minWidth: 88, minHeight: 88 }}>
            <img
              src="/profile.jpg"
              alt="Profile photo"
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #eee",
                background: "#f3f3f3",
                display: "block",
              }}
            />
            <img
              src="/heartbloom.png"
              alt="Heartbloom overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 88,
                height: 88,
                pointerEvents: "none",
              }}
            />
          </div>
          <div>
            <h1
              ref={ref}
              style={{
                fontFamily: "Exposure-50, system-ui, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "0.1rem",
                textAlign: "left",
              }}
            >
              Mei Higashi
            </h1>
            <div
            style={{
              fontFamily: "Exposure-0, system-ui, sans-serif",
              fontSize: "0.9rem",
              color: "#444",
              textAlign: "left",
            }}
          >
                        <div
              style={{
                fontFamily: "Exposure-0, system-ui, sans-serif",
                fontSize: "0.9rem",
                color: "#444",
                textAlign: "left",
              }}
            >
              Hi! You've found all of my links.
            </div>
            <a
              href="mailto:m@mach012.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#F2B0C9"}
              onMouseOut={(e) => e.currentTarget.style.color = "#444"}
            >
              PR/Business inquiries: m@mach012.com
            </a>
          </div>
          <div
            style={{
              fontFamily: "Exposure-0, system-ui, sans-serif",
              fontSize: "0.9rem",
              color: "#444",
              textAlign: "left",
            }}
          >
            <a
              href="https://x.com/awhmaisy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#F2B0C9"}
              onMouseOut={(e) => e.currentTarget.style.color = "#444"}
            >
              Primary aetheric node: x.com/awhmaisy
            </a>
          </div>
          </div>
        </div>
      </div>
      <div
        className="link-columns"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          padding: "2rem 0 2rem 2rem",
          gap: "2rem",
          position: "relative",
        }}
      >
        <section style={{ flex: 1, maxWidth: 320 }}>
          <div
            style={{
              fontFamily: "Exposure-20, system-ui, sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.7rem",
              letterSpacing: "0.01em",
            }}
          >
            Core Nexuses
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {mainLinks.map((link) => (
              <li key={link.title} style={{ marginBottom: "1.5rem" }}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Exposure-20, system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    paddingBottom: "0.08em",
                    transition: "color 0.2s",
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  {link.title}
                </a>
                <div
                  style={{
                    fontFamily: "Exposure-0, system-ui, sans-serif",
                    fontSize: "0.85rem",
                    color: "#888",
                    marginTop: "0.15em",
                    textAlign: "left",
                  }}
                >
                  {link.subline}
                </div>
              </li>
            ))}
          </ul>
        </section>
      
        <section style={{ flex: 1, maxWidth: 320 }}>
          <div
            style={{
              fontFamily: "Exposure-20, system-ui, sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.7rem",
              letterSpacing: "0.01em",
            }}
          >
            Interweb Vaults
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {sideLinks.map((link) => (
              <li key={link.title} style={{ marginBottom: "1.5rem" }}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Exposure-20, system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    paddingBottom: "0.08em",
                    transition: "color 0.2s",
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  {link.title}
                </a>
                <div
                  style={{
                    fontFamily: "Exposure-0, system-ui, sans-serif",
                    fontSize: "0.85rem",
                    color: "#888",
                    marginTop: "0.15em",
                    textAlign: "left",
                  }}
                >
                  {link.subline}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}