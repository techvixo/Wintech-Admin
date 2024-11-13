import { useState } from "react";
import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoAnalyticsOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { TbLogout2 } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GiLoveSong } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import logo from "../../../assets/logo/logo.png";

const SideNavBar = () => {
  const navigation = useNavigate();
  const dashboard = <RiDashboardFill />;
  const banner = <GiLoveSong />;
  const products = <FaUsers />;
  const setting = <IoSettingsSharp />;
  const home = <MdManageAccounts />;
  const message = <LuBookOpenCheck />;
  const blog = <IoLogoYoutube />;
  const help = <IoIosHelpCircleOutline />;
  const about = <IoAnalyticsOutline />;
  const portfolio = <SiSimpleanalytics />;
  const onboarding = <FaMusic />;

  const [menus] = useState([
    {
      name: "Overview",
      path: "/",
      icon: dashboard,
    },
    {
      name: "Banners",
      path: "/banner",
      icon: banner,
    },
    {
      name: "Products",
      path: "/products",
      icon: products,
    },
    {
      name: "About Us ",
      path: "/about",
      icon: about,
    },
    {
      name: "Portfolio ",
      path: "/portfolio",
      icon: portfolio,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: blog,
    },
    {
      name: "Home Page",
      path: "/home",
      icon: home,
    },
    {
      name: "Message",
      path: "/message",
      icon: message,
    },
  ]);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("isVerified");
    navigation("/");
    // console.log("Out");
  };
  return (
    <>
      <div className="navbar-section-main  bg-[#202020] pl-6">
        <div className="py-2  flex items-center site_logo">
          <Link to="/">
            <img src={logo} className=" w-24" alt="" />
          </Link>
          <span className="text-white text-xl uppercase">Wintech</span>
        </div>
        <div className=" flex flex-col gap-2 md:gap-4 mt-4 ">
          {menus.map((menu, index) => (
            <div key={index} className="nav-main-menu">
              <NavLink to={menu.path} className={"dashboard-item"}>
                <p className={"flex items-center gap-3  py-1"}>
                  <span className="manu_icon"> {menu.icon}</span>
                  <span className="manu_title">{menu.name}</span>
                </p>
              </NavLink>
            </div>
          ))}

          <div className="nav-main-menu">
            <button
              onClick={() => handleLogOut()}
              className={"dashboard-item "}
            >
              <p className={"flex items-center gap-3"}>
                <span className="manu_icon text-xl">
                  <TbLogout2 />
                </span>
                <span className="manu_title">Logout</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
