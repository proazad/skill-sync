import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import Errorpage from "../Page/Errorpage/Errorpage";
import Home from "../Page/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Front />,
    errorElement: <Errorpage />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default Router;
