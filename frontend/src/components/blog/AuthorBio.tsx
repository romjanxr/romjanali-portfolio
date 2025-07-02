"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Author } from "@/types/blog";

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-[#242424] p-6 rounded-lg border border-gray-700">
      <div className="flex items-start gap-4">
        <Image
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
          <p className="text-gray-400 mb-4">{author.bio}</p>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0"
            >
              Follow
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
