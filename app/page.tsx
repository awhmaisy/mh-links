"use client";
import React, { useState } from "react";

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

const mainLinks = [
  {
    title: "@maisyalpha",
    url: "https://instagram.com/maisyalpha",
    subline: "Instagram",
  },
  {
    title: "Source loci",
    url: "https://awhmaisy.com",
    subline: "My personal website >:)",
  },
  {
    title: "X Dot Com",
    url: "https://x.com/mtheory",
    subline: "Undercover but my #1 platform",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/awhmaisy",
    subline: "Semi deprecated",
  },
   /**
  {
    title: "Pinboard",
    url: "https://pinboard.in/u:maisy",
    subline: "I love a good PDF!",
  },
 
   * 
   */
];

export default function Home() {
  const [showKofiModal, setShowKofiModal] = useState(false);

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowKofiModal(true);
  };

  const closeModal = () => {
    setShowKofiModal(false);
  };

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Berkeley Mono', monospace",
        fontSize: "14px",
        lineHeight: "1.2",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "'Berkeley Mono', monospace",
            fontSize: "14px",
            fontWeight: "normal",
            marginBottom: "0.5rem",
            color: "#fff",
            lineHeight: "1",
          }}
        >
          Mei Higashi
        </h1>
         <p
          style={{
            fontStyle: "italic",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>
            <span>Contact intercept&middot; </span>
            <a
              href="mailto:im@gpu.rich"
              style={{ color: "#fff", textDecoration: "underline", fontStyle: "italic" }}
            >
              im@gpu.rich
            </a>
          </span>
        </p>
        
        <div
          style={{
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <button
            onClick={handleSupportClick}
            style={{
              fontFamily: "'Berkeley Mono', monospace",
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              border: "1px solid #fff",
              padding: "0.5rem 1.5rem",
              display: "inline-block",
              lineHeight: "1",
              transition: "background-color 0.2s, color 0.2s",
              background: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Accelerate the Mei-TFLOPs
          </button>
        </div>
        
        <p
          style={{
            fontFamily: "'Berkeley Mono', monospace",
            fontSize: "14px",
            color: "#fff",
            marginBottom: "1.5rem",
            lineHeight: "1.2",
            textAlign: "left",
          }}
        >
          <span style={{ lineHeight: "1.2" }}>
            <br />
            Hi millionaires! ♡
            <br />
            <br />
            I started this account as a way to consistently keep us updated on public markets. I focus on creating short & sweet topline memos! 
            <br />
            <br />
            My personal interests gravitate towards startups, deep tech, and the defense / energy / computing sectors.
          </span>
          <br />
          <br />
          If you have a fun fact about industrials, machinery, aerospace, nano, or frontier tech, I&apos;d love to hear it!
        </p>
        
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {mainLinks.map((link) => (
            <li key={link.title} style={{ marginBottom: "1.5rem" }}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Berkeley Mono', monospace",
                  fontSize: "14px",
                  textDecoration: "underline",
                  color: "#fff",
                  lineHeight: "1.2",
                }}
              >
                {link.title}
              </a>
              <div
                style={{
                  fontFamily: "'Berkeley Mono', monospace",
                  fontSize: "14px",
                  color: "#aaa",
                  marginTop: "0.25rem",
                  lineHeight: "1.2",
                }}
              >
                {link.subline}
              </div>
            </li>
          ))}
        </ul>
        
        <p style={{ fontSize: "11px", color: "#fff", textAlign: "center", fontStyle: "italic", marginTop: "1.5rem" }}>
          this page uses <a href="https://usgraphics.com/products/berkeley-mono" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>U.S. Graphics' Berkeley Mono!</a> it's my favorite editor and terminal typeface.
        </p>
      </div>
      
      {showKofiModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#000',
              border: '1px solid #fff',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: '0',
                background: 'transparent',
                border: '1px solid #fff',
                color: '#fff',
                fontFamily: "'Berkeley Mono', monospace",
                fontSize: '14px',
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                lineHeight: '1',
              }}
            >
              ×
            </button>
            <div
              style={{
                backgroundColor: '#000',
                filter: 'invert(1) hue-rotate(180deg)',
              }}
            >
              <iframe
                src="https://ko-fi.com/maisys/?hidefeed=true&widget=true&embed=true"
                style={{
                  width: '100%',
                  border: 'none',
                  minHeight: '500px',
                  filter: 'invert(1) hue-rotate(180deg)',
                }}
                title="Ko-fi widget"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
