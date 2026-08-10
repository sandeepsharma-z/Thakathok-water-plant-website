import Image from "next/image";
import {
  CalendarCheck,
  Headphones,
  Home,
  Menu,
  PackageCheck,
  Search,
  UserRound,
  Wallet,
} from "lucide-react";
import { PageHero, PageShell } from "../components/SiteShell";

const items = [
  [
    "Home.jpeg",
    "Your water dashboard",
    "See offers, wallet balance, dues and quick actions from one beautifully organised home.",
  ],
  [
    "Home-bottom.jpeg",
    "Explore every water need",
    "Browse everyday jars, water bottles and occasion-based packs from one place.",
  ],
  [
    "Hamburger-Sidebar.jpeg",
    "Everything within reach",
    "Move between profile, bookings, wallet, notifications and support with a simple menu.",
  ],
  [
    "Single-Product.jpeg",
    "Clear pack details",
    "See can quantity, best-use guidance, current rate and delivery policies before booking.",
  ],
  [
    "Product-Booking.jpeg",
    "Flexible booking",
    "Choose event details, date, time, quantity and a saved delivery address with ease.",
  ],
  [
    "Booking-Detail.jpeg",
    "Track every booking",
    "Review payment, delivery schedule, amount and booking status without making a call.",
  ],
  [
    "Wallet.jpeg",
    "Your Mahalaxmi Water Plant Wallet",
    "Add money securely, view available balance and understand every transaction.",
  ],
  [
    "Profie.jpeg",
    "A profile that saves time",
    "Keep your name, mobile number, village, address and optional profile photo up to date.",
  ],
  [
    "Help-&-Support.jpeg",
    "Human help, one tap away",
    "Call or WhatsApp the local plant directly whenever you need assistance.",
  ],
  [
    "Loader.jpeg",
    "A refreshing experience",
    "A calm, branded experience from the very first moment you open Mahalaxmi Water Plant.",
  ],
];
const quick = [
  Home,
  Search,
  CalendarCheck,
  PackageCheck,
  Wallet,
  UserRound,
  Headphones,
  Menu,
];
export default function Features() {
  return (
    <PageShell>
      <PageHero
        eyebrow="INSIDE THE APP"
        title="Every screen. One"
        highlight="smooth flow."
        description="Take a closer look at the thoughtfully designed Mahalaxmi Water Plant experience—from finding water to receiving it at your door."
      />
      <section className="screen-library">
        <div className="container">
          <div className="quick-capabilities">
            {[
              "Home",
              "Search",
              "Schedule",
              "Bookings",
              "Wallet",
              "Profile",
              "Support",
              "More",
            ].map((x, i) => {
              const Icon = quick[i];
              return (
                <span key={x}>
                  <Icon />
                  {x}
                </span>
              );
            })}
          </div>
          <div className="screen-list">
            {items.map((it, i) => (
              <article
                className={`screen-story ${i % 2 ? "reverse" : ""}`}
                key={it[0]}
              >
                <div className="screen-copy">
                  <span>0{i + 1}</span>
                  <h2>{it[1]}</h2>
                  <p>{it[2]}</p>
                  <ul>
                    <li>Clean, easy-to-understand interface</li>
                    <li>Designed for quick everyday use</li>
                    <li>English, Hindi & Marathi friendly</li>
                  </ul>
                </div>
                <div className="device-showcase">
                  <div className="device-glow" />
                  <div className="device-frame">
                    <Image
                      src={`/screens/${it[0]}`}
                      alt={it[1]}
                      fill
                      sizes="(max-width: 700px) 70vw, 320px"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
