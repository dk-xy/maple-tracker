import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import Dashboard from "./routes/Dashboard.jsx";
import Legion from "./routes/Legion/Legion.jsx";

import Checklists from "./routes/Checklists.jsx";
import Root from "./routes/Root.jsx";
import Layout from './Layout.jsx';
import Character from './routes/Legion/Character/Character.jsx';
import EditProgression from './components/CharacterPage/EditProgression.jsx';
import { BrowserRouter } from 'react-router-dom';



// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <App />,
//   // },
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "legion",
//     element: <Legion />,
//   },
//   {
//     path: "character/:characterId",
//     element: <Character />,
//   },
//   {
//     path: "character/:characterId/edit-progression",
//     element: <EditProgression />,
//   },
//   {
//     path: "checklists",
//     element: <Checklists />,
//   },
//   ,
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>




  </React.StrictMode>,
)
