"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-[#ff1744] hover:text-[#d50000] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
    </div>
  );
}
