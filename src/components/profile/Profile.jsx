import React from "react";
import { posts } from "../../../rTemprory data/dummy_posts";
import PostCard from "../post/PostCard";

const Profile = () => {
  return (
    <>
      <div className="w-full p-2 border border-gray-200 rounded-2xl shadow-lg g-red-200">
        <div className="">
          <div className="h-48 bg-pink-100 rounded-md overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-16 px-4 flex">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 -translate-y-1/2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pl-2 text-xs flex-1 flex justify-between items-center ">
              <div>
                <p className="text-lg font-semibold">Name</p>
                <span>{230} Friends</span>
              </div>
              <div>
                <button className="px-2 py-1 bg-blue-400 rounded-md text-white font-semibold mr-3 cursor-pointer">
                  Add story
                </button>
                <button className="px-2 py-1 bg-blue-400 rounded-md text-white font-semibold cursor-pointer">
                  Edit profile
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 max-sm:px-2 text-sm text-gray-600 font-semibold flex-1 flex justify-between items-center border-t border-gray-300 ">
            <div className="flex ">
              <p className="px-4 max-sm:px-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                Posts
              </p>
              <p className="px-4 max-sm:px-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                About
              </p>
              <p className="px-4 max-sm:px-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                Friends
              </p>
              <p className="px-4 max-sm:px-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                Photos
              </p>
              <p className="px-4 max-sm:px-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                More
              </p>
            </div>
            <button className="px-4 max-sm:px-2 py-0.5 mt-2  bg-gray-100 hover:bg-gray-200 rounded-md">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        </div>
      </div>

      {/* {posts.map((post, idx) => (
        <PostCard item={post} key={idx} />
      ))} */}
      <div className="my-2 px-2 py-2 rounded-2xl border border-gray-200 shadow-lg">
        <ul>
          <li>About you</li>
          <li>Name pronounciation</li>
          <li>other names</li>
          <li>Favorite quotes</li>
          <li>Contact info</li>
          <li>Website & Social links</li>
          <li>Basic info</li>
          <li>Work</li>
          <li>University</li>
          <li>School</li>
          <li>Place lived</li>
          <li>Life events</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
