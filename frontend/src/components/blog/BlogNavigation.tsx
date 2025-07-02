"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogNavigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#2a2a2a]/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Romjan Ali
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#home"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
              <Link href="/blog" className="text-white font-medium">
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          <Button className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-6 py-2 rounded-md font-medium">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
