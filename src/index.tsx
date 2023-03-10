import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Overview from './Overview';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routesObj = {
  element: <App />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "education",
        element: <Education />,
      },
    ],
}

const router = createBrowserRouter([
  {
    path: "/",
    ...routesObj
  },
  {
    path: "/overview",
    ...routesObj
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
