"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  Package,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const contactItems = [
  {
    icon: Headphones,
    title: "CUSTOMER CARE",
    value: "+880 1700 123 456",
    detail: "Mon – Sat, 9 AM – 6 PM",
    href: "tel:+8801700123456",
  },
  {
    icon: Mail,
    title: "EMAIL US",
    value: "support@bagaholic.com",
    detail: "We reply within 24 hours",
    href: "mailto:support@bagaholic.com",
  },
  {
    icon: Package,
    title: "ORDER SUPPORT",
    value: "Track your order",
    detail: "We're here to help",
    href: "/track-order",
  },
  {
    icon: Clock3,
    title: "BUSINESS HOURS",
    value: "9:00 AM – 6:00 PM",
    detail: "Monday – Saturday",
    href: null,
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Delivery times depend on your location. Our support team can help you check your estimated delivery date.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Please review our returns and exchanges policy or contact our team for help with your purchase.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Use the Track Order page with your order details to check the latest delivery status.",
  },
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect your contact API here before deploying.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="site-container md:py-20 py-10">
      <div>
        <p className="mb-5 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" />
          WE&apos;RE HERE TO HELP
        </p>

        {/* Heading */}
        <h1 className="font-heading md:text-[60px] text-[35px] font-bold leading-[0.95] tracking-tight text-foreground">
          Let&apos;s talk, beautifully.
        </h1>

        {/* Description */}
        <p className="md:mt-9 mt-6 max-w-xl font-sans text-sm leading-7 md:text-muted-foreground text-neutral-600 sm:text-base">
          Have a question about your order, our products, or need styling
          advice? We&apos;re here to help — because you matter to us.
        </p>
      </div>

      {/* Contact information */}
      <section className="py-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-sm border border-[#eadbd5] bg-white/70 px-4 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#b77b86] hover:shadow-lg hover:shadow-[#79051f]/5"
              >
                <Icon
                  className="mx-auto mb-4 text-[#8c1530] transition-transform group-hover:scale-110"
                  size={29}
                  strokeWidth={1.4}
                />
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
                  {item.title}
                </p>

                {item.href ? (
                  <a
                    href='#'
                    className="mt-3 block break-words text-sm font-medium transition hover:text-[#8c1530]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-medium">{item.value}</p>
                )}

                <p className="mt-2 text-xs leading-5 text-[#968988]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact form and support */}
      <section className=" grid  gap-12  pb-16 md:pt-16 pt-10  lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            <span className="h-px w-8 bg-[#8c1530]" />
            GET IN TOUCH
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Send us a message
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#827575]">
            We&apos;d love to hear from you. Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>

          {submitted && (
            <div
              role="status"
              className="mt-6 flex gap-3 border border-[#c6dfcc] bg-[#f1faf2] p-4 text-sm text-[#28633c]"
            >
              <CheckCircle2 className="shrink-0" size={20} />
              <p>
                Your form passed the browser checks. Connect your contact API to
                deliver the message to your support team.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-[#554746]"
              >
                FULL NAME <span className="text-[#8c1530]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                maxLength={100}
                className="w-full rounded-sm border border-[#e8d7d1] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa09d] focus:border-[#8c1530] focus:ring-2 focus:ring-[#8c1530]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-[#554746]"
              >
                EMAIL ADDRESS <span className="text-[#8c1530]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
                className="w-full rounded-sm border border-[#e8d7d1] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa09d] focus:border-[#8c1530] focus:ring-2 focus:ring-[#8c1530]/10"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-[#554746]"
                >
                  SUBJECT <span className="text-[#8c1530]">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-sm border border-[#e8d7d1] bg-white px-3 py-3 text-sm outline-none transition focus:border-[#8c1530] focus:ring-2 focus:ring-[#8c1530]/10"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="order">Order inquiry</option>
                  <option value="shipping">Shipping & delivery</option>
                  <option value="return">Returns & exchanges</option>
                  <option value="product">Product information</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="orderNumber"
                  className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-[#554746]"
                >
                  ORDER NUMBER
                </label>
                <input
                  id="orderNumber"
                  name="orderNumber"
                  type="text"
                  placeholder="e.g. #BA12345"
                  maxLength={50}
                  className="w-full rounded-sm border border-[#e8d7d1] bg-white px-3 py-3 text-sm outline-none transition placeholder:text-[#aaa09d] focus:border-[#8c1530] focus:ring-2 focus:ring-[#8c1530]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-[#554746]"
              >
                MESSAGE <span className="text-[#8c1530]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={3000}
                placeholder="Tell us how we can help..."
                className="w-full resize-y rounded-sm border border-[#e8d7d1] bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-[#aaa09d] focus:border-[#8c1530] focus:ring-2 focus:ring-[#8c1530]/10"
              />
              <p className="mt-2 text-right text-xs text-[#968988]">
                Please include any details that will help us assist you.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#79051f] px-6 py-4 text-xs font-semibold tracking-[0.16em] text-white transition hover:bg-[#570218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79051f] focus-visible:ring-offset-2 sm:w-auto sm:min-w-48"
            >
              SEND MESSAGE
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        {/* Support panel */}
        <aside className="lg:pt-2">
          <div
            role="img"
            aria-label="Luxury handbag editorial photograph"
            className="min-h-[300px] bg-cover bg-center sm:min-h-[440px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85')",
            }}
          />

          <div className="px-1 pb-3 pt-7 sm:px-4">
            <p className="mb-3 h-px w-14 bg-[#8c1530]" />
            <h3 className="font-serif text-3xl leading-tight text-[#79051f] sm:text-4xl">
              A personal touch,
              <span className="block italic">always.</span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#827575]">
              Our dedicated team is here to provide thoughtful and friendly
              support for all your needs — from product inquiries to order
              updates and styling tips.
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:support@bagaholic.com"
                className="flex items-center gap-4 text-sm transition hover:text-[#8c1530]"
              >
                <Mail className="shrink-0 text-[#8c1530]" size={22} />
                <span>
                  <span className="block font-semibold">Email us</span>
                  <span className="mt-1 block text-[#827575]">
                    support@bagaholic.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 text-sm">
                <Clock3 className="shrink-0 text-[#8c1530]" size={22} />
                <span>
                  <span className="block font-semibold">Service hours</span>
                  <span className="mt-1 block text-[#827575]">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <MapPin className="shrink-0 text-[#8c1530]" size={22} />
                <span>
                  <span className="block font-semibold">
                    Serving you online
                  </span>
                  <span className="mt-1 block text-[#827575]">
                    Shopping made easy, wherever you are.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#f0e2dc] bg-[#f9efec]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="text-center">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
              QUICK ANSWERS
            </p>
            <h2 className="font-serif text-4xl italic text-[#79051f] sm:text-5xl">
              Common questions
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#827575]">
              Find answers to our most frequently asked questions.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[#e6d3cd] border-y border-[#e6d3cd]">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={faqOpen === index}
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-[#8c1530]"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-serif text-xl text-[#8c1530]">Q</span>
                    <span className="text-sm font-medium">{faq.question}</span>
                  </span>
                  <span className="text-lg text-[#8c1530]">
                    {faqOpen === index ? "−" : "+"}
                  </span>
                </button>

                {faqOpen === index && (
                  <p className="pb-5 pl-10 pr-8 text-sm leading-7 text-[#827575]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8c1530] hover:underline"
            >
              VIEW ALL FAQs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
