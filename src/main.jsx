import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./components/about";
import Projects from './components/projects';
import Workexperience from './components/work';
import Education from './components/education';
import Index from '.';

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Index /> 
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/work",
        element: <Workexperience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
