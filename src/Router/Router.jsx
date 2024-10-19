import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/Shared/Login/SignIn";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import ForgetPassword from "../Pages/Shared/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EmailVarify from "../Pages/Shared/Login/OTPLogin";
import DashBoard from "../Pages/DashBoard/DashBoard";
import VarificationRoute from "./VarificationRoute/VarificationRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: (
          <VarificationRoute>
            <DashBoard></DashBoard>
          </VarificationRoute>
        ),
      },
      {
        path: "/banner",
        element: (
          <PrivateRoute>
            <p>Banner</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <p>Product</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <p>About</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRoute>
            <p>portfolio</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <p>Blog</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <p>home</p>
          </PrivateRoute>
        ),
      },
      {
        path: "/message",
        element: (
          <PrivateRoute>
            <p>message</p>
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/banner",
  //   element: <PrivateRoute><BannerLayout></BannerLayout></PrivateRoute>,
  //   children: [
  //     {
  //       path: "/banner",
  //       element: <Banner></Banner>
  //     },
  //     {
  //       path: "/banner/about",
  //       element: <AboutBanner></AboutBanner>
  //     },
  //     {
  //       path: "/banner/portfolio",
  //       element: <Portfolio></Portfolio>
  //     },

  //   ]
  // },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "/email-verify",
    element: <EmailVarify></EmailVarify>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword></ForgetPassword>,
  },
]);

export default router;
