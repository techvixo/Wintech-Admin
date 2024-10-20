import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Error from "../Pages/Shared/Error/Error";
import SignIn from "../Pages/Shared/Login/SignIn";
import ForgetPassword from "../Pages/Shared/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EmailVarify from "../Pages/Shared/Login/OTPLogin";
import DashBoard from "../Pages/DashBoard/DashBoard";
import VarificationRoute from "./VarificationRoute/VarificationRoute";
import Settings from "../Pages/Settings/Settings";
import Banners from "../Pages/Banners/Banners";
import Products from "../Pages/Products/Products";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Portfolios from "../Pages/Portfolios/Portfolios";
import Blogs from "../Pages/Blogs/Blogs";
import HomePage from "../Pages/HomePage/HomePage";
import Message from "../Pages/Message/Message";

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
            <Banners></Banners>
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRoute>
           <Portfolios></Portfolios>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
           <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <HomePage></HomePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/message",
        element: (
          <PrivateRoute>
           <Message></Message>
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
           <Settings></Settings>
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
    path: "/email-verify",
    element: <EmailVarify></EmailVarify>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword></ForgetPassword>,
  },
]);

export default router;
