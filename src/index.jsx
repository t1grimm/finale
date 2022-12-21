import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Game from "./game";
import Cv from "./curriculum"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
          path: "/Game",
          element: <Game />,
        // },
        // {
        //   path: "/",
        //   element: <Cv />,
        }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);