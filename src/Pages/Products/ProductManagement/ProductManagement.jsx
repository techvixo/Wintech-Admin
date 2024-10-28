import React, { useState } from "react";

const ProductManagement = () => {
  // Sample data for products
  const [products, setProducts] = useState([
    { id: 1, title: "Product #1", subtitle: "Subtitle", category: "Category A", status: "Active" },
    { id: 2, title: "Product #2", subtitle: "Subtitle", category: "Category B", status: "Inactive" },
    { id: 3, title: "Product #3", subtitle: "Subtitle", category: "Category C", status: "Active" },
    // More products can be added here
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleEdit = (id) => {
    console.log(`Editing product with ID: ${id}`);
    // Add edit functionality here
  };

  const handleDelete = (id) => {
    console.log(`Deleting product with ID: ${id}`);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold mb-4">
        This Page Should Have A Clean, Organized Layout For Admins To Easily View, Edit, Or Remove Products.
      </h1>

      {/* Search and Filter */}
      <div className="flex justify-between mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="search for products by name, SKU, or category..."
            className="p-2 rounded border border-gray-300 w-96"
          />
          <button className="absolute right-2 top-2 text-gray-500">🔍</button>
        </div>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Filter</button>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mb-4">
        <button className="bg-black text-white py-2 px-4 rounded">+ Add New Product</button>
        <button className="bg-black text-white py-2 px-4 rounded">+ Category Management</button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.subtitle}</p>
            <p className="text-gray-600 mb-2">Product's Category: {product.category}</p>
            <p className="text-gray-600 mb-4">Product's Status: {product.status}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(product.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
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
        {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`p-2 ${currentPage === page + 1 ? "text-blue-500 font-semibold" : "text-gray-600"}`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
          className="p-2 text-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductManagement;
