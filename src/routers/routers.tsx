import { createBrowserRouter } from "react-router";

// import { AuthProtected } from "@/pages/auth/AuthProtected";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Forgot } from "../pages/auth/Forgot";
import { Reset } from "../pages/auth/Reset";

// import { Protected } from "../pages/main/MainProtected";
import { Home } from "../pages/main/Home";
import { Search } from "../pages/main/Searchs";
import { Follow } from "../pages/main/Follows";
import { Profile } from "../pages/main/Profiles";
import { MainProtected } from "@/components/protected/main";
import { AuthProtected } from "@/components/protected/auth";
import { RegisterProfile } from "@/pages/auth/RegisterProfile";
import { Status } from "@/pages/main/Status";



export const router = createBrowserRouter([
  {
    Component: AuthProtected,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register />},
      { path: "/forgot", element: <Forgot />},
      { path: "/reset", element: <Reset />},
      { path: "/register/profile", element: <RegisterProfile/> },
    ]
  },
  {
    Component: MainProtected,
    children: [
      { path: '/', element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/follow", element: <Follow /> },
      { path: "/profile", element: <Profile />},
      { path: "/status/:id", element: <Status/>}
    ]
  }

])