import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Review from "./components/Review";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/review/:id",
    element: <Review />,
  },
]);
