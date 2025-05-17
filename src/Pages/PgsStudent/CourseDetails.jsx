import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState();

  // console.log(setCourseData);

  const { allCourses, calculateRating, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = await allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  });

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-gray-400/90"></div>
        {/* Left Col */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-[36px] text-[24px] font-semibold text-gray-800">
            {courseData.courseTitle}{" "}
          </h1>
          <p
            className="pt-4 md:text-base  text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="rating-icon"
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-gray-600">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "Ratings" : "Rating"})
            </p>

            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "Students" : "Student"}
            </p>
          </div>

          <p className="text-lg">Course by <span className="text-orange-500 underline">Ajay Vemula</span></p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>

          </div>
        </div>

        {/* RightCol */}

        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
