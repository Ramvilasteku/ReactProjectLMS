import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./Pages/PgsStudent/Home";
import CourseList from "./Pages/PgsStudent/CourseList";
import CourseDetails from "./Pages/PgsStudent/CourseDetails";
import MyEnrollments from "./Pages/PgsStudent/MyEnrollments";
import Player from "./Pages/PgsStudent/Player";
import Loading from "./Components/Student/Loading";
import Educator from "./Pages/PgsEducator/Educator";
import Dashboard from "./Pages/PgsEducator/Dashboard";
import AddCourse from "./Pages/PgsEducator/AddCourse";
import MyCourses from "./Pages/PgsEducator/MyCourses";
import StudentsEnrolled from "./Pages/PgsEducator/StudentsEnrolled";
import Navbar from "./Components/Student/Navbar";
import Hero from "./Components/Student/Hero";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-gray-300/20">
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path="/educator" element={<Educator />}>
          <Route path="educator-dash" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
