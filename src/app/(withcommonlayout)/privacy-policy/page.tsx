
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  CreditCard,
  Share2,
  Cookie,
  Clock3,
  UserRound,
  Mail,
  ArrowRight,
} from "lucide-react";

const policySections = [
  {
    id: "information",
    title: "Information We Collect",
    icon: Database,
    content:
      "When you browse, create an account, place an order or contact us, we may collect your name, phone number, email address, billing and delivery address, order details, communications, device information and website activity.",
  },
  {
    id: "payments",
    title: "Payments",
    icon: CreditCard,
    content:
      "Cash on Delivery does not require online card details. If additional payment gateways are enabled, their providers process payment information under their own privacy terms.",
  },
  {
    id: "sharing",
    title: "Sharing Information",
    icon: Share2,
    content:
      "We may share necessary information with courier partners, hosting providers, payment providers, support platforms, analytics providers and professional advisers. We do not sell personal information.",
  },
  {
    id: "cookies",
    title: "Cookies and Analytics",
    icon: Cookie,
    content:
      "Our website may use essential cookies for cart and account functions, plus optional analytics or advertising cookies where configured. Review our Cookie Policy for more information.",
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: Clock3,
    content:
      "We retain information only as long as needed for orders, customer support, fraud prevention, business records and applicable legal obligations.",
  },
  {
    id: "choices",
    title: "Your Choices",
    icon: UserRound,
    content:
      "You may request access, correction or deletion where applicable by contacting [privacy email]. Some information may need to be retained for legal or transactional reasons.",
  },
  {
    id: "security",
    title: "Security",
    icon: LockKeyhole,
    content:
      "We use reasonable safeguards, but no online system can guarantee absolute security. Use a strong account password and do not share login details.",
  },
];

const informationUses = [
  "Process, confirm, deliver and support orders",
  "Communicate order and courier updates",
  "Prevent fraud and protect the website",
  "Improve products, service and website usability",
  "Send marketing only where permitted and selected",
  "Meet accounting, tax and legal obligations",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCF8F7]">
      {/* PAGE HEADER */}
      <section className="border-b border-primary/10 bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Your privacy matters
            </p>

            <h1 className="font-serif text-4xl font-medium text-[#780019] sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
              Learn how Bagaholic collects, uses, protects and manages
              your personal information when you shop with us.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-primary" />
              Your information, handled with care
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            {/* INTRO */}
            <div className="mb-10 rounded-lg border border-primary/10 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <ShieldCheck size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#2A171B]">
                    Our Commitment to Privacy
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    This starter policy explains common data practices for
                    an online store. It should be reviewed and updated to
                    match the services, analytics and marketing tools
                    actually used by Bagaholic.
                  </p>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="rounded-lg border border-primary/10 bg-white p-6 sm:p-10">
              {/* INFORMATION COLLECTED */}
              <section
                id="information"
                className="border-b border-primary/10 pb-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Database size={21} className="text-primary" />

                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Information We Collect
                  </h2>
                </div>

                <p className="text-sm leading-8 text-gray-600">
                  {policySections[0].content}
                </p>
              </section>

              {/* HOW WE USE INFORMATION */}
              <section className="border-b border-primary/10 py-8">
                <h2 className="mb-5 font-serif text-2xl font-semibold text-[#2A171B]">
                  How We Use Information
                </h2>

                <ul className="space-y-4">
                  {informationUses.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                      <span className="text-sm leading-7 text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* OTHER POLICY SECTIONS */}
              {policySections.slice(1).map((section) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="border-b border-primary/10 py-8 last:border-b-0"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon size={21} className="shrink-0 text-primary" />

                      <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-sm leading-8 text-gray-600">
                      {section.content}
                    </p>

                    {section.id === "cookies" && (
                      <Link
                        href="/cookie-policy"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                      >
                        View Cookie Policy
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </section>
                );
              })}

              {/* CONTACT */}
              <section id="contact" className="pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <Mail size={21} className="text-primary" />

                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Contact Us
                  </h2>
                </div>

                <p className="text-sm leading-8 text-gray-600">
                  For privacy-related questions, requests or concerns,
                  please contact Bagaholic using our official contact
                  information.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-semibold text-white transition hover:bg-primary/90"
                >
                  Contact Support
                  <ArrowRight size={15} />
                </Link>
              </section>
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-[#F8F0EF] p-5">
              <LockKeyhole
                size={19}
                className="mt-0.5 shrink-0 text-primary"
              />

              <p className="text-xs leading-6 text-gray-600">
                We value your trust and aim to handle personal information
                responsibly. If you have questions about this policy,
                please reach out to our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
