import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import AllClasses from "../Page/AllClasses/AllClasses";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Errorpage from "../Page/Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import Signup from "../Page/Registraion/Signup/Signup";
import Signin from "../Page/Signin/Signin";
import TeachOnSkillSync from "../Page/TeachOnSkillSync/TeachOnSkillSync";

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
      { path: "/teachonskillsync", element: <TeachOnSkillSync /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

export default Router;
