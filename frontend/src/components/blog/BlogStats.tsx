"use client";

import { BlogStats } from "@/types/blog";

interface BlogStatsProps {
  stats: BlogStats;
}

export default function BlogStatstics({ stats }: BlogStatsProps) {
  return (
    <div className="mt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-[#ff1744] mb-2">
            {stats.totalArticles}
          </h3>
          <p className="text-gray-400">Total Articles</p>
        </div>
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-[#ff1744] mb-2">
            {stats.totalCategories}
          </h3>
          <p className="text-gray-400">Categories</p>
        </div>
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-[#ff1744] mb-2">
            {stats.totalViews}
          </h3>
          <p className="text-gray-400">Total Views</p>
        </div>
      </div>
    </div>
  );
}
