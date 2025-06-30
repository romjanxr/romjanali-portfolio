import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPostsData } from "@/data/blogPostsData";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#242424]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#ff1744]">Posts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Latest insights and tutorials from my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPostsData.map((post) => (
            <Card
              key={post.id}
              className="bg-[#2a2a2a] border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300 group overflow-hidden"
            >
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
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
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
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-8 py-3 text-lg font-medium rounded-md">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
