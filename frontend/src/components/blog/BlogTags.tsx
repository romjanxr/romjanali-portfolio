"use client";

import { Badge } from "@/components/ui/badge";

interface BlogTagsProps {
  tags: string[];
}

export default function BlogTags({ tags }: BlogTagsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
