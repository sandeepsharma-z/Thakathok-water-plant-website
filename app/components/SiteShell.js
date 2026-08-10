"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Droplets, Menu, MessageCircle, X } from "lucide-react";

export function Brand({ light = false }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/">
      <span className="brand-drop brand-logo-image">
        <Image
          src="/brand-logo.png"
          alt="ThakaThok Water logo"
          fill
          sizes="52px"
        />
      </span>
      <span>
        <b>Mahalaxmi Water Plant</b>
        <small>PURE WATER</small>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`nav inner-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Brand />
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <div className="mobile-menu-logo">
            <Brand />
          </div>
          <Link onClick={() => setOpen(false)} href="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} href="/features">
            App Screens
          </Link>
          <Link onClick={() => setOpen(false)} href="/#wallet">
            Wallet
          </Link>
          <Link onClick={() => setOpen(false)} href="/support">
            Support
          </Link>
          <Link onClick={() => setOpen(false)} href="/privacy-policy">
            Privacy
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="nav-cta"
            href="/#coming-soon"
          >
            Coming Soon
          </Link>
        </nav>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>
            Making clean, reliable water delivery beautifully simple for every
            home and occasion.
          </p>
        </div>
        <div>
          <h4>Discover</h4>
          <Link href="/about">About Mahalaxmi Water Plant</Link>
          <Link href="/features">App screens</Link>
          <Link href="/#how">How it works</Link>
        </div>
        <div>
          <h4>Legal & Help</h4>
          <Link href="/support">Support</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
        <div className="footer-note">
          <Droplets />
          <p>
            <b>Made with care in Maharashtra</b>
            <br />
            For homes, offices & celebrations.
          </p>
        </div>
      </div>
      <div className="container copyright">
        <span>© 2026 Mahalaxmi Water Plant. All rights reserved.</span>
        <span>
          Design & Developed by{" "}
          <a
            className="solvinex"
            href="https://solvinex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solvinex
          </a>
        </span>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 450);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <div className="floating-actions">
      <a
        className="whatsapp-float"
        href="https://wa.me/918080739807?text=Hello%20Mahalaxmi%20Water%20Plant%2C%20I%20need%20help%20with%20water%20delivery."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
        <span>Chat with us</span>
      </a>
      <button
        className={`top-float ${show ? "visible" : ""}`}
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb" />
      <div className="container">
        <span className="kicker">{eyebrow}</span>
        <h1>
          {title} {highlight && <em>{highlight}</em>}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
