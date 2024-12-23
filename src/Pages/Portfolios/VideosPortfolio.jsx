import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BASEURL from "../../../Constants";
import Loader from "../Shared/Loader/Loader";
import PortfolioMenu from "./PortfolioMenu";

const VideosPortfolio = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // <<<<<<<<< Home Data Recived Here.. >>>>>>>>>>
  const {
    data: homeData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["home-data"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/web-home`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });

  const createMachine = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      left_side_video_url: form.leftUrl?.value || null,
      right_side_video_url: form.rightUrl?.value || null,
    };

    try {
      const response = await axios.post(
        `${BASEURL}/web-home/featured-video/add`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      refetch();
      toast.success(`Featured video added!`);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Something went wrong!");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-5 rounded-md shadow-md bg-white">
      <PortfolioMenu></PortfolioMenu>
      <form onSubmit={createMachine} className=" py-3">
        <h1 className="my-2 font-semibold text-xl text-[#344767]">
          Youtube video embed code
        </h1>
        <div className="flex  gap-5">
          <input
            type="url"
            required
            name="leftUrl"
            placeholder="Enter video embed code URL"
            className="font-semibold text-[#7B809A] w-2/3 text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm"
          />
          <div className="flex items-center gap-3 py-2">
            <button
              onClick={() => navigate("/portfolio")}
              className="btn btn-outline btn-info btn-sm px-4"
            >
              Cancel
            </button>
            <input
              type="submit"
              value="Add New Video"
              className="btn btn-info btn-sm px-4"
            />
          </div>
        </div>
      </form>
      <div className="main_container">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#070F11] my-4 md:my-7">
            Video Preview:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* Left Video */}
            <div className="relative w-full h-0 pb-[56.25%]">
              {homeData?.data?.featured_video?.left_side_video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={homeData?.data?.featured_video?.left_side_video}
                  title="Left Side Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            {/* Right Video */}
            <div className="relative w-full h-0 pb-[56.25%]">
              {homeData?.data?.featured_video?.right_side_video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={homeData?.data?.featured_video?.right_side_video}
                  title="Right Side Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPortfolio;
