"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pages = React.useMemo(() => {
    const visiblePages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
      return visiblePages;
    }

    visiblePages.push(1);

    if (currentPage > 3) {
      visiblePages.push("...");
    }

    const start = Math.max(currentPage - 1, 2);
    const end = Math.min(currentPage + 1, totalPages - 1);

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (currentPage < totalPages - 2) {
      visiblePages.push("...");
    }

    visiblePages.push(totalPages);

    return visiblePages;
  }, [totalPages, currentPage]);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        className="h-9 w-9 text-gray-400 hover:text-gray-500"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((page, idx) => {
        if (typeof page === "string") {
          return (
            <span key={idx} className="px-2 text-gray-500">
              ...
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <Button
            key={page}
            variant={isActive ? "default" : "ghost"}
            onClick={() => onPageChange(page)}
            className={cn(
              "h-9 w-9 px-0",
              isActive
                ? "bg-blue-50 text-blue-600 border border-blue-600 hover:bg-blue-50"
                : "text-gray-500 hover:text-blue-600"
            )}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="ghost"
        className="h-9 w-9 text-gray-400 hover:text-gray-500"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
