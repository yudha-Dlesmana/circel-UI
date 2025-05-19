import { createBrowserRouter } from "react-router";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Forgot } from "../pages/auth/Forgot";
import { Reset } from "../pages/auth/Reset";

import { Auth } from "../pages/auth/Auth";
import { Protected } from "../pages/main/Protected";
import { Home } from "../pages/main/Home";

export const router = createBrowserRouter([
  {
    Component: Auth,
    children: [
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/register",
        element: <Register />
      },
      {
        path:"/forgot",
        element: <Forgot />
      },
      {
        path:"/reset",
        element: <Reset />
      }
    ]
  },
  {
    Component: Protected,
    children:[
      {
        path: "/home",
        element: <Home />
      }
    ]
  }
    
  ]
)