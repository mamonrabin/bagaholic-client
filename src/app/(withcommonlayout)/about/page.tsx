
import Link from "next/link";

const values = [
  {
    icon: "✧",
    title: "Premium Quality",
    description: "Carefully selected materials and thoughtful details.",
  },
  {
    icon: "♡",
    title: "Timeless Design",
    description: "Beautiful styles made to complement every occasion.",
  },
  {
    icon: "♧",
    title: "Customer First",
    description: "Friendly service and support you can count on.",
  },
  {
    icon: "❋",
    title: "Affordable Luxury",
    description: "Elegant handbags at prices you'll love.",
  },
];

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "5+", label: "Years of Experience" },
  { number: "100%", label: "Carefully Selected" },
  { number: "24/7", label: "Online Shopping" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fffaf7] text-[#29201f]">
      {/* Hero */}
      <section className="border-b border-[#eee1dc]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#8c1530]">
              OUR STORY
            </p>

            <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
              More than just bags,
              <span className="block italic text-[#8c1530]">
                it&apos;s a lifestyle.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#827575]">
              At Bagaholic, we believe a handbag is more than an accessory.
              It reflects your personality, your journey, and your style.
              Discover timeless designs created for everyday elegance.
            </p>

            <div className="mt-7 flex gap-3 text-sm text-[#827575]">
              <Link href="/" className="hover:text-[#8c1530]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#8c1530]">About Us</span>
            </div>
          </div>

          <div
            role="img"
            aria-label="Elegant burgundy handbag"
            className="min-h-[300px] bg-cover bg-center sm:min-h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85')",
            }}
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div
          role="img"
          aria-label="A fashionable handbag collection"
          className="min-h-[300px] bg-cover bg-center sm:min-h-[420px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85')",
          }}
        />

        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#8c1530]">
            THE BAGAHOLIC STORY
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
            Born from a love
            <span className="block italic text-[#8c1530]">
              for timeless elegance.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#827575]">
            Bagaholic was created for women who appreciate style, quality,
            and everyday comfort. We believe the right handbag can make
            ordinary moments feel special.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#827575]">
            From versatile everyday bags to elegant statement pieces, our
            collection is chosen to help you express your individual style
            with confidence.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-flex items-center gap-3 bg-[#79051f] px-6 py-3.5 text-xs tracking-widest text-white transition hover:bg-[#570218]"
          >
            EXPLORE OUR COLLECTION <span>→</span>
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f9efec] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-[#8c1530]">
              WHAT WE BELIEVE
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              What makes us different
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`px-5 text-center ${
                  index !== values.length - 1
                    ? "lg:border-r lg:border-[#e7d2cc]"
                    : ""
                }`}
              >
                <span className="text-4xl text-[#8c1530]">
                  {value.icon}
                </span>
                <h3 className="mt-4 text-xs font-semibold tracking-[0.15em]">
                  {value.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#827575]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#8c1530]">
            OUR PASSION
          </p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            A team behind
            
              every detail.
            
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#827575]">
            We are passionate about bringing together beautiful designs,
            practical functionality, and a thoughtful shopping experience.
            Every detail matters because you deserve the best.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-3 border border-[#79051f] px-6 py-3.5 text-xs tracking-widest text-[#79051f] transition hover:bg-[#79051f] hover:text-white"
          >
            GET IN TOUCH <span>→</span>
          </Link>
        </div>

        <div
          role="img"
          aria-label="Handbags arranged in a boutique"
          className="min-h-[280px] bg-cover bg-center sm:min-h-[380px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85')",
          }}
        />
      </section>

      {/* Statistics */}
      <section className="border-y border-[#eadbd5] bg-white/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-8 sm:px-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-4 text-center ${
                index % 2 === 0 ? "border-r border-[#eadbd5]" : ""
              } ${
                index < 2 ? "border-b border-[#eadbd5] lg:border-b-0" : ""
              } ${
                index === 1 ? "lg:border-r" : ""
              } ${
                index === 3 ? "lg:border-r-0" : ""
              }`}
            >
              <p className="font-serif text-3xl text-[#8c1530] sm:text-4xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs text-[#827575]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#79051f] px-5 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/70">
              YOUR STYLE, YOUR STORY
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Find a bag that feels like you.
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Explore the Bagaholic collection and discover your next favorite.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex shrink-0 items-center gap-3 bg-white px-6 py-4 text-xs tracking-widest text-[#79051f] transition hover:bg-[#f9efec]"
          >
            SHOP HANDBAGS <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
