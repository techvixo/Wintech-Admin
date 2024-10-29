import React from "react";

const AddCategory = () => {
  return (
    <div className="p-5 rounded-md shadow-md bg-white pb-36">
      <h1 className="my-2 font-semibold text-[#344767]">
      This is where the admin can input or modify all relevant product details.
      </h1>
      <div className="w-1/3">
        <div className="flex flex-col gap-5 py-5">
        {/*========== Product Basic=========== */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[#344767] text-lg">
            Add Category Form
            </p>
            <input
              type="text"
              name=""
              placeholder="Category Name"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
            <input
              type="text"
              name=""
              placeholder="Number Of Products"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
          </div>

          <div className="flex items-center gap-3 py-2">
            <button
              // onClick={() => handleEdit(product.id)}
              className="btn btn-outline btn-info btn-sm px-4"
            >
              Save Drafts
            </button>
            <button
              // onClick={() => handleEdit(product.id)}
              className="btn  btn-info btn-sm px-4"
            >
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
