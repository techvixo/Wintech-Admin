import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
// import BASEURL from "../../../Constants";
// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";
import adminProfileImg from "../../../src/assets/profile/admin-profile-img.jpg";
import { useLocation } from 'react-router-dom';

const Navber = () => {
  const [authenticated, setAuthenticated] = useState("");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Split the pathname by "/" and get the last part
  const pathSegments = location?.pathname?.split('/');
  const routerName = location?.pathname === '/' ? 'Overview' : pathSegments[pathSegments?.length - 1];
  // <<<<<<<<< Profile info Data Recived >>>>>>>>>>
  const { data: profileData = [], isLoading } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASEURL}/user/profile/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        return response.data;
      } catch (error) {
        setAuthenticated(error?.response?.data?.message);
        // console.log("Responds:", error?.response?.data?.message);
        throw error;
      }
    },
  });

  const handleSignOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isVerified");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("verified");
    navigate("/");
  };
  //   Check Authentication
  if (authenticated === "Unauthenticated.") {
    localStorage.clear();
    navigate("/");
    console.log("LogOut");
    setAuthenticated("");
  }

  return (
    <div className="shadow-sm py-2 navber_main_bg px-8">
      <div className="flex items-center justify-between  w-full">
        <div className="w-1/2">
          <p className="flex items-center gap-2 md:font-semibold text-xs">
            <span className="font-semibold text-xl">
            <GoHome />
            </span>
            <span> /  Pages </span>
            <span>
              /
            </span>
            <span className="capitalize" >
            {routerName}
            </span>
          </p>
          <h2 className="text-xl md:text-xl font-bold uppercase text-[#252B42] ">
          {routerName}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-1 w-1/2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search here"
              className="search_input input-sm bg-[#F0F2F5] text-sm"
            />
          </div>
          {/* This section for Profile manu  */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                {isLoading ? (
                  <img src={adminProfileImg} />
                ) : (
                  <>
                    {" "}
                    {profileData?.data?.image ? (
                      <img src={profileData?.data?.image} />
                    ) : (
                      <img src={adminProfileImg} />
                    )}
                  </>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 rounded p-2 shadow bg-base-100 w-52"
            >
              <li>
                <Link to="/message" className="">
                  <FaUserShield />
                  Message
                </Link>
              </li>
              <li>
                <Link to="/products" className="">
                  <FaUserShield />
                  Products List
                </Link>
              </li>
              {/* <li><Link>Settings</Link></li> */}
              {token ? (
                <li onClick={handleSignOut}>
                  <button
                    type="button"
                    className=" btn-xs flex items-center  transition text-center  pl-4 my-2 bg-blue-400 text-white hover:bg-red-500 rounded-full"
                  >
                    <span>
                      <HiOutlineLogout />
                    </span>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              )}
            </ul>
          </div>
          {/* This section for Notification  */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <button className="btn btn-xs btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </label>
            <div
              tabIndex={0}
              className=" flex items-start justify-start dropdown-content mt-1 z-[1]  shadow-md bg-white rounded-md w-72"
            >
              <div className="main-containt w-full">
                <h2 className="text-sx p-2 font-semibold rounded-t-md text-start text-gray-700 w-full bg-[#EDF2F9]">
                  Notification
                </h2>
                <div className="notifications h-[200px]">
                  <p className="text-sm pt-8 font-semibold text-center text-gray-500">
                    No notification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navber;
