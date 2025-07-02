"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationInfo } from "@/types/blog";

interface BlogPaginationProps {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  pagination,
  onPageChange,
}: BlogPaginationProps) {
  const { currentPage, totalPages } = pagination;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>

      <div className="flex space-x-2">
        {getVisiblePages().map((page, index) => (
          <Button
            key={index}
            variant={page === currentPage ? "default" : "outline"}
            className={
              page === currentPage
                ? "bg-[#ff1744] hover:bg-[#d50000] text-white border-0"
                : page === "..."
                ? "border-gray-600 text-gray-300 cursor-default hover:bg-transparent"
                : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : undefined
            }
            disabled={page === "..."}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
