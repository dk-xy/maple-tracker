import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
// import App from './App.jsx'
import Dashboard from "./routes/Dashboard.jsx";
import Legion from "./routes/Legion/Legion.jsx";
import Checklists from "./routes/Checklists.jsx";
import Root from "./routes/Root.jsx";
import Layout from './Layout.jsx';


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
  {
    path: "checklists",
    element: <Checklists />,
  },
  ,
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
