import { PageHero, PageShell } from "../components/SiteShell";
export default function Terms() {
  return (
    <PageShell>
      <PageHero
        eyebrow="TERMS OF USE"
        title="Simple rules for a"
        highlight="smooth service."
        description="These terms explain the basic conditions for using the Mahalaxmi Water Plant app and water delivery services."
      />
      <section className="legal-section">
        <div className="container legal-single">
          <p className="effective">Effective: 8 August 2026</p>
          <h2>1. Service</h2>
          <p>
            Mahalaxmi Water Plant enables customers to browse water products, place and manage
            bookings, schedule deliveries, make eligible payments, use a wallet
            and contact Mahalakshmi Water Plant. Availability, rates and
            delivery areas may change through plant settings.
          </p>
          <h2>2. Customer details</h2>
          <p>
            You agree to provide a valid name, mobile number and accurate
            delivery information. You are responsible for activity under your
            customer session and for keeping your device secure.
          </p>
          <h2>3. Bookings and availability</h2>
          <p>
            A request is subject to daily inventory, delivery capacity, service
            area and minimum notice requirements. A booking is confirmed only
            when the app displays confirmation. Event-pack quantities and
            delivery schedules must be reviewed before submission.
          </p>
          <h2>4. Pricing, payments and wallet</h2>
          <p>
            Current rates, delivery charges, offers, deposits, advance
            requirements and applicable taxes are shown during booking. Online
            transactions are processed through Razorpay and verified
            server-side. Wallet credit may be used only within the Mahalaxmi Water Plant
            service and is not cash unless required by law.
          </p>
          <h2>5. Changes, cancellations and refunds</h2>
          <p>
            Edit, cancellation and refund eligibility depends on booking status
            and the policy shown in the app. An advance may be non-refundable
            where stated before payment. Any approved refund follows the
            original payment route or applicable wallet process.
          </p>
          <h2>6. Water cans and delivery</h2>
          <p>
            Customers must provide safe delivery access and return reusable cans
            within the displayed return period. Lost or damaged cans may attract
            the charge shown in the app or communicated by the plant.
          </p>
          <h2>7. Acceptable use</h2>
          <p>
            Do not misuse the service, attempt unauthorised access, interfere
            with payments, place fraudulent bookings or use the app in violation
            of law.
          </p>
          <h2>8. Liability</h2>
          <p>
            We aim to provide reliable service, but delivery can be affected by
            stock, weather, road access, emergencies or other circumstances
            outside reasonable control. Nothing in these terms limits rights
            that cannot lawfully be limited.
          </p>
          <h2>9. Contact</h2>
          <p>
            For questions, call <a href="tel:+918080739807">+91 80807 39807</a>{" "}
            or contact the team through{" "}
            <a href="https://wa.me/918080739807">WhatsApp</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
