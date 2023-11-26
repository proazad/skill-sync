import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import AllClasses from "../Page/AllClasses/AllClasses";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Errorpage from "../Page/Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import InstructorSignup from "../Page/Registraion/InstructorSignup";
import StudentSignup from "../Page/Registraion/StudentSignup";
import InstructorSignin from "../Page/Signin/InstructorSignin";
import Signin from "../Page/Signin/Signin";

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
        element: <CourseDetails />,
      },
      { path: "/instructorSignup", element: <InstructorSignup /> },
      { path: "/signup", element: <StudentSignup /> },
      { path: "/signin", element: <Signin /> },
      { path: "/instructorSignin", element: <InstructorSignin /> },
    ],
  },
]);

export default Router;
