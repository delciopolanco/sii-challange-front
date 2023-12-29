import classNames from "classnames";
import { useEffect, useState } from "react";

export const Paginator = ({
  currentPage,
  pages,
  onPageChange,
  nextLbl,
  previousLbl,
  loading,
}) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(pages);
  const nextDisabled = totalPages === page || loading;
  const previousDisabled = page === 1 || loading;

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const setCurrentPage = (selected) => {
    setPage(selected);
    onPageChange(selected);
  };

  const range = (from, to) => {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    if (totalPages <= 1) return null;

    if (page <= pages + 1) {
      pageNumbers = [...range(1, Math.min(totalPages, pages * 2 + 1))];
    } else if (page >= totalPages - pages) {
      pageNumbers = [...range(Math.max(1, totalPages - pages * 2), totalPages)];
    } else {
      pageNumbers = [...range(page - pages, page + pages)];
    }

    return pageNumbers.map((pageNumber) => (
      <button
        disabled={loading}
        key={pageNumber}
        className={classNames("px-2 py-1 rounded-lg mr-2", {
          "bg-primary text-white": page === pageNumber,
          "hover:bg-blue-200": page !== pageNumber,
        })}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  if (!totalPages) {
    return null;
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center justify-center my-2 w-full p-1">
      <button
        className={`px-2 py-1 rounded-lg text-sm hover:underline ${
          previousDisabled ? "text-gray-300" : ""
        }`}
        onClick={() => setCurrentPage(page - 1)}
        disabled={previousDisabled}
      >
        {previousLbl}
      </button>

      <div className="flex flex-row justify-center items-center">
        {renderPageNumbers()}
      </div>

      <button
        className={`px-2 py-1 rounded-lg text-sm hover:underline ${
          nextDisabled ? "text-gray-300" : ""
        }`}
        onClick={() => setCurrentPage(page + 1)}
        disabled={nextDisabled}
      >
        {nextLbl}
      </button>
    </div>
  );
};
