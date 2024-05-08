import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Dashboard from "./routes/Dashboard.jsx";
import Legion from "./routes/Legion/Legion.jsx";
import Root from "./routes/Root.jsx";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "legion",
      element: <Legion />,
    },
  ,
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
