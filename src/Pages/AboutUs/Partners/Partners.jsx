import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchAndFilter from "../../Products/SearchAndFilter/SearchAndFilter";
import AboutMenu from "../AboutMenu";
import CertificateCard from "./PartnerCard";
import PartnerCard from "./PartnerCard";

const Partners = () => {
  const ourPartners = [
    {
      id: 1,
      name: "Partner Name",
    },
    {
      id: 1,
      name: "Partner Name",
    },
    {
      id: 1,
      name: "Partner Name",
    },
  ];

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <AboutMenu></AboutMenu>
      <div className="flex justify-between items-end">
        <div className="ll">
          <p className="my-2 font-semibold text-[#344767]">
          Certificate Listing
          </p>
          {/* Search and Filter */}
          <SearchAndFilter></SearchAndFilter>
        </div>
        <div className="w-1/3 flex flex-col gap-3 items-end justify-center">
          <Link
            to={"/about/partners/create"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + ADD NEW PARTNER
          </Link>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6 my-4">
        {ourPartners.map((team, i) => {
          return <PartnerCard key={i} team={team}></PartnerCard>;
        })}
      </div>
    </div>
  );
};

export default Partners;
