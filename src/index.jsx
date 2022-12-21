import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter, Router,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Game from "./routes/game";
import Plot_1 from "./routes/plot_1";
import Series from "./routes/plot_card";
import RecipeReviewCard from "./routes/plot_card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
          path: "/Game",
          element: <Game />,
        },
        {
          path: "/Plot",
          element: <RecipeReviewCard />,
        }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);