import React from 'react';
import { FiEdit, FiEye } from 'react-icons/fi';
import img from "../../../assets/services-img/service-img.png"

const updates = [
  {
    img: img, // Replace with actual image URLs
    name: 'Nike v22 Running',
    status: 'PUBLISHED',
    blogName: 'Blog Name',
    projectName: 'Project Name',
  },
  {
    img: img,
    name: 'Business Kit (Mug + Notebook)',
    status: 'DRAFTS',
    blogName: 'Blog Name',
    projectName: 'Project Name',
  },
  {
    img: img,
    name: 'Black Chair',
    status: 'PUBLISHED',
    blogName: 'Blog Name',
    projectName: 'Project Name',
  },
  {
    img: img,
    name: 'Wireless Charger',
    status: 'PUBLISHED',
    blogName: 'Blog Name',
    projectName: 'Project Name',
  },
  {
    img: img,
    name: 'Mountain Trip Kit (Camera + Backpack)',
    status: 'DRAFTS',
    blogName: 'Blog Name',
    projectName: 'Project Name',
  },
];

const RecentUpdateFeed = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg my-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Update Feed</h2>
      
      <div className="grid grid-cols-3 gap-4 text-xs text-gray-500 mb-4">
        <span>RECENT PRODUCT UPDATES</span>
        <span className='w-full text-center'>RECENT BLOG POST</span>
        <span className="">LATEST PROJECT UPDATES</span>
      </div>

      {updates.map((update, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
          {/* Product Information */}
          <div className="flex items-center space-x-4 w-1/3">
            <img src={update.img} alt={update.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-gray-700">{update.name}</p>
              <p className={`text-xs ${update.status === 'PUBLISHED' ? 'text-green-500' : 'text-red-500'}`}>
                {update.status}
              </p>
            </div>
          </div>

          {/* Blog Post */}
          <div className="w-1/3 text-center">
            <p className="text-gray-700">{update.blogName}</p>
            <div className="flex items-center justify-center space-x-2">
              <button className="text-blue-500 flex items-center space-x-1">
                <FiEdit />
                <span>EDIT</span>
              </button>
              <button className="text-blue-500 flex items-center space-x-1">
                <FiEye />
                <span>VIEW</span>
              </button>
            </div>
          </div>

          {/* Project Updates */}
          <div className="w-1/3 text-center">
            <p className="text-gray-700">{update.projectName}</p>
            <div className="flex items-center justify-center space-x-2">
              <button className="text-blue-500 flex items-center space-x-1">
                <FiEdit />
                <span>EDIT</span>
              </button>
              <button className="text-blue-500 flex items-center space-x-1">
                <FiEye />
                <span>VIEW</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdateFeed;
