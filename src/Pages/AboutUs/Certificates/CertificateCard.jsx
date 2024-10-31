import React from "react";
import defaultImg from "../../../assets/default-img.png"
import { Link } from "react-router-dom";
const CertificateCard = ({certificate}) => {
  return (
    <div  className="flex flex-col gap-2 rounded-lg shadow p-4">
      <img
        src={defaultImg}
        alt="certificate"
        className="w-full h-80 object-cover rounded"
      />
      <p className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm ">
       {certificate.name}
      </p>
      <div className="flex items-center gap-3">
        <Link to={"/about/certificates/edit"}
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

export default CertificateCard;
