import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type SortOption =
  | "featured"
  | "newest"
  | "best-selling"
  | "popular"
  | "highest-rated"
  | "price-low-to-high"
  | "price-high-to-low";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "best-selling", label: "Best Selling" },
  { value: "popular", label: "Most Popular" },
  { value: "highest-rated", label: "Highest Rated" },
  { value: "price-low-to-high", label: "Price Low To High" },
  { value: "price-high-to-low", label: "Price High To Low" },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = SORT_OPTIONS.find(opt => opt.value === value)?.label || "Featured";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-indigo-deep text-dust-ivory font-condensed text-[12px] uppercase tracking-[1px] hover:border-thread-gold hover:text-thread-gold transition-all"
      >
        {selectedLabel}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-[220px] bg-archive-black border border-indigo-deep z-10">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 font-body text-[13px] transition-colors border-b border-indigo-deep/30 last:border-b-0 ${
                value === option.value
                  ? "bg-terracotta/10 text-thread-gold"
                  : "text-dust-ivory hover:bg-indigo-deep/20"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
