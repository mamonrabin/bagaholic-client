"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/assets/logo/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Shop", href: "/shop" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const mobileItems = [
  ...navItems,
  { name: "Sale", href: "/sale" },
  { name: "Track Order", href: "/track-order" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header
      className={`site-container sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-0 border-primary/10" : "py-4 border-primary/10"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Bagaholic home"
          className={`block transition-all duration-300 ${
            isScrolled ? "w-28 md:w-32" : "w-40 md:w-44"
          }`}
        >
          <Image
            src={logo}
            alt="Bagaholic, Carry Your Essence"
            width={300}
            height={300}
            priority
            className="w-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative font-sans text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}

                <span
                  className={`absolute ${
                    isScrolled ? "-bottom-1" : "-bottom-3"
                  }  left-0 h-[2px] bg-primary transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-full opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center md:gap-4">
          {/* Account */}
          <Link
            href="/my-account"
            aria-label="My account"
            className="flex h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-primary"
          >
            <User size={isScrolled ? 19 : 21} strokeWidth={1.6} />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="View shopping cart"
            className="relative flex h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-primary"
          >
            <ShoppingBag size={isScrolled ? 19 : 21} strokeWidth={1.6} />

            <span
              className={`absolute flex items-center justify-center rounded-full bg-primary px-1 font-semibold leading-none text-white transition-all duration-300 ${
                isScrolled
                  ? "right-1 top-1 h-3.5 min-w-3.5 text-[9px]"
                  : "right-0.5 top-0.5 h-4 min-w-4 text-[10px]"
              }`}
              aria-live="polite"
              aria-label="0 items in cart"
            >
              0
            </span>
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="flex h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-primary lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={isScrolled ? 21 : 23} strokeWidth={1.7} />
            ) : (
              <Menu size={isScrolled ? 21 : 23} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-5 py-3"
          aria-label="Mobile navigation"
        >
          {mobileItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`border-b border-neutral-100 py-3.5 font-sans text-sm font-medium uppercase tracking-wide transition-colors last:border-0 ${
                  active
                    ? "text-primary"
                    : "text-neutral-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
