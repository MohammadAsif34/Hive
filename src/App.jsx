import React, { useContext, useState } from "react";
import PostCard from "./components/post/PostCard";
import CreatePost from "./components/post/CreatePost";
import Story from "./components/post/Story";
import Navbar from "./components/navbar/Navbar";
import { posts } from "../rTemprory data/dummy_posts";
import CreatePostCard from "./components/post/CreatePostCard";
import { AppContext } from "../../../appContext/AppContext";
import Profile from "./components/profile/Profile";

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <main className="w-full bg-[#f5fefd] relative">
        <Navbar />
        <div className="w-[500px] max-sm:w-full my-2 mx-auto flex flex-col items-center justify-center">
          {/* Home  */}
          {state === "home" && (
            <div className="py-4 px-2 flex flex-col items-center">
              <CreatePost />
              {posts.map((posts, idx) => (
                // <p></p>
                <PostCard item={posts} key={idx} />
              ))}
            </div>
          )}

          {/* Friends  */}
          {state == "friends" && (
            <div className="py-4">
              <p className="text-center py-10">Friends Component Soon</p>
            </div>
          )}

          {/* Notification  */}
          {state == "notifications" && (
            <div className="py-4">
              <p className="text-center py-10">Notifications Component Soon</p>
            </div>
          )}

          {/* Message  */}
          {state == "message" && (
            <div className="py-4 ">
              <p className="text-center py-10">Message Component add Soon</p>
            </div>
          )}

          {/* profile  */}
          {state == "profile" && (
            <div className="w-full px-2">
              <Profile />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
