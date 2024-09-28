// Pagination.js
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  return (
    <div className="flex  gap-4 px-5 select-none">
      <p>Rows per page</p>
      <select
        className="px-2 py-1 rounded-md border border-[#BEBEBE]"
        value={rowsPerPage}
        onChange={onRowsPerPageChange}
      >
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <FaAngleLeft
        size={25}
        className={`${
          currentPage === 1
            ? "text-gray-200 cursor-not-allowed"
            : "text-gray-400 cursor-pointer"
        }`}
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      />
      <FaAngleRight
        size={25}
        className={`${
          currentPage === totalPages
            ? "text-gray-200 cursor-not-allowed"
            : "text-gray-400 cursor-pointer"
        }`}
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      />
      <span>
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
