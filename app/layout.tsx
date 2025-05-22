import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mei Higashi's Links",
  description: "All my links and socials.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
      }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
