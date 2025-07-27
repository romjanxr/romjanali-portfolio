"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export default function BlogHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: BlogHeroProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-[#ff1744]">Blog</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Sharing my journey in web development, tutorials, and insights about
          modern technologies
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-[#242424] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#ff1744] h-12 pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={
                  category === selectedCategory
                    ? "bg-[#ff1744] hover:bg-[#d50000] text-white border-0"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
