import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchAndFilter from "../Products/SearchAndFilter/SearchAndFilter";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const ourTeams = [
    {
      id: 1,
      name: "Name",
      role: "Role",
      Experience: "Experience",
      Language: "Language",
      Address: "Address",
      University: "University",
    },
    {
      id: 1,
      name: "Name",
      role: "Role",
      Experience: "Experience",
      Language: "Language",
      Address: "Address",
      University: "University",
    },
    {
      id: 1,
      name: "Name",
      role: "Role",
      Experience: "Experience",
      Language: "Language",
      Address: "Address",
      University: "University",
    },
  ];

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <h5 className="text-[#344767] font-semibold text-lg my-3 capitalize">
      This is the main page where admins can view all blog posts
      </h5>
      <div className="flex justify-between items-end">
        {/* Search and Filter */}
        <SearchAndFilter></SearchAndFilter>
        <div className="w-1/3 flex flex-col gap-3 items-end justify-center">
          <Link
            to={"/blog/create"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + ADD NEW BLOG
          </Link>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6 my-4">
        {ourTeams.map((team, i) => {
          return <BlogCard key={i} team={team}></BlogCard>;
        })}
      </div>
    </div>
  );
};

export default Blogs;
