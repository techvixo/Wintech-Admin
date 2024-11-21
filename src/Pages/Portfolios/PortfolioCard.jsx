import React from "react";
import defaultImg from "../../assets/default-img.png"
import { Link } from "react-router-dom";
import BASEURL from "../../../Constants";
const PortfolioCard = ({portfolio}) => {
  const {_id, name_en, name_cn, description_en, description_cn, image, url, createdAt} = portfolio
  return (
    <div  className="flex flex-col gap-2 rounded-lg shadow p-4">
      <img
        src={image ? `${BASEURL}/${image}` : defaultImg}
        alt="team"
        className="w-full h-32 object-cover rounded"
      />
       <p className="font-semibold text-[#7B809A] text-sm">
        Product: #{_id}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
     {name_en}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
     {name_cn}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      {description_en}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      {description_cn}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      {url}
      </p>
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
      Data: {createdAt}
      </p>
      <div className="flex items-center gap-3">
        <Link to={"/portfolio/edit"}
          className="btn btn-outline btn-info btn-sm px-4"
        >
          Edit
        </Link>
        <button
          // onClick={() => handleDelete(team.id)}
          className="btn btn-outline btn-error btn-sm px-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
