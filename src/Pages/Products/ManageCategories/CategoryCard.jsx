import React from "react";

const CategoryCard = ({product}) => {
  return (
    <div  className="flex flex-col gap-2 rounded-lg shadow p-4">
      <p className="font-semibold text-[#7B809A] text-sm">
        Category: #{product.id}
      </p>
      <h3 className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        Category Name
      </h3>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
        Status
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

export default CategoryCard;
