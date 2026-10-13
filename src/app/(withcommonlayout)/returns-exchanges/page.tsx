
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Contact our team",
    description:
      "Contact us with your order number and explain why you would like to return or exchange your item.",
  },
  {
    number: "02",
    title: "Get approval",
    description:
      "Our support team will review your request and explain the next steps if your item is eligible.",
  },
  {
    number: "03",
    title: "Prepare your parcel",
    description:
      "Pack the item securely with its original packaging, tags, and included accessories.",
  },
  {
    number: "04",
    title: "Receive an update",
    description:
      "Once we receive and inspect the item, we will contact you about the outcome of your request.",
  },
];

const conditions = [
  {
    title: "Item condition",
    description:
      "Items should be unused, undamaged, and returned with their original tags, packaging, and accessories.",
  },
  {
    title: "Proof of purchase",
    description:
      "Please provide your order number or another valid proof of purchase when contacting us.",
  },
  {
    title: "Damaged or incorrect items",
    description:
      "If your order arrives damaged or you receive the wrong product, contact us promptly with photos of the item and parcel.",
  },
  {
    title: "Refund processing",
    description:
      "Approved refunds are processed using the agreed refund method. The processing time depends on the payment provider or bank.",
  },
];

const faqs = [
  {
    question: "Can I exchange my handbag?",
    answer:
      "Exchange requests can be reviewed if the item meets our return conditions and the replacement is available.",
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "Contact our customer support team with your order number and clear photos of the damaged product and packaging.",
  },
  {
    question: "How long does a refund take?",
    answer:
      "After a return is approved, the time needed to receive your refund depends on the payment method and payment provider.",
  },
  {
    question: "Can I return a used handbag?",
    answer:
      "Items that have been used, damaged after delivery, or returned without required accessories may not qualify. Contact our team if you need help.",
  },
];

export default function ReturnsExchangesPage() {
  return (
    <main className=" md:py-20 py-12">
    


      {/* Hero */}
      <section className="site-container">
        <div className="">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            <span className="h-px w-8 bg-[#8c1530]" />
            RETURNS & EXCHANGES
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Your satisfaction,
            <span className="block italic text-[#8c1530]">
              our priority.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#827575] sm:text-base">
            Need help with your order? We want you to feel confident shopping
            with Bagaholic. Find out how to request a return, exchange, or
            assistance with a product concern.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#827575]">
            <Link href="/" className="hover:text-[#79051f]">Home</Link>
            <span>/</span>
            <span className="text-[#79051f]">Returns & Exchanges</span>
          </div>
        </div>
      </section>

      {/* Quick information */}
      <section className="border-b border-[#eadbd5] bg-white md:mt-20">
        <div className="grid  grid-cols-1 sm:grid-cols-3">
          {[
            {
              title: "Easy to request",
              text: "Contact our support team to get started.",
            },
            {
              title: "Careful inspection",
              text: "Returned items are checked before approval.",
            },
            {
              title: "Customer support",
              text: "We will guide you through the process.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={` py-6 text-center  ${
                index < 2 ? "border-b border-[#eadbd5] sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <span className="text-2xl text-[#8c1530]">✧</span>
              <h2 className="mt-2 font-serif text-lg">{item.title}</h2>
              <p className="mt-2 text-xs leading-5 text-[#827575]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Return process */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mb-9">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Four simple steps.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#827575]">
            Start with our customer care team, and we will guide you through
            your return or exchange request.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border border-[#eadbd5] bg-white p-6 transition hover:border-[#c79ba3] hover:shadow-sm"
            >
              <span className="font-serif text-4xl text-[#c9a5a5]">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#827575]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Policy details */}
      <section className="bg-[#f9efec] site-container py-14  sm:py-16">
        <div className="">
          <div className="mb-9">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
              BEFORE YOU REQUEST
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Return policy essentials.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {conditions.map((condition, index) => (
              <article
                key={condition.title}
                className="flex gap-4 border border-[#eadbd5] bg-[#fffaf7] p-5 sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f3e4e0] font-serif text-sm text-[#8c1530]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl">{condition.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#827575]">
                    {condition.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#827575]">
            Please confirm your store&apos;s return eligibility, request
            deadlines, delivery charges, and refund rules before publishing
            this policy.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mb-8 text-center">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            NEED MORE INFORMATION?
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-[#eadbd5] border-y border-[#eadbd5]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-sm sm:text-base">
                {faq.question}
                <span className="shrink-0 font-serif text-xl text-[#8c1530] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-[#827575]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

