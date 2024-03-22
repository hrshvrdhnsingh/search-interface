/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GrGoogle } from "react-icons/gr";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiImageSquareDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useResultContext } from "./ContextProvider";
import { useDebounce } from "use-debounce";


const Navbar = () => {
  const {searchTerm, setSearchTerm} = useResultContext();
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue);
  } , [debouncedValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="navbar-wrapper flex flex-col justify-start p-2 bg-transparent gap-3 backdrop-blur-sm w-screen mb-3">
      <div className="navbar-container flex justify-between items-center h-full w-8/12">
        <Link to="/home" className="flex gap-2 logo pointer home-icon">
          <GrGoogle className="icon text-lime-600" />{" "}
          <p className="text-4xl font-medium">Vardhan's</p>
        </Link>
        <div className="flex items-center justify-center p-1 w-7/12 outer-navbox">
          <div className="rounded-lg bg-gray-300 p-2 w-full navbox-outer flex justify-center align-center">
            <form className="flex w-full h-full search-container" onSubmit={handleSubmit}>
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5 text-gray-900 search-icon">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full bg-white pl-2 text-xl font-semibold outline-0 text-gray-600"
                placeholder="Search the web "
                value={inputValue}
                id="1" 
                autoComplete="off"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                value="Search"
                className="bg-lime-500 p-2 w-3/12 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-lime-700 text-xl transition-colors"
              >Search</button>
            </form>
          </div>
        </div>
        
      </div>

      <div className="option-container flex p-2 gap-8 w-7/12 justify-center text-xl font-normal">
        <Link
          to="/"
          className="flex gap-1 items-center justify-center hover:bg-lime-900 rounded-lg"
        >
          <button className="flex px-3 py-1">
            <IoSearch className="text-3xl inside-btns" />
            All
          </button>
        </Link>
        <Link
          to="/images"
          className="flex gap-1 items-center justify-center hover:bg-lime-700 rounded-lg"
        >
          <button className="flex px-3 py-1">
            <PiImageSquareDuotone className="text-3xl inside-btns" /> Images
          </button>
        </Link>
        <Link
          to="/news"
          className="flex gap-1 items-center justify-center hover:bg-lime-700 rounded-lg"
        >
          <button className="flex px-3 py-1">
            <HiOutlineNewspaper className="text-3xl inside-btns" />
            News
          </button>
        </Link>
        <Link
          to="/videos"
          className="flex gap-1 items-center justify-center hover:bg-lime-700 rounded-lg"
        >
          <button className="flex px-3 py-1">
            <HiOutlineVideoCamera className="text-3xl inside-btns" />
            Videos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
