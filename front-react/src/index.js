import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import ErrorPage from "./components/pages/error";
// import AdminPage from './components/pages/admin'
// import LandingPage from './components/pages/land'

// const router = createBrowserRouter([
//   {
//     path: "/app",
//     element: <App />,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/land",
//     element: <LandingPage />,
//   },
//   {
//     path: "/admin",
//     element: <AdminPage />,
//   }
  
// ]);