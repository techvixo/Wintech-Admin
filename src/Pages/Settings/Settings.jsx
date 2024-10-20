import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import img from "../../assets/setting/setting.jpg";
import axios from "axios";
import { FaRegUser } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthContext } from "../../context/AuthProvider";

const Settings = () => {
  const [acceptedMsg, setAcceptedMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (data) => {
    setAcceptedMsg("");
    setLoginLoading(true);
    setLoading(false);
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    // navigate("/email-verify");
    // console.log(userData);
    try {
      const response = await axios.post(`${BASEURL}/user/register`, userData);
      toast.success(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(response.data);
      // const id = response?.data?.data?.userInfo?.id;
      const email = userData?.email;
      const token = response?.data?.activationToken;

      if (response.data.success == true) {
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        navigate("/email-verify");
      }
      setLoginLoading(false);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.log(error.response.data);
      setLoginLoading(false);
      throw new Error(error.response.data.message);
    }
  };
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md p-6 shadow-lg">
   <div className="img w-full">
     <img src={img} className="w-full" alt="img" />
   </div>
   <div className="">
     <div>
       <h3 className="text-2xl md:my-3 font-bold capitalize">
         Create a new Admin
       </h3>
       <span className="text-[#64748B] text-sm">
         Welcome back! please enter your detail
       </span>
     </div>

     <form onSubmit={handleSubmit(handleSignIn)}>
       <div className="form-control">
         <label className="label">
           <span className="label-text font-semibold">Name</span>
         </label>
         <div className="w-full relative">
           <span className="absolute text-[#64748B] top-3 left-4 text-2xl">
             {" "}
             <FaRegUser />
           </span>
           <input
             type="text"
             placeholder="enter name"
             {...register("name", { required: true })}
             className="input w-full pl-14 input-bordered"
           />
         </div>
         {errors.name && (
           <span className="text-red-700">
             Please provited your Name
           </span>
         )}
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text font-semibold">Email</span>
         </label>
         <div className="w-full relative">
           <span className="absolute text-[#64748B] top-3 left-4 text-2xl">
             {" "}
             <MdOutlineEmail />
           </span>
           <input
             type="email"
             placeholder="enter email"
             {...register("email", { required: true })}
             className="input w-full pl-14 input-bordered"
           />
         </div>
         {errors.email && (
           <span className="text-red-700">
             Please provited your email
           </span>
         )}
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text font-semibold">Password</span>
         </label>
         <div className="relative">
           <span className="absolute top-3 text-[#64748B] left-4 text-2xl">
             {" "}
             <RiLockPasswordLine />
           </span>
           <input
             placeholder="enter password"
             className="input input-bordered  w-full pl-14"
             type={showPassword ? "text" : "password"}
             {...register("password", { required: true })}
           />
           <button
             type="button"
             onClick={togglePasswordVisibility}
             className="focus:outline-none absolute right-4 top-4 "
           >
             {showPassword ? (
               <AiOutlineEyeInvisible />
             ) : (
               <AiOutlineEye />
             )}
           </button>
         </div>
         {errors.password && (
           <span className="text-red-700">
             {errors.password.message}
           </span>
         )}
         <label className="label">
           <span className="label-text font-semibold text-red-700">
             {error}
           </span>
         </label>
       </div>
       <div className="">
         <span className="text-red-600">{acceptedMsg}</span>
       </div>
       <div className="form-control mt-6">
         <input
           type="submit"
           className="btn border-none bg-gradient-to-r from-[#1A73E7] to-[#509AFA] hover:bg-gradient-to-r text-lg hover:from-[#509AFA] hover:to-[#1A73E7] transition text-white"
           value={loginLoading ? "Loading.." : "Make Admin"}
         />
       </div>
     </form>
   </div>
 </div>
  );
};

export default Settings;
