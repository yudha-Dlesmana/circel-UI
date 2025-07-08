import { createBrowserRouter } from "react-router";

import { AuthProtected } from "@/components/protected/auth";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Forgot } from "../pages/auth/Forgot";
import { Reset } from "../pages/auth/Reset";

import { MainProtected } from "@/components/protected/main";
import { Home } from "../pages/main/Home";
import { Search } from "../pages/main/Searchs";
import { Follow } from "../pages/main/Follows";
import { Profile } from "../pages/main/Profiles";
import { Tweet } from "@/pages/main/Tweet";



export const router = createBrowserRouter([
  {
    Component: AuthProtected,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register />},
      { path: "/forgot", element: <Forgot />},
      { path: "/reset/:token", element: <Reset />}, 
    ]
  },
  {
      Component: MainProtected,
      children: [
      { path: '/', element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/follow", element: <Follow /> },
      { path: "/profile/:username?", element: <Profile />},
      { path: "/status/:id", element: <Tweet/>},
    ]
  }

])