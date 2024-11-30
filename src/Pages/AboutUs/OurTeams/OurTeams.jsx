import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import SearchAndFilter from "../../Products/SearchAndFilter/SearchAndFilter";
import AboutMenu from "../AboutMenu";
import BASEURL from "../../../../Constants";
import { toast } from "react-toastify";

const OurTeams = () => {
  const [ourTeams, setOurTeams] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  // console.log(ourTeams)

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${BASEURL}/our-team/all`);
      setOurTeams(response.data.data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };
  useEffect(() => {
  fetchTeams();
  }, [isDelete]);

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <AboutMenu></AboutMenu>
      <div className="flex justify-between items-end">
        <div className="ll">
          <p className="my-2 font-semibold text-[#344767]">
            Team Member Listing
          </p>
          <SearchAndFilter></SearchAndFilter>
        </div>
        <div className="w-1/3 flex flex-col gap-3 items-end justify-center">
          <Link
            to={"/about/teams/create"}
            className="text-sm text-white py-2 px-4 rounded"
            style={{
              background: "linear-gradient(to bottom, #3E3D45, #202020)",
            }}
          >
            + ADD NEW TEAM MEMBER
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 my-4">
        {ourTeams.map((team, i) => {
          return (
            <TeamCard
              key={i}
              team={team}
              fetchTeams={fetchTeams}
              setIsDelete={setIsDelete}
            ></TeamCard>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeams;
