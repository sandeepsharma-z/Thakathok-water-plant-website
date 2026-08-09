'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Check, ChevronRight, Clock3, Droplets, Headphones, Menu, PackageCheck, ShieldCheck, Sparkles, Truck, Wallet, X } from 'lucide-react';
import { FloatingActions } from './components/SiteShell';

const features = [
  { icon: Droplets, title: 'Order in a tap', text: 'Choose your water pack and place an order in just a few simple taps.' },
  { icon: Truck, title: 'Doorstep delivery', text: 'Reliable local delivery, straight from the plant to your home or event.' },
  { icon: CalendarCheck, title: 'Easy scheduling', text: 'Pick a date that suits you and keep track of every booking in one place.' },
  { icon: Wallet, title: 'Secure wallet', text: 'Add money, view dues and manage water payments without the usual hassle.' },
  { icon: PackageCheck, title: 'Event-ready packs', text: 'Smart water packs for birthdays, weddings and gatherings of every size.' },
  { icon: Headphones, title: 'Support that cares', text: 'Need a hand? Reach our water plant team quickly from inside the app.' },
];

const screens = [
  { src: '/screens/Home.jpeg', label: 'Everything at a glance' },
  { src: '/screens/Single-Product.jpeg', label: 'Packs for every occasion' },
  { src: '/screens/Product-Booking.jpeg', label: 'Book your delivery' },
  { src: '/screens/Wallet.jpeg', label: 'Simple, secure wallet' },
];

const fade = { initial: { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: .65 } };

function Logo({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top"><span className="brand-drop brand-logo-image"><Image src="/brand-logo.png" alt="ThakaThok Water logo" fill sizes="52px"/></span><span><b>ShriJal</b><small>PURE WATER</small></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); fn(); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  const close = () => setMenuOpen(false);
  return (
    <main id="top">
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-inner">
          <Logo />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="/about" onClick={close}>About</a>
            <a href="/features" onClick={close}>App Screens</a>
            <a href="#how" onClick={close}>How it works</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a href="#coming-soon" onClick={close} className="nav-cta">Get notified <ArrowRight size={16}/></a>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
            <div className="eyebrow"><span>●</span> Freshness is on the way</div>
            <h1>Pure water.<br/><em>Delivered simply.</em></h1>
            <p className="hero-lead">Your everyday water needs, now effortless. Order trusted drinking water for your home, office or next big celebration.</p>
            <div className="hero-actions">
              <a href="#coming-soon" className="button primary">Notify me at launch <ArrowRight size={18}/></a>
              <a href="#app" className="text-link"><span className="play">▶</span> Explore the app</a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack"><span>💧</span><span>🏠</span><span>✨</span></div>
              <div><b>Built for everyday India</b><small>Simple • Reliable • Local</small></div>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{opacity:0,scale:.92,x:35}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.8,delay:.12}}>
            <div className="water-ring ring-one"/><div className="water-ring ring-two"/>
            <div className="hero-generated-phone"><Image src="/app-development.png" alt="ShriJal app displayed on iPhone" fill priority sizes="(max-width: 768px) 82vw, 390px"/></div>
            <div className="float-card delivery"><span><Truck size={20}/></span><div><small>Delivery status</small><b>On the way</b></div><span className="live-dot"/></div>
            <div className="float-card purity"><ShieldCheck size={22}/><div><b>Pure & trusted</b><small>Quality you can count on</small></div></div>
            <div className="bubble b1"/><div className="bubble b2"/><div className="bubble b3"/>
          </motion.div>
        </div>
        <div className="hero-bottom-wave"/>
      </section>

      <section className="promise-strip">
        <div className="container promise-grid">
          <div><ShieldCheck/><span><b>Quality assured</b><small>Clean water, every order</small></span></div>
          <div><Clock3/><span><b>Time-saving</b><small>No calls, no waiting</small></span></div>
          <div><Truck/><span><b>Reliable delivery</b><small>At your chosen address</small></span></div>
          <div><Headphones/><span><b>Local support</b><small>Help when you need it</small></span></div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="container">
          <motion.div {...fade} className="section-heading centered"><span className="kicker">WHY SHRIJAL</span><h2>Water delivery that just <em>flows.</em></h2><p>Thoughtfully designed around the way you live, work and celebrate.</p></motion.div>
          <div className="feature-grid">{features.map((f,i)=><motion.article {...fade} transition={{duration:.55,delay:i*.06}} className="feature-card" key={f.title}><span className="feature-icon"><f.icon/></span><h3>{f.title}</h3><p>{f.text}</p><span className="mini-arrow"><ChevronRight size={17}/></span></motion.article>)}</div>
        </div>
      </section>

      <section id="app" className="section app-section">
        <div className="app-blob"/>
        <div className="container app-grid">
          <motion.div {...fade} className="app-copy"><span className="kicker">MEET THE APP</span><h2>Your water world,<br/><em>in your pocket.</em></h2><p>From a quick 20L jar reorder to water planning for a wedding—ShriJal keeps every detail clear, quick and close at hand.</p>
            <ul><li><Check/> Browse jars, bottles and event packs</li><li><Check/> Track bookings and view order history</li><li><Check/> Manage wallet balance and pending dues</li><li><Check/> Get help directly from your water plant</li></ul>
            <a className="button secondary" href="#coming-soon">Join the launch list <ArrowRight size={18}/></a>
          </motion.div>
          <div className="screens-stage">{screens.map((s,i)=><motion.div key={s.src} className={`screen-phone screen-${i+1}`} initial={{opacity:0,y:50,rotate:i%2?5:-5}} whileInView={{opacity:1,y:0,rotate:i===0?-8:i===1?-2:i===2?5:10}} viewport={{once:true}} transition={{duration:.7,delay:i*.1}}><Image src={s.src} alt={s.label} fill sizes="260px"/><span>{s.label}</span></motion.div>)}</div>
        </div>
      </section>

      <section id="how" className="section how-section"><div className="container"><motion.div {...fade} className="section-heading centered"><span className="kicker">SIMPLE BY DESIGN</span><h2>Tap. Choose. <em>Hydrate.</em></h2><p>Fresh water at your door in three refreshingly simple steps.</p></motion.div><div className="steps">
        {[['01','Tell us where','Add your delivery address and choose your preferred date.'],['02','Pick your water','Select jars, bottle packs or a complete event package.'],['03','We bring it','Confirm your booking and leave the delivery to us.']].map((s,i)=><motion.div {...fade} transition={{duration:.55,delay:i*.1}} className="step" key={s[0]}><span className="step-no">{s[0]}</span><div className="step-art">{i===0?<CalendarCheck/>:i===1?<Droplets/>:<Truck/>}</div><h3>{s[1]}</h3><p>{s[2]}</p>{i<2&&<div className="step-line"/>}</motion.div>)}
      </div></div></section>

      <section id="coming-soon" className="coming-section"><div className="container"><motion.div {...fade} className="coming-card"><div className="sparkle s-one">✦</div><div className="sparkle s-two">✦</div><span className="coming-icon"><Droplets/></span><span className="kicker light">COMING SOON</span><h2>A fresher way to order water<br/>is almost here.</h2><p>We’re adding the final drops. Be among the first to know when ShriJal goes live.</p><form className="notify-form" onSubmit={(e)=>e.preventDefault()}><input type="email" placeholder="Enter your email address" aria-label="Email address" required/><button className="button white" type="submit">Keep me posted <ArrowRight size={18}/></button></form><small><ShieldCheck size={14}/> No spam. Only one refreshing launch update.</small></motion.div></div></section>

      <footer id="contact"><div className="container footer-grid"><div><Logo light/><p>Making clean, reliable water delivery beautifully simple for every home and occasion.</p></div><div><h4>Explore</h4><a href="/about">About ShriJal</a><a href="/features">App Screens</a><a href="#how">How it works</a></div><div><h4>Support</h4><a href="/support">Help & Support</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms of Use</a></div><div className="footer-note"><Sparkles/><p><b>Made with care in Maharashtra</b><br/>For homes, offices & celebrations.</p></div></div><div className="container copyright"><span>© 2026 ShriJal. All rights reserved.</span><span>Design & Developed by <a className="solvinex" href="https://solvinex.com" target="_blank" rel="noopener noreferrer">Solvinex</a></span></div></footer>
      <FloatingActions />
    </main>
  );
}
