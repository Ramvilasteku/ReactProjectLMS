import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Student/Loading";
import { assets } from "../../assets/assets";
import humanizerDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  
  // console.log(setCourseData);

  const {
    currency,
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = await allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  });

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <>
      <div className="flex lg:flex-row flex-col-reverse gap-10 relative items-start justify-between  md:px-45 px-8 lg:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-gray-400/90"></div>
        {/* Left Col */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-[36px] text-[24px] font-semibold text-orange-600">
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

          <p className="text-lg">
            Course by{" "}
            <span className="text-orange-500 underline">Ajay Vemula</span>
          </p>

          <div className="pt-8 text-graye-800">
            <h2 className="text-xl font-semibold text-orange-600">
              Course Structure
            </h2>

            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    className=" flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.down_arrow_icon}
                        alt="arrow icon"
                        className={`transform transition-transform ${
                          openSection[index] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection[index] ? "max-h-96" : "max-h-0"
                    } `}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, index) => (
                        <li key={index} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt="play_icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p className="text-orange-600 cursor-pointer">
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizerDuration(
                                  lecture.lectureDuration * 60 * 10000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-10 text-sm md:text">
            <h3 className="text-xl font-semibold text-orange-600">
              Course Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
            ></p>
          </div>
        </div>

        {/* RightCol */}

        <div className="max-w-[420px] z-10 shadow-[0px_2px_30px_2px] shadow-orange-600/45 rounded-t md:rounded-none overflow-hidden min-w-[300px] sm:min-w-[420px]">
          <img src={courseData.courseThumbnail} alt="" />
          <div className="p-5">
            <div className="flex items-center gap-3">
              <img
                className="w-4 h-4"
                src={assets.time_left_clock_icon}
                alt=""
              />
              <p className="text-orange-600">
                <span className="font-medium">6 Days</span> left at this price
              </p>
            </div>

            <div className="flex gap-3 items-center pt-2">
              <p className="text-orange-600 md:text-4xl text-3xl font-semibold">
                {currency}{" "}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {" "}
                {currency} {courseData.coursePrice}{" "}
              </p>
              <p className="md:text-lg text-gray-500">
                {courseData.discount}% off
              </p>
            </div>

            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">

               <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating( courseData)}</p>
              </div>
            <div className="h-4 w-px bg-gray-500/40"></div>

               <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="star icon" />
                <p>{calculateCourseDuration( courseData)}</p>
              </div> 
              
                 <div className="h-4 w-px bg-gray-500/90"></div>

               <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="star icon" />
                <p>{calculateNoOfLectures( courseData)} lessons</p>
              </div>

            </div>

                <button className="">{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Know'}</button>

          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
