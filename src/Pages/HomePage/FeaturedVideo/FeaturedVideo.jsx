import React, { useState } from "react";
import HomeMenu from "../HomeMenu";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../../../Constants";
import { toast } from "react-toastify";
import axios from "axios";
const FeaturedVideo = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null); // Replace with your default image URL
  const [selectedFile, setSelectedFile] = useState(null);
  const token = localStorage.getItem("token");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
    }
  };
  const createMachine = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title_en = form.title_en.value;
    const title_cn = form.title_cn.value;
    const formData = new FormData();
    formData.append("title_en", title_en);
    formData.append("title_cn", title_cn);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    try {
      const response = await axios.post(
        `${BASEURL}/web-home/cnc-machine-part/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success(`About banner created successful`);
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
            <p className="font-semibold text-[#344767] text-sm">Image Upload</p>
            <div className="flex items-center justify-between">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="flex items-center justify-center gap-3 my-0 font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-md w-full h-32 cursor-pointer"
              >
                <span className="text-xl mr-1">+</span> Upload New Image
              </label>
            </div>
            <input
              type="text"
              required
              name="title_en"
              placeholder="write title in english"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
            <input
              type="text"
              name="title_cn"
              required
              placeholder="write title in chinese"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
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
            <p className="font-semibold text-[#344767] text-sm">Image Upload</p>
            <div className="flex items-center justify-between">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="flex items-center justify-center gap-3 my-0 font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-md w-full h-32 cursor-pointer"
              >
                <span className="text-xl mr-1">+</span> Upload New Image
              </label>
            </div>
            <input
              type="text"
              required
              name="title_en"
              placeholder="write title in english"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
            <input
              type="text"
              required
              name="title_cn"
              placeholder="write title in chinese"
              className="font-semibold text-[#7B809A] text-sm bg-[#F8F8F8] p-2 px-3 rounded-sm "
            />
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
        {/* <div className="flex justify-center pt-14 w-1/2">
          {imagePreview && (
            <div className="image-preview relative  w-52 h-52 overflow-hidden rounded-lg mr-4">
              <img
                src={imagePreview}
                alt="Current Preview"
                className="w-full h-full shadow-md rounded-full object-cover"
              />
              <div className="absolute top-3 left-7 bg-red-500 text-white text-xs py-1 px-2 rounded">
                CURRENT IMAGE PREVIEW
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedVideo;
