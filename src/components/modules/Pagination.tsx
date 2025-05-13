"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "@/icons";

export const Pagination = ({
  totalItems,
  itemsPerPage,
}: {
  totalItems: number;
  itemsPerPage: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("p") || "1", 10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    router.push(`?p=${page}`);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 py-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`mr-8 ${currentPage <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <ArrowRight
          color={
            currentPage <= 1
              ? "var(--color-black-translucent)"
              : "var(--color-pangea)"
          }
          className="w-[15px] h-auto rotate-180"
        />
      </button>

      {pageNumbers.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 min-w-[35px] leading-[25px] rounded cursor-pointer ${
              page === currentPage ? "bg-tan" : ""
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${idx}`} className="px-3 py-1">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`ml-8 ${currentPage >= totalPages ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <ArrowRight
          color={
            currentPage >= totalPages
              ? "var(--color-black-translucent)"
              : "var(--color-pangea)"
          }
          className="w-[15px] h-auto"
        />
      </button>
    </div>
  );
};
