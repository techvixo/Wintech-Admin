import React, { useEffect, useState } from "react";
import defaultImg from "../../assets/default-img.png";
import BASEURL from "../../../Constants";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBanner = ({ data, refetch }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleEn, setTitleEn] = useState("");
  const [subtitleEn, setSubtitleEn] = useState("");
  const [titleCn, setTitleCn] = useState("");
  const [subtitleCn, setSubtitleCn] = useState("");
  const [deletingBanner, setDeletingBanner] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
     setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
    }
  };
  const cencelModal = () => {
   setDeletingBanner(null);
 };

 //============================================================
 // <<<<<<<<< Promotion slider Updated function here >>>>>>>>>>
 // ===========================================================
 const handleUpdateSlider = async (sliderInfo) => {
   setLoader(true);
   const formData = new FormData();
  const purpose = data?.purpose;
   formData.append("title_en", titleEn);
   formData.append("title_cn", titleCn);
   formData.append("description_en", desEn);
   formData.append("description_cn", desCn);
   formData.append("link", newLink);

   if (selectedImage) {
     formData.append("image", selectedImage);
   }
   try {
     const response = await axios.patch(
       `${BASEURL}/web-banner/update/${purpose}`,
       formData,
       {
         headers: {
           Authorization: localStorage.getItem("token"),
         },
       }
     );
     toast.success(`${response.data.message}`);
     console.log(response.data);
     setPreviewImage(null);
     refetch();
     setLoader(false);
     return response.data;
   } catch (error) {
     console.log(error);
     toast.error(`${error?.response?.data?.message}`);
     setLoader(false);
     throw new Error(error?.response?.data?.message);
   }
 };

 //============================================================
 // <<<<<<<<< Promotion slider Delete function here >>>>>>>>>>
 // ===========================================================
 const handleDeleteSlider = async (sliderInfo) => {
   try {
     const response = await axios.delete(
       `${BASEURL}/web-banner/delete/${sliderInfo?.purpose}`,
       {
         headers: {
           Authorization: localStorage.getItem("token"),
         },
       }
     );

     toast.success(`${response.data.message}`);
     console.log(response.data);
     setDeletingBanner(null);
     refetch();
     return response.data;
   } catch (error) {
     console.log(error);
   }
   // console.log(sliderInfo)
 };
  return (
    <div className="banner-editor flex p-4 rounded-lg shadow-lg bg-white">
      {/* Left side image preview */}
      <div className="image-preview relative w-1/3 overflow-hidden rounded-lg mr-4">
        {
         imagePreview ?
         <img
          src={imagePreview}
          alt="Current Preview"
          className="w-full h-72 object-cover"
        />
        :
        <img
          src={`${BASEURL}/${data?.banner_image}`}
          alt="Current Preview"
          className="w-full h-full object-cover"
        />
        }
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs py-1 px-2 rounded">
          CURRENT IMAGE PREVIEW
        </div>
      </div>

      {/* Right side content */}
      <div className="content w-2/3">
       <div className="grid grid-cols-2 gap-5">
         {/* Input Fields */}
        <div className="ll">
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
        </div>

        {/* Input Fields */}
      <div className="ll">
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
       </div>
      </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mb-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="newImageUpload"
          />
          <label
            htmlFor="newImageUpload"
            className="flex items-center bg-black text-white px-3 py-2 rounded mr-2 cursor-pointer"
          >
            <span className="text-xl mr-1">+</span> Upload New Image
          </label>
          <label
                onClick={() => setDeletingBanner(data)}
                htmlFor="confirmation-modal"
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-6 uppercase py-2 rounded shadow-md"
              >
                Remove
              </label>
          <button
            // onClick={handler}
            className="bg-blue-500  text-white px-6 uppercase py-2 rounded shadow-md"
          >
            Update New
          </button>
        </div>
      </div>
      
      {deletingBanner && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBanner?.title_en}. It cannot be undon`}
          closeModal={cencelModal}
          successAction={handleDeleteSlider}
          successButton={`Delete`}
          modalData={deletingBanner}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default UpdateBanner;
