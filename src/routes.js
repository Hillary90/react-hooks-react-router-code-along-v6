import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "../components/NavBar";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement:<ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement:<ErrorPage />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement:<ErrorPage />
  }
])

export default router;