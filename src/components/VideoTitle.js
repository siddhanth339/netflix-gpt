import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video p-11 text-white absolute bg-gradient-to-r from-black">
      <div className="pt-[20%]">
        <h1 className="font-bold text-6xl mt-20">{title}</h1>
        <p className="w-2/3 mt-4">{overview}</p>
        <div className="mt-2">
          <button className="bg-white text-black rounded-sm px-3 py-2 m-2 w-32 hover:bg-opacity-[60%]">
            ▶ Play
          </button>
          <button className="bg-gray-500 bg-opacity-[80%] rounded-sm px-3 py-2 m-2 cursor-pointer w-32 hover:bg-opacity-[60%]">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
