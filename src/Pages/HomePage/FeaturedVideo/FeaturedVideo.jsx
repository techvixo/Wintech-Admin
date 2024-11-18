import React, { useState } from "react";
import HomeMenu from "../HomeMenu";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../../../Constants";
import { toast } from "react-toastify";
import axios from "axios";
const FeaturedVideo = () => {
  const navigate = useNavigate();
  // const [imagePreview, setImagePreview] = useState(null); // Replace with your default image URL
  // const [selectedFile, setSelectedFile] = useState(null);
  const token = localStorage.getItem("token");
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedFile(file);
  //     setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
  //   }
  // };
  const createMachine = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      left_side_video_url: form.url.value || null,
      right_side_video_url: form.url.value || null
    }
    // const title_cn = form.title_cn.value;
    // const formData = new FormData();
    // formData.append("title_en", title_en);
    // formData.append("title_cn", title_cn);
    // if (selectedFile) {
    //   formData.append("image", selectedFile);
    // }
    try {
      const response = await axios.post(
        `${BASEURL}/web-home/featured-video/add`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success(`Featured video added!`);
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.error}`);
    }
  };
  return (
    <div className="p-5 rounded-md shadow-md bg-white">
      <HomeMenu></HomeMenu>
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={createMachine} className="flex flex-col gap-5 py-3">
          {/*========== Product Basic=========== */}
          <h1 className="my-2 font-semibold text-xl text-[#344767] pt-7">
            Featured Video 1
          </h1>
          <div className="flex flex-col gap-2">
           <input
              type="url"
              required
              name="url"
              placeholder="provide video url"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
          </div>
          <div className="flex items-center gap-3 py-2">
            <button
              onClick={() => navigate("/home/machine")}
              className="btn btn-outline btn-info btn-sm px-4"
            >
              Cancel
            </button>
            <input
              type="submit"
              value={"Save"}
              className="btn  btn-info btn-sm px-4"
            />
          </div>
        </form>
        <form onSubmit={createMachine} className="flex flex-col gap-5 py-3">
          {/*========== Product Basic=========== */}
          <h1 className="my-2 font-semibold text-xl text-[#344767] pt-7">
            Featured Video 2
          </h1>
          <div className="flex flex-col gap-2">
            <input
              type="url"
              required
              name="url"
              placeholder="provide video url"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
          </div>
          <div className="flex items-center gap-3 py-2">
            <button
              onClick={() => navigate("/home/machine")}
              className="btn btn-outline btn-info btn-sm px-4"
            >
              Cancel
            </button>
            <input
              type="submit"
              value={"Save"}
              className="btn  btn-info btn-sm px-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeaturedVideo;
