
import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  Settings,
  BarChart3,
  Megaphone,
  Clock3,
  LockKeyhole,
  Mail,
  ArrowRight,
  Check,
  Info,
  Globe,
} from "lucide-react";

const cookieTypes = [
  {
    title: "Essential Cookies",
    icon: ShieldCheck,
    badge: "Required",
    description:
      "These cookies are necessary for the website to function properly. They support features such as shopping carts, checkout, account login, security, and basic website navigation.",
    examples: [
      "Shopping cart and checkout functionality",
      "User login and session management",
      "Website security and fraud prevention",
    ],
  },
  {
    title: "Functional Cookies",
    icon: Settings,
    badge: "Optional",
    description:
      "Functional cookies help remember your preferences and improve your shopping experience. They may store settings such as language preferences or previously selected options.",
    examples: [
      "Remembering user preferences",
      "Saving selected website settings",
      "Improving personalized browsing",
    ],
  },
  {
    title: "Analytics Cookies",
    icon: BarChart3,
    badge: "Optional",
    description:
      "Analytics cookies help us understand how visitors interact with our website. This information may be used to improve website performance, navigation, and overall user experience.",
    examples: [
      "Understanding website traffic",
      "Measuring page performance",
      "Improving website usability",
    ],
  },
  {
    title: "Marketing Cookies",
    icon: Megaphone,
    badge: "Optional",
    description:
      "Marketing cookies may be used to measure advertising campaigns and show relevant promotions. These cookies may be set by third-party advertising services when enabled.",
    examples: [
      "Measuring advertising effectiveness",
      "Understanding campaign performance",
      "Showing relevant promotions",
    ],
  },
];

const policySections = [
  {
    title: "What Are Cookies?",
    icon: Cookie,
    content:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, support essential functions, and improve your browsing experience.",
  },
  {
    title: "How Long Do Cookies Last?",
    icon: Clock3,
    content:
      "Some cookies are temporary and disappear when you close your browser. Others remain on your device for a specified period or until you delete them. Cookie durations depend on their purpose and the services used.",
  },
  {
    title: "Third-Party Cookies",
    icon: Globe,
    content:
      "Some website features may use services provided by third parties, such as payment gateways, analytics platforms, or advertising providers. These services may set their own cookies according to their privacy and cookie policies.",
  },
  {
    title: "Managing Your Cookie Preferences",
    icon: Settings,
    content:
      "You can manage or delete cookies through your browser settings. Most browsers allow you to block cookies or receive notifications before cookies are stored. Disabling essential cookies may affect shopping cart, checkout, login, and other website functions.",
  },
  {
    title: "Updates to This Policy",
    icon: LockKeyhole,
    content:
      "We may update this Cookie Policy to reflect changes in website functionality, third-party services, or applicable requirements. Any updates will be published on this page.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCF8F7]">
      {/* PAGE HEADER */}
      <section className="border-b border-primary/10 bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Transparency & Trust
            </p>

            <h1 className="font-serif text-4xl font-medium text-[#780019] sm:text-5xl">
              Cookie Policy
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
              Learn how Bagaholic uses cookies and similar technologies
              to provide a smooth, secure, and personalized shopping
              experience.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-primary" />
              Your privacy is important to us
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            {/* INTRO CARD */}
            <div className="mb-10 rounded-lg border border-primary/10 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Cookie size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#2A171B]">
                    Understanding Our Cookie Usage
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    This policy explains how cookies may be used on the
                    Bagaholic website. The cookies actually used depend
                    on the website features and third-party services
                    that are enabled.
                  </p>
                </div>
              </div>
            </div>

            {/* WHAT ARE COOKIES */}
            <div className="mb-8 rounded-lg border border-primary/10 bg-white p-6 sm:p-10">
              <div className="mb-4 flex items-center gap-3">
                <Cookie size={21} className="text-primary" />

                <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                  What Are Cookies?
                </h2>
              </div>

              <p className="text-sm leading-8 text-gray-600">
                {policySections[0].content}
              </p>
            </div>

            {/* COOKIE TYPES */}
            <div className="mb-8 rounded-lg border border-primary/10 bg-white p-6 sm:p-10">
              <div className="mb-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Cookie Categories
                </p>

                <h2 className="font-serif text-2xl font-semibold text-[#2A171B] sm:text-3xl">
                  Types of Cookies
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Different cookies serve different purposes. Below are
                  the common categories that may be used on our website.
                </p>
              </div>

              <div className="space-y-8">
                {cookieTypes.map((cookie, index) => {
                  const Icon = cookie.icon;

                  return (
                    <div
                      key={cookie.title}
                      className={
                        index !== cookieTypes.length - 1
                          ? "border-b border-primary/10 pb-8"
                          : ""
                      }
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                          <Icon size={20} strokeWidth={1.6} />
                        </div>

                        <h3 className="font-serif text-xl font-semibold text-[#2A171B]">
                          {cookie.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                            cookie.badge === "Required"
                              ? "bg-primary/10 text-primary"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {cookie.badge}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-gray-600">
                        {cookie.description}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {cookie.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-primary"
                            />

                            <span className="text-xs leading-6 text-gray-600">
                              {example}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ADDITIONAL POLICY INFORMATION */}
            <article className="rounded-lg border border-primary/10 bg-white p-6 sm:p-10">
              {policySections.slice(1).map((section, index) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.title}
                    className={`py-8 ${
                      index === 0 ? "pt-0" : ""
                    } ${
                      index !== policySections.length - 2
                        ? "border-b border-primary/10"
                        : "pb-0"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon
                        size={21}
                        className="shrink-0 text-primary"
                      />

                      <h2 className="font-serif text-xl font-semibold text-[#2A171B] sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-sm leading-8 text-gray-600">
                      {section.content}
                    </p>
                  </section>
                );
              })}

              {/* CONTACT */}
              <section className="mt-8 border-t border-primary/10 pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <Mail size={21} className="text-primary" />

                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Contact Us
                  </h2>
                </div>

                <p className="text-sm leading-8 text-gray-600">
                  If you have questions about how cookies are used on
                  Bagaholic, please contact our support team.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-semibold text-white transition hover:bg-primary/90"
                >
                  Contact Support
                  <ArrowRight size={15} />
                </Link>
              </section>
            </article>

            {/* BOTTOM NOTE */}
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-[#F8F0EF] p-5">
              <Info
                size={19}
                className="mt-0.5 shrink-0 text-primary"
              />

              <p className="text-xs leading-6 text-gray-600">
                You can control cookies through your browser settings.
                Disabling certain cookies may affect website features
                such as shopping carts, checkout, and account access.
              </p>
            </div>

            {/* PRIVACY POLICY LINK */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Want to know more about how we handle your information?
              </p>

              <Link
                href="/privacy-policy"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read Our Privacy Policy
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
