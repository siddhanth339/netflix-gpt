import { backgroundImg } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTSearchResults";

const GPTSearchComponent = () => {
  return (
    <>
      <img
        className="absolute -z-10"
        src={backgroundImg}
        alt="backgroundImg"
      ></img>
      <GPTSearchBar></GPTSearchBar>
      <GPTSearchResults></GPTSearchResults>
    </>
  );
};

export default GPTSearchComponent;
