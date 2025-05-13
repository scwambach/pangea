"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({ total }: { total: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("p") || "1", 10);
  const totalPages = Math.ceil(total / 2);

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
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &lt;
      </button>

      {pageNumbers.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 border rounded cursor-pointer ${
              page === currentPage ? "bg-black text-white" : ""
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
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};
