"use client";

import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogContentProps {
  blogPost: BlogPost;
}

export default function BlogContent({ blogPost }: BlogContentProps) {
  return (
    <>
      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          width={800}
          height={400}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-invert prose-lg max-w-none mb-8 prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-li:text-gray-300 prose-code:text-[#ff1744] prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />
    </>
  );
}
