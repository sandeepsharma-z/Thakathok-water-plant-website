"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Droplets,
  Headphones,
  LoaderCircle,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
  X,
} from "lucide-react";
import { FloatingActions } from "./components/SiteShell";

const features = [
  {
    icon: Droplets,
    title: "Order in a tap",
    text: "Choose your water pack and place an order in just a few simple taps.",
  },
  {
    icon: Truck,
    title: "Doorstep delivery",
    text: "Reliable local delivery, straight from the plant to your home or event.",
  },
  {
    icon: CalendarCheck,
    title: "Easy scheduling",
    text: "Pick a date that suits you and keep track of every booking in one place.",
  },
  {
    icon: Wallet,
    title: "Secure wallet",
    text: "Add money, view dues and manage water payments without the usual hassle.",
  },
  {
    icon: PackageCheck,
    title: "Event-ready packs",
    text: "Smart water packs for birthdays, weddings and gatherings of every size.",
  },
  {
    icon: Headphones,
    title: "Support that cares",
    text: "Need a hand? Reach our water plant team quickly from inside the app.",
  },
];

const screens = [
  { src: "/screens/Home.jpeg", label: "Everything at a glance" },
  { src: "/screens/Single-Product.jpeg", label: "Packs for every occasion" },
  { src: "/screens/Product-Booking.jpeg", label: "Book your delivery" },
  { src: "/screens/Wallet.jpeg", label: "Simple, secure wallet" },
];

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top">
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
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [launchEmail, setLaunchEmail] = useState("");
  const [subscribeState, setSubscribeState] = useState({
    status: "idle",
    message: "",
  });
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (subscribeState.status !== "success") return;
    const timer = window.setTimeout(
      () => setSubscribeState({ status: "idle", message: "" }),
      6000,
    );
    return () => window.clearTimeout(timer);
  }, [subscribeState.status]);
  const close = () => setMenuOpen(false);
  const subscribe = async (event) => {
    event.preventDefault();
    setSubscribeState({ status: "loading", message: "" });
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/launch-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: launchEmail,
          company: data.get("company"),
        }),
      });
      const raw = await response.text();
      let result;
      try {
        result = JSON.parse(raw);
      } catch {
        result = {
          message: response.ok
            ? "You’re on the launch list!"
            : "The server returned an unexpected response.",
        };
      }
      if (!response.ok)
        throw new Error(result.message || "Could not subscribe.");
      setLaunchEmail("");
      setSubscribeState({ status: "success", message: result.message });
    } catch (error) {
      setSubscribeState({
        status: "error",
        message: error.message || "Please try again.",
      });
    }
  };
  return (
    <main id="top">
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <div className="nav-inner">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <div className="mobile-menu-logo">
              <Logo />
            </div>
            <a href="/about" onClick={close}>
              About
            </a>
            <a href="/features" onClick={close}>
              App Screens
            </a>
            <a href="#wallet" onClick={close}>
              Wallet
            </a>
            <a href="#how" onClick={close}>
              How it works
            </a>
            <a href="#contact" onClick={close}>
              Contact
            </a>
            <a href="#coming-soon" onClick={close} className="nav-cta">
              Get notified <ArrowRight size={16} />
            </a>
          </nav>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="eyebrow">
              <span>●</span> Freshness is on the way
            </div>
            <h1>
              Pure water.
              <br />
              <em>Delivered simply.</em>
            </h1>
            <p className="hero-lead">
              Your everyday water needs, now effortless. Order trusted drinking
              water for your home, office or next big celebration.
            </p>
            <div className="hero-actions">
              <a href="#coming-soon" className="button primary">
                Notify me at launch <ArrowRight size={18} />
              </a>
              <a href="#app" className="text-link">
                <span className="play">▶</span> Explore the app
              </a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack">
                <span>💧</span>
                <span>🏠</span>
                <span>✨</span>
              </div>
              <div>
                <b>Built for everyday India</b>
                <small>Simple • Reliable • Local</small>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="water-ring ring-one" />
            <div className="water-ring ring-two" />
            <div className="hero-generated-phone">
              <Image
                src="/app-development.png"
                alt="Mahalaxmi Water Plant app displayed on iPhone"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 390px"
              />
            </div>
            <div className="float-card delivery">
              <span>
                <Truck size={20} />
              </span>
              <div>
                <small>Delivery status</small>
                <b>On the way</b>
              </div>
              <span className="live-dot" />
            </div>
            <div className="float-card purity">
              <ShieldCheck size={22} />
              <div>
                <b>Pure & trusted</b>
                <small>Quality you can count on</small>
              </div>
            </div>
            <div className="bubble b1" />
            <div className="bubble b2" />
            <div className="bubble b3" />
          </motion.div>
        </div>
        <div className="hero-bottom-wave" />
      </section>

      <section className="promise-strip">
        <div className="container promise-grid">
          <div>
            <ShieldCheck />
            <span>
              <b>Quality assured</b>
              <small>Clean water, every order</small>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <b>Time-saving</b>
              <small>No calls, no waiting</small>
            </span>
          </div>
          <div>
            <Truck />
            <span>
              <b>Reliable delivery</b>
              <small>At your chosen address</small>
            </span>
          </div>
          <div>
            <Headphones />
            <span>
              <b>Local support</b>
              <small>Help when you need it</small>
            </span>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="container">
          <motion.div {...fade} className="section-heading centered">
            <span className="kicker">WHY MAHALAXMI WATER PLANT</span>
            <h2>
              Water delivery that just <em>flows.</em>
            </h2>
            <p>
              Thoughtfully designed around the way you live, work and celebrate.
            </p>
          </motion.div>
          <div className="feature-grid">
            {features.map((f, i) => (
              <motion.article
                {...fade}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="feature-card"
                key={f.title}
              >
                <span className="feature-icon">
                  <f.icon />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="mini-arrow">
                  <ChevronRight size={17} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="section app-section">
        <div className="app-blob" />
        <div className="container app-grid">
          <motion.div {...fade} className="app-copy">
            <span className="kicker">MEET THE APP</span>
            <h2>
              Your water world,
              <br />
              <em>in your pocket.</em>
            </h2>
            <p>
              From a quick 20L jar reorder to water planning for a
              wedding—Mahalaxmi Water Plant keeps every detail clear, quick and close at hand.
            </p>
            <ul>
              <li>
                <Check /> Browse jars, bottles and event packs
              </li>
              <li>
                <Check /> Track bookings and view order history
              </li>
              <li>
                <Check /> Manage wallet balance and pending dues
              </li>
              <li>
                <Check /> Get help directly from your water plant
              </li>
            </ul>
            <a className="button secondary" href="#coming-soon">
              Join the launch list <ArrowRight size={18} />
            </a>
          </motion.div>
          <div className="screens-stage">
            {screens.map((s, i) => (
              <motion.div
                key={s.src}
                className={`screen-phone screen-${i + 1}`}
                initial={{ opacity: 0, y: 50, rotate: i % 2 ? 5 : -5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: i === 0 ? -8 : i === 1 ? -2 : i === 2 ? 5 : 10,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Image src={s.src} alt={s.label} fill sizes="260px" />
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="wallet" className="section wallet-showcase">
        <div className="wallet-orb wallet-orb-one" />
        <div className="wallet-orb wallet-orb-two" />
        <div className="container wallet-showcase-grid">
          <motion.div {...fade} className="wallet-device-stage">
            <div className="wallet-phone">
              <Image
                src="/screens/Wallet.jpeg"
                alt="Mahalaxmi Water Plant app wallet screen with secure add money option"
                fill
                sizes="(max-width: 760px) 72vw, 310px"
              />
            </div>
            <div className="wallet-float-card wallet-balance-card">
              <span>
                <Wallet />
              </span>
              <div>
                <small>Available balance</small>
                <b>Always in your control</b>
              </div>
            </div>
            <div className="wallet-float-card wallet-secure-card">
              <ShieldCheck />
              <div>
                <b>Secure payments</b>
                <small>Verified server-side</small>
              </div>
            </div>
          </motion.div>
          <motion.div {...fade} className="wallet-showcase-copy">
            <span className="kicker">MAHALAXMI WATER PLANT WALLET</span>
            <h2>
              Add money once.
              <br />
              <em>Order in seconds.</em>
            </h2>
            <p>
              The Mahalaxmi Water Plant app includes a convenient wallet built for faster
              everyday water orders. Add money securely, see your available
              balance and keep every transaction easy to understand.
            </p>
            <div className="wallet-points">
              <div>
                <span>
                  <ShieldCheck />
                </span>
                <div>
                  <b>Secure add money</b>
                  <small>
                    Payments are verified securely before wallet credit is
                    added.
                  </small>
                </div>
              </div>
              <div>
                <span>
                  <Clock3 />
                </span>
                <div>
                  <b>Faster checkout</b>
                  <small>
                    Use your wallet balance for quick, hassle-free water
                    bookings.
                  </small>
                </div>
              </div>
              <div>
                <span>
                  <Wallet />
                </span>
                <div>
                  <b>Clear transaction history</b>
                  <small>
                    Track wallet credits, payments and your current balance in
                    one place.
                  </small>
                </div>
              </div>
            </div>
            <a href="#coming-soon" className="button primary wallet-cta">
              Get the app at launch <ArrowRight size={18} />
            </a>
            <p className="wallet-note">
              <ShieldCheck /> Wallet and payment features will be available
              securely inside the Mahalaxmi Water Plant app.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="how" className="section how-section">
        <div className="container">
          <motion.div {...fade} className="section-heading centered">
            <span className="kicker">SIMPLE BY DESIGN</span>
            <h2>
              Tap. Choose. <em>Hydrate.</em>
            </h2>
            <p>Fresh water at your door in three refreshingly simple steps.</p>
          </motion.div>
          <div className="steps">
            {[
              [
                "01",
                "Tell us where",
                "Add your delivery address and choose your preferred date.",
              ],
              [
                "02",
                "Pick your water",
                "Select jars, bottle packs or a complete event package.",
              ],
              [
                "03",
                "We bring it",
                "Confirm your booking and leave the delivery to us.",
              ],
            ].map((s, i) => (
              <motion.div
                {...fade}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="step"
                key={s[0]}
              >
                <span className="step-no">{s[0]}</span>
                <div className="step-art">
                  {i === 0 ? (
                    <CalendarCheck />
                  ) : i === 1 ? (
                    <Droplets />
                  ) : (
                    <Truck />
                  )}
                </div>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
                {i < 2 && <div className="step-line" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="coming-soon" className="coming-section">
        <div className="container">
          <motion.div {...fade} className="coming-card">
            <div className="sparkle s-one">✦</div>
            <div className="sparkle s-two">✦</div>
            <span className="coming-icon">
              <Droplets />
            </span>
            <span className="kicker light">COMING SOON</span>
            <h2>
              A fresher way to order water
              <br />
              is almost here.
            </h2>
            <p>
              We’re adding the final drops. Be among the first to know when
              Mahalaxmi Water Plant goes live.
            </p>
            <form className="notify-form" onSubmit={subscribe}>
              <input
                type="email"
                value={launchEmail}
                onChange={(event) => setLaunchEmail(event.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                autoComplete="email"
                required
                disabled={subscribeState.status === "loading"}
              />
              <input
                className="website-field"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <button
                className="button white"
                type="submit"
                disabled={subscribeState.status === "loading"}
              >
                {subscribeState.status === "loading" ? (
                  <>
                    <LoaderCircle className="submit-spinner" size={18} /> Saving
                    your email…
                  </>
                ) : (
                  <>
                    Keep me posted <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
            {subscribeState.message && (
              <div
                className={`subscribe-message ${subscribeState.status}`}
                role="status"
              >
                {subscribeState.status === "success" ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <AlertCircle size={16} />
                )}{" "}
                {subscribeState.message}
              </div>
            )}
            <small>
              <ShieldCheck size={14} /> No spam. Only one refreshing launch
              update.
            </small>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {subscribeState.message && subscribeState.status !== "loading" && (
          <motion.div
            className={`subscribe-toast ${subscribeState.status}`}
            initial={{ opacity: 0, y: -22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            role="alert"
          >
            <span>
              {subscribeState.status === "success" ? (
                <CheckCircle2 />
              ) : (
                <AlertCircle />
              )}
            </span>
            <div>
              <b>
                {subscribeState.status === "success"
                  ? "You’re on the list!"
                  : "Submission failed"}
              </b>
              <p>{subscribeState.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setSubscribeState({ status: "idle", message: "" })}
              aria-label="Close message"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer id="contact">
        <div className="container footer-grid">
          <div>
            <Logo light />
            <p>
              Making clean, reliable water delivery beautifully simple for every
              home and occasion.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="/about">About Mahalaxmi Water Plant</a>
            <a href="/features">App Screens</a>
            <a href="#how">How it works</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="/support">Help & Support</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
          <div className="footer-note">
            <Sparkles />
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
      <FloatingActions />
    </main>
  );
}
