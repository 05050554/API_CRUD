import { useRoutes, Outlet } from "react-router-dom";
import LoginView from "./components/Login/LoginView";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Api1 from "./components/Container/Api1";
import Api2 from "./components/Container/Api2";
import Api3 from "./components/Container/Api3";
import Api4 from "./components/Container/Api4";

export default function RoutersItems() {
  let element = useRoutes([
    {
      element: <LoginView />,
      children: [{ path: "Login", element: <LoginView /> }],
    },

    {
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "Api_1", element: <Api1 /> },
        { path: "Api_2", element: <Api2 /> },
        { path: "Api_3", element: <Api3 /> },
        { path: "Api_4", element: <Api4 /> },
      ],
    },
  ]);
  return element;
}
