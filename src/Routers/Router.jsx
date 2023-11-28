import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import AdminDashboard from "../Page/AdminDashboard/AdminDashboard";
import Course from "../Page/AdminDashboard/Course/Course";
import StudentDetails from "../Page/AdminDashboard/Students/StudentDetails";
import Students from "../Page/AdminDashboard/Students/Students";
import AllClasses from "../Page/AllClasses/AllClasses";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Errorpage from "../Page/Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import InstructorSignup from "../Page/Registraion/InstructorSignup";
import StudentSignup from "../Page/Registraion/StudentSignup";
import InstructorSignin from "../Page/Signin/InstructorSignin";
import Signin from "../Page/Signin/Signin";
import StudentDashboard from "../Page/StudentDashboard/StudentDashboard";
import TeachOnSkillSync from "../Page/TeachOnSkillSync/TeachOnSkillSync";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import TeacherRequest from "../Page/AdminDashboard/TeacherRequest/TeacherRequest";
import Instructors from "../Page/AdminDashboard/Instructors/Instructors";
import CourseRequest from "../Page/AdminDashboard/Course/CourseRequest";
import MentorDashboard from "../Page/MentorDashboard/MentorDashboard";
import MentorHome from "../Page/MentorDashboard/MentorHome";
import InstructorAllCourse from "../Page/MentorDashboard/InstructorAllCourse";
import AddNewCourse from "../Page/MentorDashboard/AddNewCourse";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Front />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/allclasses", element: <AllClasses /> },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/student",
        element: (
          <PrivateRoute>
            <StudentDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/teachonskillsync",
        element: (
          <PrivateRoute>
            <TeachOnSkillSync />
          </PrivateRoute>
        ),
      },
      { path: "/signup", element: <StudentSignup /> },
      { path: "/signin", element: <Signin /> },
      { path: "/instructorSignup", element: <InstructorSignup /> },
      { path: "/instructorSignin", element: <InstructorSignin /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin/instructorrequest",
        element: <TeacherRequest />,
      },
      {
        path: "/admin/student",
        element: <Students />,
      },
      {
        path: "/admin/student/:id",
        element: <StudentDetails />,
      },
      {
        path: "/admin/instructor",
        element: <Instructors />,
      },
      {
        path: "/admin/course",
        element: <Course />,
      },
      {
        path: "/admin/courserequest",
        element: <CourseRequest />,
      },
    ],
  },
  {
    path: "/instructor",
    element: <MentorDashboard />,
    children: [
      { path: "/instructor", element: <MentorHome /> },
      { path: "/instructor/course", element: <InstructorAllCourse /> },
      { path: "/instructor/newcourse", element: <AddNewCourse /> },
    ],
  },
]);

export default Router;
