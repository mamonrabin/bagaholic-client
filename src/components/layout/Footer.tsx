"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo/logo.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const shopLinks = [
  { label: "New Arrivals", href: "/new-arrivals/" },
  { label: "Best Sellers", href: "/best-sellers/" },
  { label: "Top Handle Bags", href: "/product-category/top-handle-bags/" },
  { label: "Shoulder Bags", href: "/product-category/shoulder-bags/" },
  { label: "Sale", href: "/sale/" },
];

const customerCareLinks = [
  { label: "Delivery Information", href: "/delivery/" },
  { label: "Returns and Exchanges", href: "/returns-exchanges/" },
  { label: "Track Order", href: "/track-order/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about/" },
  { label: "Quality Promise", href: "/quality-promise/" },
  { label: "Material Guide", href: "/material-guide/" },
  { label: "Bag Care", href: "/bag-care-guide/" },
  { label: "Reviews", href: "/reviews/" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms-conditions/" },
  { label: "Cookies", href: "/cookie-policy/" },
];

type FooterLink = {
  label: string;
  href: string;
};

function FooterMenu({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <nav aria-label={`${title} links`}>
      <h3 className="mb-5 text-sm font-bold  uppercase tracking-[0.12em] text-primary">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-600 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FBF1F2] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr_1fr] lg:gap-10 lg:py-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Bagaholic home"
              className="inline-flex"
            >
              <Image
                src={logo}
                alt="Bagaholic, Carry Your Essence"
                width={605}
                height={173}
                className="h-auto w-44 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-600">
              Premium handbags with timeless design, thoughtful details and
              quality you can feel in hand.
            </p>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Delivery across Bangladesh · Cash on Delivery
            </p>

            {/* Social links */}
            <div
              className="mt-5 flex items-center gap-3"
              aria-label="Bagaholic social media"
            >
              <a
                href="https://www.facebook.com/thebagaholicshop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bagaholic on Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.instagram.com/bagaholicbd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bagaholic on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
               <FaInstagram size={16} />

              </a>
            </div>
          </div>

          {/* Navigation */}
          <FooterMenu title="Shop" links={shopLinks} />

          <FooterMenu
            title="Customer Care"
            links={customerCareLinks}
          />

          <FooterMenu title="About" links={aboutLinks} />
        </div>

        {/* Copyright and credits */}
        <div className="flex flex-col gap-4 border-t border-neutral-200 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <span>© 2026 Bagaholic. All rights reserved.</span>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center gap-4"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <p className="whitespace-nowrap text-xs text-neutral-500">
            Designed and developed by{" "}
            <a
              href="https://www.faarmout.com/?utm_source=bagaholic&utm_medium=referral&utm_campaign=footer_credit&utm_content=designed_and_developed_by"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-800 transition-colors hover:text-neutral-950"
            >
              faarmout
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}