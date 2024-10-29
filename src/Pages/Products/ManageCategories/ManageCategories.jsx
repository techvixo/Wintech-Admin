import React, { useState } from "react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const ManageCategories = () => {
  // Sample data for categories
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Product #1",
      subtitle: "Subtitle",
      category: "Category A",
      status: "Active",
    },
    {
      id: 2,
      title: "Product #2",
      subtitle: "Subtitle",
      category: "Category B",
      status: "Inactive",
    },
    {
      id: 3,
      title: "Product #3",
      subtitle: "Subtitle",
      category: "Category C",
      status: "Active",
    },
    // More categories can be added here
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedcategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <h1 className="my-2 font-semibold text-[#344767]">
        This Page Should Have A Clean, Organized Layout For Admins To Easily
        View, Edit, Or Remove categories.
      </h1>

      <div className="flex justify-between">
        {/* Search and Filter */}
        <SearchAndFilter></SearchAndFilter>
        <div className="w-1/3 flex flex-col gap-3 items-end justify-center">
          <Link to={"/products/category/create"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + Add New Category
          </Link>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6 my-5 py-5">
        {displayedcategories.map((product, i) => {
            return(
              <CategoryCard key={i} product={product}></CategoryCard>
             )
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-600"
        >
          &lt;
        </button>
        {[...Array(Math.ceil(categories.length / itemsPerPage)).keys()].map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`p-2 ${
                currentPage === page + 1
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {page + 1}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(categories.length / itemsPerPage)}
          className="p-2 text-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ManageCategories;
