import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './pages/main';
import { ChartPage } from './pages/chart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: '/Chart',
    element: <ChartPage />
  },
  {
    path: '/Main',
    element: <Main />
  },
]);

const App:FC =()=>{
  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
