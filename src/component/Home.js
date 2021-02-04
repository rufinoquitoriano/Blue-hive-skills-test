import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/invoice");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <div className="text-6xl font-bold">Blue Hive Test Skills</div>
      <button
        className="w-24 h-10 my-6 bg-gray-300 rounded-xl"
        onClick={handleOnClick}
      >
        start here!
      </button>
    </div>
  );
}

export default Home;
