import React from "react";
import profileImg from "../../assets/messages/profile.png";

const Message = () => {
  const data = [
    {
      id: 1,
      img: profileImg,
      name: "Peterson",
      msg: "Have a great afternoon..",
    },
    {
      id: 1,
      img: profileImg,
      name: "Peterson",
      msg: "Have a great afternoon..",
    },
    {
      id: 1,
      img: profileImg,
      name: "Peterson",
      msg: "Have a great afternoon..",
    },
    {
      id: 1,
      img: profileImg,
      name: "Peterson",
      msg: "Have a great afternoon..",
    },
    {
      id: 1,
      img: profileImg,
      name: "Peterson",
      msg: "Have a great afternoon..",
    },
  ];
  return (
    <div className="p-5 bg-white rounded-md shadow-md pb-20">
      <h5 className="text-[#344767] border-b pb-3 font-semibold text-lg my-1 capitalize">
        All Messages
      </h5>
      <h5 className="text-[#344767] font-semibold text-lg my-1 capitalize">
      Conversations
      </h5>
      <div className="flex flex-col gap-3">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex items-center gap-2">
              <div className="w-14">
                <img src={item?.img} alt={item?.name} />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-56">
                  <p className="text-[#344767] capitalize font-semibold">
                    {item?.name}
                  </p>
                  <p className="text-[#7B809A] text-sm">{item?.msg}</p>
                </div>
                  <span className="text-[#E91F63] font-semibold cursor-pointer text-sm">REPLY</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Message;
