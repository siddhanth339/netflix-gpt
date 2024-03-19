import { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const userQuery = useRef(null);
  const GPTQuery =
    "Act as a movie recommendation system and suggest movies for the query: " +
    userQuery;
  const handleSearchClick = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="bg-black w-1/2 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like to see today?"
          className="rounded-sm m-2 p-2 w-[80%]"
          ref={userQuery}
        ></input>
        <button
          className="text-white font-bold bg-red-600 rounded-lg m-2 px-6 py-2"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
