import React, { useContext } from "react";
import { AppContext } from "../../../appContext/AppContext";
const img =
  "https://media.vanityfair.com/photos/67ffd081e0c45bae3b27aff2/master/w_2560%2Cc_limit/summer-movies-mission-impossible.jpg";

const CreatePostCard = () => {
  const { postCreate, setPostCreate } = useContext(AppContext);
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/60 overflow-hidden ">
      <div className="w-[500px] h-[600px] bg-white mx-auto mt-[60px] rounded-xl ">
        <div className="h-12  relative border-b-2 border-gray-400">
          <p className="py-2 text-center text-md font-bold">Create Post</p>
          <span
            className="absolute top-2 right-3 bg-gray-300 px-1 rounded-full cursor-pointer"
            onClick={() => setPostCreate(!postCreate)}
          >
            <i className="bi bi-x-lg "></i>
          </span>
        </div>

        <div className="h-[calc(100%-110px)] overflow-y-auto">
          <div className="min-h-20">
            <textarea className="w-full min-h-20 max-h-full px-3 resize-n2one" />
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="h-16 flex items-center justify-between px-4 border-t-2 border-gray-400">
          <div className="text-2xl px-4">
            <span className="cursor-pointer mr-8">
              <i className="bi bi-image-fill"></i>
            </span>
            <span className="cursor-pointer mr-8">
              <i className="bi bi-file-earmark-text-fill"></i>
            </span>
            <span className="cursor-pointer mr-8">
              <i className="bi bi-plus-lg "></i>
            </span>
          </div>
          <button className="px-4 py-1 bg-cyan-100 rounded-full text-gray-600 font-bold cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
