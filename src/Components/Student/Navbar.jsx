import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const { navigate, isEducator, setIsEducator } = useContext(AppContext);

  return (
    <div
      className={`flex justify-between items-center border-b-3 border-orange-600 sticky top-0 z-5 sm:px-10 px-2 md:px-14 lg:px-32 py-3 ${
        isCourseListPage ? "bg-white" : "bg-gray-400"
      }`}
    >
      <Link to="/">
        <img
          onClick={() => navigate("/")}
          src={assets.studynest_logo}
          alt="Logo"
          className="w-30 lg:w-40 "
        />
      </Link>

      {/* Laptop View */}
      <div className="hidden md:flex items-center gap-5 font-medium text-black  text-xl ">
        <div className="flex items-center gap-1 font-semibold sm:gap-2 max-sm:text-xs ">
          {user && (
            <>
              <button className="cursor-pointer " onClick={()=>{navigate('/educator')}}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              |<Link to="/my-enrollments">My-Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-orange-600  text-white hover:shadow-xl/40 shadow-orange-800 rounded-2xl px-4 py-2 cursor-pointer  hover:bg-orange-500 "
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile View */}

      <div className="md:hidden flex items-center  gap-2 px-2 sm:gap-5 text-black">
        {user && (
          <>
              <button className="cursor-pointer " onClick={()=>{navigate('/educator')}}>
                {isEducator ? "EduDash" : "Become Educator"}
              </button>|<Link to="/my-enrollments">MyEnrolls</Link>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img
              src={assets.user_icon}
              alt="user-logo"
              className="bg-white  rounded-2xl px-4 py-2 cursor-pointer  hover:bg-white-500"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
