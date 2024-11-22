import React from "react";
import defaultImg from "../../assets/default-img.png"
import { Link } from "react-router-dom";
import BASEURL from "../../../Constants";
const BlogCard = ({blog}) => {
  const {_id, heading_image, name_cn, name_en, description_cn, description_en, createdAt } = blog;
  return (
    <div  className="flex flex-col gap-2 rounded-lg shadow p-4">
      <img
        src={`${BASEURL}/${heading_image}`}
        alt="blog"
        className="w-full h-32 object-cover rounded"
      />
       <p className="font-semibold text-[#7B809A] text-sm">
        Blog: #{_id}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
     {name_en}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
     {name_cn}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      {description_en[0]}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      {description_cn[0]}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      Blog Status: Active
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      Published: {createdAt}
      </p>
      <div className="flex items-center gap-3">
        <Link to={`/blog/edit/${_id}`}
          className="btn btn-outline btn-info btn-sm px-4"
        >
          Edit
        </Link>
        <button
          // onClick={() => handleDelete(blog.id)}
          className="btn btn-outline btn-error btn-sm px-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
