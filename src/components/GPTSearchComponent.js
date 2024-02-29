import React from "react";

const GPTSearchComponent = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="bg-black w-1/2 rounded-sm">
        <input
          type="text"
          placeholder="What would you like to see today?"
          className="rounded-sm m-2 p-2 w-[80%]"
        ></input>
        <button className="text-white font-bold bg-red-600 rounded-lg m-2 px-6 py-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchComponent;
