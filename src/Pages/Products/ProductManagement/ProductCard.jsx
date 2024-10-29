import React from "react";

const ProductCard = ({product}) => {
  return (
    <div  className="flex flex-col gap-2 rounded-lg shadow p-4">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-full h-32 object-cover rounded"
      />
      <p className="font-semibold text-[#7B809A] text-sm">
        Product: #{product.id}
      </p>
      <h3 className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        Title
      </h3>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        {product.subtitle}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        Product's Category: {product.category}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        Product's Status: {product.status}
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleEdit(product.id)}
          className="btn btn-outline btn-info btn-sm px-4"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-outline btn-error btn-sm px-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
