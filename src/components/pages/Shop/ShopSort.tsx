"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
  { label: "Default sorting", value: "default" },
  { label: "Sort by popularity", value: "popularity" },
  { label: "Sort by average rating", value: "rating" },
  { label: "Sort by latest", value: "latest" },
  { label: "Sort by price: low to high", value: "price-asc" },
  { label: "Sort by price: high to low", value: "price-desc" },
];

export default function ShopSort() {
  const [sort, setSort] = useState("price-desc");
  const [open, setOpen] = useState(false);

  const selectedOption = sortOptions.find(
    (option) => option.value === sort
  );

  return (
    <div className="relative w-fit min-w-[240px]">
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Shop order: ${selectedOption?.label}`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className="flex w-full items-center justify-between gap-5 rounded-md border border-neutral-200 bg-white px-4 py-3 text-left text-sm text-neutral-700 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      >
        <span>{selectedOption?.label}</span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-neutral-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close sorting menu"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />

          <ul
            role="listbox"
            aria-label="Shop order"
            className="absolute right-0 top-full z-20 mt-1 w-full overflow-hidden rounded-md border border-primary/20 bg-white py-1 shadow-lg"
          >
            {sortOptions.map((option) => {
              const selected = sort === option.value;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selected}
                  className="px-2 rounded"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSort(option.value);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                      selected
                        ? "bg-primary font-medium text-white rounded"
                        : "text-neutral-600 hover:bg-primary/10 hover:text-neutral-900 rounded"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}