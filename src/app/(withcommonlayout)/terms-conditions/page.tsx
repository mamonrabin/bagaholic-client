
import Link from "next/link";
import {
  FileText,
  ShoppingBag,
  CreditCard,
  Truck,
  RefreshCcw,
  PackageCheck,
  ShieldCheck,
  AlertCircle,
  Scale,
  Mail,
  ArrowRight,
  Check,
} from "lucide-react";

const termsSections = [
  {
    id: "general",
    title: "General Information",
    icon: FileText,
    content:
      "Welcome to Bagaholic. By accessing our website, browsing products, or placing an order, you agree to these Terms & Conditions. Please read them carefully before using our services.",
  },
  {
    id: "products",
    title: "Products and Availability",
    icon: ShoppingBag,
    content:
      "We aim to display accurate product descriptions, images, colors, and prices. However, slight variations may occur due to photography, lighting, and screen settings. All products are subject to availability, and we reserve the right to update or discontinue products without prior notice.",
  },
  {
    id: "orders",
    title: "Orders and Confirmation",
    icon: PackageCheck,
    content:
      "After placing an order, you may receive a confirmation by email, phone, or message. An order submission does not guarantee acceptance. We may contact you to verify order details or cancel orders that cannot be fulfilled due to stock availability, incorrect information, or suspected fraudulent activity.",
  },
  {
    id: "pricing",
    title: "Pricing and Payments",
    icon: CreditCard,
    content:
      "All product prices are displayed in Bangladeshi Taka (BDT). Delivery charges and any applicable fees will be shown during checkout. Cash on Delivery is available for eligible orders. If online payment options are introduced, transactions will be processed through the relevant payment providers.",
  },
  {
    id: "shipping",
    title: "Shipping and Delivery",
    icon: Truck,
    content:
      "We offer delivery services within Bangladesh. Delivery charges and estimated delivery times may vary depending on your location, courier availability, and other circumstances. Delivery estimates are not guaranteed, and unexpected delays may occur.",
  },
  {
    id: "returns",
    title: "Returns and Exchanges",
    icon: RefreshCcw,
    content:
      "Returns and exchanges are subject to our Returns and Exchanges Policy. Customers should inspect their products upon delivery and contact our support team within the applicable return period if they receive an incorrect, damaged, or defective item.",
  },
  {
    id: "cancellations",
    title: "Order Cancellation",
    icon: AlertCircle,
    content:
      "If you need to cancel or modify an order, please contact us as soon as possible. We will try to accommodate your request, but changes or cancellations may not be possible once an order has been processed or handed over to the delivery partner.",
  },
  {
    id: "privacy",
    title: "Privacy and Security",
    icon: ShieldCheck,
    content:
      "We respect your privacy and handle personal information according to our Privacy Policy. Customers are responsible for providing accurate information and keeping their account credentials secure.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: Scale,
    content:
      "To the extent permitted by applicable law, Bagaholic is not responsible for indirect or consequential losses arising from the use of our website or services. Nothing in these terms excludes rights or protections that cannot legally be excluded.",
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: FileText,
    content:
      "We may update these Terms & Conditions from time to time to reflect changes in our business operations, services, or legal requirements. Updated terms will be published on this page.",
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FCF8F7]">
      {/* PAGE HEADER */}
      <section className="border-b border-primary/10 bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Shopping with confidence
            </p>

            <h1 className="font-serif text-4xl font-medium text-[#780019] sm:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
              Please review our terms to understand your rights and
              responsibilities when shopping with Bagaholic.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-primary" />
              Clear policies for a better shopping experience
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
                  <FileText size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#2A171B]">
                    Welcome to Bagaholic
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    These Terms & Conditions explain the rules and
                    guidelines for using our website, purchasing our
                    products, and accessing our services. By using
                    Bagaholic, you agree to follow these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* TERMS CONTENT */}
            <article className="rounded-lg border border-primary/10 bg-white p-6 sm:p-10">
              {termsSections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`py-8 ${
                      index === 0 ? "pt-0" : ""
                    } ${
                      index !== termsSections.length - 1
                        ? "border-b border-primary/10"
                        : "pb-0"
                    }`}
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <h2 className="font-serif text-xl font-semibold text-[#2A171B] sm:text-2xl">
                        {String(index + 1).padStart(2, "0")}.{" "}
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-sm leading-8 text-gray-600">
                      {section.content}
                    </p>

                    {section.id === "returns" && (
                      <Link
                        href="/returns-exchanges"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                      >
                        View Returns & Exchanges Policy
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {section.id === "privacy" && (
                      <Link
                        href="/privacy-policy"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                      >
                        Read Privacy Policy
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </section>
                );
              })}

              {/* CONTACT SECTION */}
              <section
                id="contact"
                className="mt-8 border-t border-primary/10 pt-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <Mail size={19} />
                  </div>

                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Contact Information
                  </h2>
                </div>

                <p className="text-sm leading-8 text-gray-600">
                  If you have any questions regarding these Terms &
                  Conditions, please contact the Bagaholic support team.
                  We are happy to assist you.
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
              <Check
                size={19}
                className="mt-0.5 shrink-0 text-primary"
              />

              <p className="text-xs leading-6 text-gray-600">
                By placing an order on Bagaholic, you acknowledge that
                you have read and understood our Terms & Conditions,
                Privacy Policy, and applicable store policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
