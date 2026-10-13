
"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";

const MessengerBtn = () => {
  const [showOptions, setShowOptions] = useState(false);

  // Replace with your actual contact details
  const whatsappNumber = "8801XXXXXXXXX";
  const facebookPage = "https://m.me/YOUR_PAGE_USERNAME";

  return (
    <div className="fixed bottom-20 right-4 z-[999] md:bottom-6 md:right-6">
      {/* Contact Options - Icons Only */}
      <div
        className={`
          absolute bottom-[calc(100%+12px)] right-0
          flex flex-col items-center gap-3
          transition-all duration-300 ease-out
          ${
            showOptions
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }
        `}
        aria-hidden={!showOptions}
      >
        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={showOptions ? 0 : -1}
          aria-label="Chat with Bagaholic on WhatsApp"
          title="WhatsApp"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-[#25D366] text-white
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:-translate-y-1 hover:scale-110
            active:scale-95
          "
        >
          <FaWhatsapp size={23} />
        </Link>

        {/* Messenger */}
        <Link
          href={facebookPage}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={showOptions ? 0 : -1}
          aria-label="Message Bagaholic on Messenger"
          title="Messenger"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-[#0866FF] text-white
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:-translate-y-1 hover:scale-110
            active:scale-95
          "
        >
          <FaFacebookMessenger size={22} />
        </Link>
      </div>

      {/* Main Contact Button */}
      <button
        type="button"
        onClick={() => setShowOptions((prev) => !prev)}
        aria-label={
          showOptions
            ? "Close contact options"
            : "Open contact options"
        }
        aria-expanded={showOptions}
        className="
          group relative
          flex h-12 w-12 items-center justify-center
          cursor-pointer rounded-full
          border border-white/20
          bg-[#780019] text-white
          shadow-lg shadow-[#780019]/25
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:bg-[#600014]
          hover:shadow-xl hover:shadow-[#780019]/30
          active:scale-95
          md:h-[52px] md:w-[52px]
        "
      >
        {/* Pulse Effect */}
        {!showOptions && (
          <span
            className="
              absolute inset-0
              animate-ping rounded-full
              bg-[#780019]/30
            "
          />
        )}

        {/* Toggle Icon */}
        <span className="relative z-10">
          {showOptions ? (
            <X
              size={21}
              strokeWidth={1.8}
              className="transition-transform duration-300"
            />
          ) : (
            <MessageCircle
              size={21}
              strokeWidth={1.8}
              className="
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          )}
        </span>
      </button>
    </div>
  );
};

export default MessengerBtn;
