import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Influencers from "../../Pages/Influencers/Influencers";
import MicroJobs from "../../Pages/MicroJobs/MicroJobs";
import PostAnAd from "../../Pages/PostAnAd/PostAnAd";
import SignIn from "../../Pages/Shared/SignIn/SignIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import Talents from "../../Pages/Talents/Talents";
import Main from "../AppLayout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/talents",
        element: <Talents></Talents>,
      },
      {
        path: "/influencers",
        element: <Influencers></Influencers>,
      },
      {
        path: "/micro-jobs",
        element: <MicroJobs></MicroJobs>,
      },
      {
        path: "/post-an-ad",
        element: <PrivateRoute><PostAnAd></PostAnAd></PrivateRoute>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  }
]);

export default route;
