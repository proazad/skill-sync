import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import AdminDashboard from "../Page/AdminDashboard/AdminDashboard";
import AdminProfile from "../Page/AdminDashboard/AdminProfile";
import AllUsers from "../Page/AdminDashboard/AllUsers";
import Course from "../Page/AdminDashboard/Course/Course";
import CourseRequest from "../Page/AdminDashboard/Course/CourseRequest";
import DetailsCourse from "../Page/AdminDashboard/Course/DetailsCourse";
import Instructors from "../Page/AdminDashboard/Instructors/Instructors";
import StudentDetails from "../Page/AdminDashboard/Students/StudentDetails";
import Students from "../Page/AdminDashboard/Students/Students";
import TeacherRequest from "../Page/AdminDashboard/TeacherRequest/TeacherRequest";
import AllClasses from "../Page/AllClasses/AllClasses";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Errorpage from "../Page/Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import AddNewCourse from "../Page/MentorDashboard/AddNewCourse";
import InstructorAllCourse from "../Page/MentorDashboard/InstructorAllCourse";
import MentorDashboard from "../Page/MentorDashboard/MentorDashboard";
import MentorHome from "../Page/MentorDashboard/MentorHome";
import UpdateCourse from "../Page/MentorDashboard/UpdateCourse";
import StudentSignup from "../Page/Registraion/StudentSignup";
import Signin from "../Page/Signin/Signin";
import StudentDashboard from "../Page/StudentDashboard/StudentDashboard";
import StudentHome from "../Page/StudentDashboard/StudentHome";
import TeachOnSkillSync from "../Page/TeachOnSkillSync/TeachOnSkillSync";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

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
        children: [
          {
            path: "/dashboard/student",
            element: <StudentHome />,
          },
        ],
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
        path: "/admin/prifile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/users",
        element: <AllUsers />,
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
        path: "/admin/course/:id",
        element: <DetailsCourse />,
      },
      {
        path: "/admin/courserequest",
        element: <CourseRequest />,
      },
    ],
  },
  {
    path: "/instructor",
    element: (
      <InstructorRoute>
        <MentorDashboard />
      </InstructorRoute>
    ),
    children: [
      { path: "/instructor", element: <MentorHome /> },
      { path: "/instructor/course", element: <InstructorAllCourse /> },
      { path: "/instructor/newcourse", element: <AddNewCourse /> },
      { path: "/instructor/course/:id", element: <UpdateCourse /> },
    ],
  },
]);

export default Router;
