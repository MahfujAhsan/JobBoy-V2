import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Influencers from "../../Pages/Influencers/Influencers";
import MicroJobs from "../../Pages/MicroJobs/MicroJobs";
import PostAnAd from "../../Pages/PostAnAd/PostAnAd";
import Talents from "../../Pages/Talents/Talents";
import Main from "../AppLayout/Main";

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
        element: <PostAnAd></PostAnAd>,
      },
    ],
  },
]);

export default route;
