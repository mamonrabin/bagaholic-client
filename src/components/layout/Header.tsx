/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/assets/logo/logo.png";
import CartSidebar from "../pages/cart/CartSidebar";

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
  { name: "Sale", href: "/shop" },
  { name: "Track Order", href: "/track-order" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Handle header scroll styling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close the menu when navigating to another page.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`site-container sticky top-0 z-[1000] border-b border-primary/10 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "py-0" : "py-4"
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
                  className={`group relative font-sans text-xs uppercase tracking-wide transition-all duration-300 ${
                    isScrolled ? "font-medium" : "font-bold"
                  } ${
                    active
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 h-[2px] bg-primary transition-all duration-300 ${
                      isScrolled ? "-bottom-1" : "-bottom-3"
                    } ${
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
          <div className="flex items-center text-primary md:gap-2">
            {/* Account */}
            <Link
              href="/login"
              aria-label="My account"
              className="flex h-10 w-10 items-center justify-center transition-colors hover:text-primary"
            >
              <User size={isScrolled ? 19 : 21} strokeWidth={1.6} />
            </Link>

            {/* Cart */}
            <CartSidebar isScrolled={isScrolled} />

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="flex h-10 w-10 items-center justify-center transition-colors hover:text-primary lg:hidden"
            >
              {mobileMenuOpen ? (
                <X size={isScrolled ? 21 : 23} strokeWidth={1.7} />
              ) : (
                <Menu size={isScrolled ? 21 : 23} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - viewport height below the header */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-x-0 bottom-0 z-[999] overflow-x-hidden overflow-y-auto overscroll-contain border-t border-neutral-100 bg-white transition-all duration-300 lg:hidden ${
          isScrolled ? "top-[40px]" : "top-[100px]"
        } ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex min-h-full max-w-7xl flex-col px-5 py-3"
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
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`border-b border-neutral-100 py-4 font-sans text-sm font-medium uppercase tracking-wide transition-colors last:border-0 ${
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
    </>
  );
}
