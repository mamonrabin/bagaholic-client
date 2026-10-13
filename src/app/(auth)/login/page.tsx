
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, LockKeyhole } from "lucide-react";
import logo from "@/assets/logo/logo.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const switchTab = (login: boolean) => {
    setIsLogin(login);
    setShowPassword(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(Object.fromEntries(formData.entries()));

    // Connect your authentication API here
  };

  return (
    <main className="relative min-h-screen bg-[#fcf5f3]">
      {/* Logo */}
      <div className="flex justify-center px-5 pt-8 md:absolute md:top-8 md:left-10 md:z-10 md:p-0">
        <Link href="/">
          <Image
            src={logo}
            alt="Bagaholic Logo"
            width={180}
            height={80}
            priority
            className="h-auto w-[150px] md:w-[180px]"
          />
        </Link>
      </div>

      {/* Form Container */}
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center px-5 py-10 sm:px-10 md:min-h-screen md:px-16">
        <div className="w-full max-w-[430px]">
          {/* Heading */}
          <div className="mb-9 text-center">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#850020]">
              Your Bagaholic Account
            </span>

            <h1 className="font-serif text-4xl text-[#26181c] sm:text-[42px]">
              {isLogin ? "Welcome Back" : "Join Bagaholic"}
            </h1>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              {isLogin
                ? "Sign in to continue your shopping journey."
                : "Create an account for a more personal shopping experience."}
            </p>
          </div>

          {/* Login / Register Tabs */}
          <div className="mb-8 grid grid-cols-2 border-b border-[#e8d7d7]">
            <button
              type="button"
              onClick={() => switchTab(true)}
              className={`border-b-2 pb-4 text-sm font-medium transition ${
                isLogin
                  ? "border-[#850020] text-[#850020]"
                  : "border-transparent text-neutral-400 hover:text-[#850020]"
              }`}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => switchTab(false)}
              className={`border-b-2 pb-4 text-sm font-medium transition ${
                !isLogin
                  ? "border-[#850020] text-[#850020]"
                  : "border-transparent text-neutral-400 hover:text-[#850020]"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form
            key={isLogin ? "login" : "register"}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#3b3032]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-sm border border-[#e6d8d5] bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#850020]"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#3b3032]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-sm border border-[#e6d8d5] bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#850020]"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-[#3b3032]"
                >
                  Password
                </label>

                {isLogin && (
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#850020] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                )}
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  minLength={8}
                  autoComplete={
                    isLogin ? "current-password" : "new-password"
                  }
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-sm border border-[#e6d8d5] bg-white px-4 pr-12 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#850020]"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-400 transition hover:text-[#850020]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-1 accent-[#850020]"
                />

                <span className="text-xs leading-5 text-neutral-500">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-[#850020] hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-[#850020] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-sm bg-[#850020] text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#650018]"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Switch Account */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              {isLogin
                ? "New to Bagaholic?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => switchTab(!isLogin)}
                className="font-semibold text-[#850020] hover:underline"
              >
                {isLogin ? "Create an account" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-[#e8d7d7] pt-7">
            <div className="flex items-center justify-center gap-2 text-neutral-500">
              <LockKeyhole size={14} />
              <span className="text-xs">
                Secure & private shopping experience
              </span>
            </div>

            <p className="mt-4 text-center text-xs text-neutral-400">
              © 2026 Bagaholic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
