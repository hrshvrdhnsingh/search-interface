/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";

const Search = ({ results }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen mb-36 outer-search-div">
      <div className="flex justify-center w-7/12 h-full flex-col gap-6 p-1 inner-search-div">
        {results && results.length > 0 ? (
          results.map((imagepost, index) => (
            <div
              className="search-result-container flex flex-col p-2 w-full"
              key={index}
              onClick={() => window.open(imagepost.link, "_blank")}
            >
              <p className="text-xl text-lime-500 search-title">{imagepost.title}</p>
              <Link
                to={imagepost.link}
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                {imagepost.displayLink}
              </Link>
              <p className="text-green-600">{imagepost.snippet}</p>
            </div>
          ))
        ) : (
          <div className=" text-lime-800 text-center text-4xl">
            Failed to show results
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
