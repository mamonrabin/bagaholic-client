
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqGroups = [
  {
    title: "Orders and payment",
    questions: [
      {
        question: "Do you offer Cash on Delivery?",
        answer:
          "Yes. Cash on Delivery is available for eligible orders delivered within Bangladesh. Any exceptions should be shown at checkout.",
      },
      {
        question: "How do I know my order was received?",
        answer:
          "An order confirmation is sent to the email address provided at checkout. Bagaholic may also confirm your order by phone or message.",
      },
      {
        question: "Can I change or cancel an order?",
        answer:
          "Contact us as quickly as possible. Changes are not guaranteed after an order has been confirmed or handed to the courier.",
      },
      {
        question: "Can I order without creating an account?",
        answer:
          "If guest checkout is enabled, you can order without an account. An account makes it easier to review previous orders and saved addresses.",
      },
    ],
  },
  {
    title: "Products and delivery",
    questions: [
      {
        question: "Are product colours exact?",
        answer:
          "We aim to represent colours accurately. Lighting, photography and screen settings can produce slight differences.",
      },
      {
        question: "What materials are used?",
        answer:
          "Materials vary by design. Review the material and care details on each product page before ordering.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "See our Delivery page for current estimates inside and outside Dhaka.",
      },
      {
        question: "How do I request a return or exchange?",
        answer:
          "Read the eligibility requirements on our Returns and Exchanges page, then contact support before sending a parcel.",
      },
    ],
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="site-container">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Need some help?
          </p>

          <h2 className="font-serif text-3xl font-medium text-[#780019] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Find answers to common questions about shopping, payment,
            delivery, and our products.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[70px]">
          {faqGroups.map((group, groupIndex) => (
            <div key={group.title}>
              {/* Category Heading */}
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-7 bg-primary" />
                {group.title}
              </p>

              {/* Questions */}
              <div className="divide-y divide-primary/10 border-y border-primary/10">
                {group.questions.map((faq, index) => {
                  const id = `${groupIndex}-${index}`;
                  const isOpen = openFaq === id;

                  return (
                    <div key={id}>
                      <button
                        type="button"
                        onClick={() => toggleFaq(id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${id}`}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                      >
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isOpen
                              ? "text-primary"
                              : "text-[#2A171B] hover:text-primary"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                          {isOpen ? (
                            <Minus size={16} />
                          ) : (
                            <Plus size={16} />
                          )}
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${id}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 pr-8 text-sm leading-7 text-gray-500">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
