import React, { useState } from "react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  // Sample data for products
  const products = [
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
    // More products can be added here
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div className="">
      <h1 className="my-2 font-semibold text-[#344767]">
        This Page Should Have A Clean, Organized Layout For Admins To Easily
        View, Edit, Or Remove Products.
      </h1>

      <div className="flex justify-between">
        {/* Search and Filter */}
        <SearchAndFilter></SearchAndFilter>
        <div className="w-1/3 flex flex-col gap-3 items-end justify-center">
          <Link to={"/products/create"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + Add New Product
          </Link>
          <Link to={"/products/category"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + Category Management
          </Link>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6 my-4">
        {products.map((product, i) => {
            return(
              <ProductCard key={i} product={product}></ProductCard>
             )
        })}
      </div>

    </div>
  );
};

export default ProductManagement;
