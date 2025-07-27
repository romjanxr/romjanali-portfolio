"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="bg-[#242424] border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#ff1744] text-white hover:bg-[#d50000]">
            {post.category}
          </Badge>
        </div>
        {post.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="text-white text-xl group-hover:text-[#ff1744] transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
        <CardDescription className="text-gray-400 line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-[#ff1744] hover:text-[#d50000] font-medium transition-colors"
        >
          Read More
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
