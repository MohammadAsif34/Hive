import React from "react";

const PostCard = ({ item }) => {
  const post = {
    name: "Lorem",
    picture: "https://randomuser.me/api/portraits/men/7.jpg",
    post_at: "10:25 25 jun 25",
    post_type: "public",
    post_msg:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia veritatis sed.",
    post_img:
      "https://media.vanityfair.com/photos/67ffd081e0c45bae3b27aff2/master/w_2560%2Cc_limit/summer-movies-mission-impossible.jpg",
    like: "99",
    comment: "99",
    share: "99",
  };

  return (
    <div className="w-[500px] max-sm:w-full my-2 bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden flex flex-col">
      {/* user profile section  */}
      <div className=" flex items-center px-3 py-2 border-b border-gray-100">
        <div className="w-10 h-10 border border-gray-400 rounded-full overflow-hidden">
          <img
            src={item?.picture || post.picture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1  px-3 flex justify-between items-center ">
          <div className="text-sm">
            <p className="font-semibold">{item?.name || post.name}</p>
            <p className="text-xs">
              {post.post_at + " • "}
              <i
                className="bi bi-globe-central-south-asia-fill"
                title="public"
              ></i>
            </p>
          </div>
          {/* <span>X</span> */}
        </div>
      </div>

      {/* post details section */}
      <div className="">
        {/* post desc  */}
        <div className="max-h-20 min-h-10 px-6 py-1 text-sm">
          {item?.post_msg.slice(0, 160) || post.post_msg.slice(0, 160)}
          {item?.post_msg.length > 160 ? (
            <>
              <span>....</span>
              <button className="ml-4 text-xs text-gray-400 cursor pointer">
                see more
              </button>
            </>
          ) : (
            ""
          )}
        </div>

        {/* post source  */}
        <div className="h-[400px] border-y-1 border-gray-200 bg-gray-100">
          <img
            src={item?.post_img || post.post_img}
            alt=""
            className="w-full h-full aspect-ration-3/4 object-cover"
          />
        </div>
      </div>

      {/* like comment section  */}
      <div className=" px-5  text-gray-500">
        <div className="py-2 text-sm flex justify-between border-b border-gray-300  cursor-default">
          <p>
            <i className="bi bi-hand-thumbs-up-fill px-3"></i>
            {item?.like || post.like} likes
          </p>
          <p>
            <i className="bi bi-chat pr-1 pl-4"></i>
            {item?.comment || post.comment}
            <i className="bi bi-arrow-90deg-right pr-1 pl-4"></i>
            {item?.share || post.share}
          </p>
        </div>
        <div className="py-1 flex justify-between px-12 max-sm:px-1 font-semibold ">
          <p className="hover:bg-gray-200 px-4 py-0.5 rounded-md cursor-pointer">
            <i className="bi bi-hand-thumbs-up pr-3"></i>like
          </p>
          <p className="hover:bg-gray-200 px-4 py-0.5 rounded-md cursor-pointer">
            <i className="bi bi-chat pr-3"></i>comment
          </p>
          <p className="hover:bg-gray-200 px-4 py-0.5 rounded-md cursor-pointer">
            <i className="bi bi-arrow-90deg-right pr-3"></i>share
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
