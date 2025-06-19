import React, { useContext } from "react";
import { AppContext } from "../../../../../appContext/AppContext";

const Navbar = () => {
  const { setState } = useContext(AppContext);
  return (
    <div className="w-full max-sm:px-4 bg-cyan-100 flex items-center  text-gray-600 sticky top-0 left-0 shadow-mdx`">
      <div className="w-[500px] py-2 pr-4 mx-auto flex justify-between text-xl">
        <p
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setState("home")}
        >
          <i className="bi bi-house-fill"></i>
          <span className="text-xs mt-[-5px]">Home</span>
        </p>
        <p
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setState("friends")}
        >
          <i className="bi bi-people-fill"></i>
          <span className="text-xs mt-[-5px]">Friends</span>
        </p>
        <p
          className="flex flex-col items-center  cursor-pointer"
          onClick={() => setState("notifications")}
        >
          <i className="bi bi-bell-fill"></i>
          <span className="text-xs mt-[-5px]">Notifications</span>
        </p>
        <p
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setState("message")}
        >
          <i className="bi bi-chat-dots-fill"></i>
          <span className="text-xs mt-[-5px]">Message</span>
        </p>
        <p
          className="flex flex-col items-center  cursor-pointer"
          onClick={() => setState("profile")}
        >
          <i className="bi bi-person-fill"></i>
          <span className="text-xs mt-[-5px]">Profiile</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
