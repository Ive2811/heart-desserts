"use client";

import type { Category } from "@/lib/types";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (categoryKey: string) => void;
}

export function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="mb-9 flex flex-wrap justify-center gap-2.5">
      {categories.map((category) => {
        const isActive = category.key === activeCategory;
        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onSelect(category.key)}
            className={`rounded-full border px-5 py-2.5 text-[0.82rem] tracking-wide uppercase transition-colors ${
              isActive
                ? "border-heart-wine bg-heart-wine text-heart-bg-cream"
                : "border-heart-wine/15 text-heart-wine-soft hover:border-heart-wine hover:bg-heart-wine hover:text-heart-bg-cream"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
