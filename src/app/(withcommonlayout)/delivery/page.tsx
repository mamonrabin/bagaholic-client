
import Link from "next/link";

const deliveryOptions = [
  {
    number: "01",
    title: "Inside Dhaka",
    time: "1 to 3 working days",
    charge: "[৳ amount]",
    description: "Convenient delivery within Dhaka.",
  },
  {
    number: "02",
    title: "Outside Dhaka",
    time: "2 to 5 working days",
    charge: "[৳ amount]",
    description: "Delivery to locations across Bangladesh.",
  },
  {
    number: "03",
    title: "Cash on Delivery",
    time: "Pay on arrival",
    charge: "Available",
    description:
      "Pay the courier when your order arrives, where COD is available.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Place your order",
    description:
      "Enter your complete delivery address and an active Bangladesh phone number at checkout.",
  },
  {
    number: "02",
    title: "Order confirmation",
    description:
      "Our team may call or message you to confirm your order before dispatch.",
  },
  {
    number: "03",
    title: "Courier handover",
    description:
      "Your parcel is handed to the courier. Tracking information is provided when available.",
  },
  {
    number: "04",
    title: "Receive and pay",
    description:
      "Check the outer parcel for visible damage and complete your payment to the courier.",
  },
];

export default function DeliveryPage() {
  return (
    <main className="site-container">
     
      {/* Page heading */}
      <section className="">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            <span className="h-px w-8 bg-[#8c1530]" />
            DELIVERY INFORMATION
          </p>

          <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            From Bagaholic
            <span className="block italic text-[#8c1530]">
              to your door.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#827575] sm:text-base">
            We deliver across Bangladesh with Cash on Delivery available on
            eligible orders. Here&apos;s everything you need to know about
            receiving your favorite handbags.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-[#827575]">
            <Link href="/" className="hover:text-[#79051f]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#79051f]">Delivery</span>
          </div>
        </div>
      </section>

      {/* Delivery options */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
              DELIVERY OPTIONS
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Shipping made simple.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#827575]">
              Choose your location and learn about our delivery service.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveryOptions.map((option) => (
              <article
                key={option.number}
                className="border border-[#eadbd5] bg-white p-6 transition hover:border-[#c79ba3] hover:shadow-md sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#f9efec] font-serif text-lg text-[#8c1530]">
                  {option.number}
                </div>

                <h3 className="mt-5 font-serif text-2xl">{option.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#827575]">
                  {option.description}
                </p>

                <div className="mt-6 border-t border-[#eee2dd] pt-4">
                  <p className="text-xs text-[#938380]">Estimated delivery</p>
                  <p className="mt-1 text-sm font-medium">{option.time}</p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#938380]">
                    {option.number === "03" ? "Payment option" : "Delivery charge"}
                  </span>
                  <span className="text-sm font-semibold text-[#79051f]">
                    {option.charge}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-[#8c1530] bg-[#f9efec] p-4 sm:p-5">
            <p className="text-sm leading-6 text-[#6f5b58]">
              <strong className="text-[#79051f]">Please note:</strong> Delivery
              times and charges are estimates. Confirm the final rates with
              your courier partner before publishing this page.
            </p>
          </div>
        </div>
      </section>

      {/* How delivery works */}
      <section className="bg-[#f9efec] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
              HOW DELIVERY WORKS
            </p>

            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              Simple from checkout
             
                to arrival.
              
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#827575]">
              We want your shopping experience to be straightforward. Follow
              these four simple steps to receive your Bagaholic order.
            </p>

            <Link
              href="/shop/"
              className="mt-7 inline-flex items-center gap-3 bg-[#79051f] px-6 py-3.5 text-xs tracking-widest text-white transition hover:bg-[#570218]"
            >
              START SHOPPING <span>→</span>
            </Link>
          </div>

          <div className="space-y-0">
            {deliverySteps.map((step, index) => (
              <article
                key={step.number}
                className={`flex gap-5 py-6 ${
                  index !== deliverySteps.length - 1
                    ? "border-b border-[#e5d2cc]"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9b6b5] font-serif text-sm text-[#8c1530]">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-serif text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#827575]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery policies */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8c1530]">
            GOOD TO KNOW
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Delivery conditions
          </h2>

          <div className="mt-8 space-y-7">
            <article>
              <h3 className="font-serif text-xl">Estimated delivery times</h3>
              <p className="mt-2 text-sm leading-7 text-[#827575]">
                Delivery times may change during public holidays, severe
                weather, political disruption, courier congestion, or when an
                address is outside standard service coverage.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-xl">
                Provide accurate delivery details
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#827575]">
                Customers are responsible for providing a complete address,
                correct phone number, and reachable recipient. Additional
                delivery charges may apply if a parcel needs to be resent
                after an unsuccessful delivery caused by incorrect or
                unavailable recipient details.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-xl">Parcel concerns</h3>
              <p className="mt-2 text-sm leading-7 text-[#827575]">
                If the outer parcel appears severely damaged, contact Bagaholic
                before accepting it where courier procedures allow. If you
                discover a product concern after opening your parcel, preserve
                the packaging and contact us promptly with clear photos or
                video.
              </p>
            </article>
          </div>

          <div className="mt-9 border border-[#eadbd5] bg-[#fffdfb] p-5 sm:p-6">
            <h3 className="font-serif text-xl">Need help with your delivery?</h3>
            <p className="mt-2 text-sm leading-6 text-[#827575]">
              Our team is happy to help with delivery questions, order updates,
              and parcel concerns.
            </p>
            <Link
              href="/contact/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#79051f] hover:underline"
            >
              Contact customer support <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    
    </main>
  );
}


