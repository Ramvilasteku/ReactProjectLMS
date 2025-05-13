import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {

  const navigate = useNavigate()
  
  const [input,setInput] = useState(data ? data : '')

const onSearchHandler = (e)=>{
  e.preventDefault()
  navigate('/course-list/' + input)
}

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/50 rounded">
      <img
        src={assets.search_icon}
        alt="search-icon"
        className="md:w-auto w-10 px-3"
      />
      <input onChange={e=>setInput(e.target.value)} value={input}
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-800 placeholder-orange-600 placeholder:font-bold"
      />
      <button
        type="submit"
        className="bg-orange-600 rounded text-white text-lg md:px-10 px-2 md:py-[12.5px] py-[8.5px] hover:bg-orange-600/80  cursor-pointer  "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
