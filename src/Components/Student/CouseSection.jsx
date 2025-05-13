import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../Context/AppContext";

const CouseSection = () => {
  
  const {allCourses} = useContext(AppContext)
  
  return (
    <div className="py-16 md:px-30 px-8">
      <h1 className="text-3xl font-semibold text-orange-600">Learn from the best</h1>
      <p className="text-sm md:text-base text-gray-800 mt-3 ">
        This are our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="sm:grid md:flex px-4 md:px-0 md:my-10 my-10 gap-4  ">
      {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/> )}
      </div>
      <br />
      <Link to={"/course-list"} onClick={() => scrollTo(0, 0)} className="text-gray-800 font-medium border-orange-600 border-1 px-10 py-1 rounded ">
        Show all courses
      </Link>
    </div>
  );
};

export default CouseSection;
