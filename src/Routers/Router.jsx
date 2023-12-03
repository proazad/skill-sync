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
import MentorCourseDetails from "../Page/MentorDashboard/MentorCourseDetails";
import MentorDashboard from "../Page/MentorDashboard/MentorDashboard";
import MentorHome from "../Page/MentorDashboard/MentorHome";
import MentorProfile from "../Page/MentorDashboard/MentorProfile";
import UpdateCourse from "../Page/MentorDashboard/UpdateCourse";
import Payment from "../Page/Payment/Payment";
import StudentSignup from "../Page/Registraion/StudentSignup";
import Signin from "../Page/Signin/Signin";
import AssinmentPage from "../Page/StudentDashboard/AssinmentPage";
import MyEnrolledClass from "../Page/StudentDashboard/MyEnrolledClass";
import StudentDashboard from "../Page/StudentDashboard/StudentDashboard";
import StudentHome from "../Page/StudentDashboard/StudentHome";
import StudentProfile from "../Page/StudentDashboard/StudentProfile";
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
        path: "/course/pay/:id",
        element: <Payment />,
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
          {
            path: "/dashboard/student/profile",
            element: <StudentProfile />,
          },
          {
            path: "/dashboard/student/course",
            element: <MyEnrolledClass />,
          },
          {
            path: "/dashboard/student/myenroll-class/:id",
            element: <AssinmentPage />,
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
      { path: "/instructor/home", element: <MentorProfile /> },
      { path: "/instructor/course", element: <InstructorAllCourse /> },
      { path: "/instructor/newcourse", element: <AddNewCourse /> },
      { path: "/instructor/course/:id", element: <UpdateCourse /> },
      {
        path: "/instructor/course/details/:id",
        element: <MentorCourseDetails />,
      },
    ],
  },
]);

export default Router;
