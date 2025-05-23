import { createBrowserRouter } from "react-router";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Forgot } from "../pages/auth/Forgot";
import { Reset } from "../pages/auth/Reset";

import { Protected } from "../pages/main/Protected";
import { Home } from "../pages/main/Home";
import { Search } from "../pages/main/Searchs";
import { Follow } from "../pages/main/Follows";
import { Profile } from "../pages/main/Profiles";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot",
    element: <Forgot />
  },
  {
    path: "/reset",
    element: <Reset />
  },
  {
    Component: Protected,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/follow",
        element: <Follow />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }

]
)