import React, { useEffect, useState } from "react";
import defaultImg from "../../assets/default-img.png"
import BASEURL from "../../../Constants";

const BannerEditor = ({data, setTitleEn, setSubtitleEn, setTitleCn, setSubtitleCn, setSelectedFile, handler}) => {
  const [imagePreview, setImagePreview] = useState(data?.banner_image ? `${BASEURL}/${data?.banner_image}`: defaultImg); // Replace with your default image URL
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
    }
  };
useEffect(() => {
  setTitleEn(data?.title_en)
  setTitleCn(data?.title_cn)
  setSubtitleEn(data?.title_en)
  setSubtitleCn(data?.title_en)
},[data])
console.log(imagePreview);
  return (
    <div className="banner-editor flex p-4 rounded-lg shadow-lg bg-white">
      {/* Left side image preview */}
      <div className="image-preview relative w-2/3 overflow-hidden rounded-lg mr-4">
      
        <img
          src={imagePreview}
          alt="Current Preview"
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs py-1 px-2 rounded">
          CURRENT IMAGE PREVIEW
        </div>
      </div>

      {/* Right side content */}
      <div className="content w-1/3">
        {/* Input Fields */}
        <div className="flex items-center justify-between ">
          <input
            type="text"
            defaultValue={data?.title_en}
            onChange={(e) => setTitleEn(e.target.value)}
            placeholder="Title in English"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        </div>
        <textarea
            defaultValue={data?.description_en}
          onChange={(e) => setSubtitleEn(e.target.value)}
          placeholder="Subtitle in English"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows="4"
        />

        {/* Input Fields */}
        <div className="flex items-center justify-between mb-2 ">
          <input
            type="text"
            defaultValue={data?.title_cn}
            onChange={(e) => setTitleCn(e.target.value)}
            placeholder="Title in Chinese"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        </div>
        <textarea
            defaultValue={data?.description_cn}
          onChange={(e) => setSubtitleCn(e.target.value)}
          placeholder="Subtitle in Chinese"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows="4"
        />

        {/* Buttons */}
        <div className="flex items-center justify-between mb-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="flex items-center bg-black text-white px-3 py-2 rounded mr-2 cursor-pointer"
          >
            <span className="text-xl mr-1">+</span> Upload New Image
          </label>
          <button
            onClick={handler}
            className="bg-blue-500 text-white px-6 uppercase py-2 rounded shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerEditor;
