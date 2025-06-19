import React, { useContext, useState } from "react";
import CreatePostCard from "./CreatePostCard";
import { AppContext } from "../../../../../appContext/AppContext";
const img = "https://randomuser.me/api/portraits/men/3.jpg";
const CreatePost = () => {
  const { postCreate, setPostCreate } = useContext(AppContext);

  return (
    <div className="w-[500px] max-sm:w-full my-2 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <div className="px-6 pt-3 pb-1 flex">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1  px-4 ">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-9 px-8 border-2 border-gray-200 rounded-full text-md text-gray-400 before:outline-green-300 "
            placeholder="search"
          />
        </div>
      </div>
      <div className="px-8 py-1 bg-pink-2000 flex justify-between ">
        <p className="px-4 py-1 rounded-md hover:bg-gray-200 cursor-pointer">
          Video
        </p>
        <p
          className="px-4 py-1 rounded-md hover:bg-gray-200 cursor-pointer"
          onClick={() => setPostCreate(!postCreate)}
        >
          Photo
        </p>
        <p className="px-4 py-1 rounded-md hover:bg-gray-200 cursor-pointer">
          Article
        </p>
      </div>
      {postCreate && <CreatePostCard />}
    </div>
  );
};

export default CreatePost;
