"use client";

import BlogNavigation from "@/components/blog/BlogNavigation";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogStats from "@/components/blog/BlogStats";
import Footer from "@/components/layout/Footer";
import { useBlogFilters } from "@/hooks/useBlogFilters";
import { BlogPost, BlogStats as BlogStatsType } from "@/types/blog";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { mockBlogPosts } from "@/data/mockBlogPostsData";

// Mock data (replace with your data fetching logic)

const categories = ["All", "React", "JavaScript", "Node.js", "CSS", "Database"];

const mockStats: BlogStatsType = {
  totalArticles: mockBlogPosts.length,
  totalCategories: categories.length - 1, // Exclude "All"
  totalViews: "50K+",
};

export default function BlogPage() {
  const {
    searchQuery,
    selectedCategory,
    currentPosts,
    pagination,
    handleSearchChange,
    handleCategoryChange,
    handlePageChange,
  } = useBlogFilters(mockBlogPosts, categories);

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <BlogNavigation />

      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogGrid posts={currentPosts} />
          <BlogPagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
          <BlogStats stats={mockStats} />
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
