import React from "react";
import { createRoot } from 'react-dom/client'
import '/src/html/css/style.css';
import MainPage from "./MainPage/MainPage.jsx";
import {createBrowserRouter, Route, RouterProvider} from "react-router";
import '../src/html/css/style.css'
import Catalog from "./Catalog/Catalog.jsx";
import About from "./About/About.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Layout from "./Layout.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><MainPage /></Layout>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/public',
        element: <Layout><MainPage /></Layout>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/catalog',
        element: <Layout><Catalog /></Layout>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/about',
        element: <Layout><About /></Layout>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/contacts',
        element: <Layout><Contacts /></Layout>,
        errorElement: <ErrorPage/>
    },

])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
