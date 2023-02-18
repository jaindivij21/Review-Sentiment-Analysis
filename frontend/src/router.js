import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
