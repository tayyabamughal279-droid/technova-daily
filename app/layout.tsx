import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TechNova Daily | Practical Technology Guides",
    template: "%s | TechNova Daily",
  },
  description:
    "Practical guides to AI tools, software, and everyday technology, explained clearly.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-inner">
            <Link href="/" className="brand">
              <span className="brand-mark">T<span>N</span></span>
              <span>TechNova <b>Daily.</b></span>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/blog">Articles</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="nav-contact">Contact ↗</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-top">
            <div>
              <Link href="/" className="brand footer-brand">
                <span className="brand-mark">T<span>N</span></span>
                <span>TechNova <b>Daily.</b></span>
              </Link>
              <p>Useful ideas for a digital world.</p>
            </div>
            <div className="footer-links">
              <span className="eyebrow">EXPLORE</span>
              <Link href="/blog">All articles</Link>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-links">
              <span className="eyebrow">INFORMATION</span>
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/terms">Terms &amp; conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© 2026 TechNova Daily.</span>
            <span>Built for curious minds.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}