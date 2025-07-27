"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogHeaderProps {
  blogPost: BlogPost;
}

export default function BlogHeader({ blogPost }: BlogHeaderProps) {
  return (
    <header className="mb-8">
      <div className="mb-4">
        <Badge className="bg-[#ff1744] text-white hover:bg-[#d50000]">
          {blogPost.category}
        </Badge>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        {blogPost.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Image
            src={blogPost.author.avatar || "/placeholder.svg"}
            alt={blogPost.author.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-medium text-white">{blogPost.author.name}</p>
            <p className="text-sm text-gray-400">{blogPost.author.bio}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{blogPost.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blogPost.readTime}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-b border-gray-700 py-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-400 hover:text-[#ff1744] transition-colors">
            <Heart className="h-5 w-5" />
            <span>{blogPost.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-[#ff1744] transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>{blogPost.comments}</span>
          </button>
        </div>
        <button className="flex items-center gap-2 text-gray-400 hover:text-[#ff1744] transition-colors">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </header>
  );
}
