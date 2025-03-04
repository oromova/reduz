import { createBrowserRouter } from "react-router-dom";
import Favourites from "./Favourites";
import App from "./App";
import Home from "./Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/favourites", element: <Favourites/> },
    ]

  }
])