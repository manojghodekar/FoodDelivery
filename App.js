import React from "react";
import ReactDOM from "react-dom/client";
import AppLayOutComponent  from './comonent/AppLayOut';
import { About } from "./comonent/About";
import { createBrowserRouter, RouterProvider } from "react-router"
import { ContactUs } from "./comonent/ContactUs";
import { Error } from "./comonent/Error";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)
const appRouter = createBrowserRouter([
    
{
    path : "/",
    element: <AppLayOutComponent></AppLayOutComponent>,
    errorElement : <Error></Error>
},
{
    path :"/about",
    element:<About></About>
},
{
    path :"/contact",
    element:<ContactUs></ContactUs>
}
]
    
)
root.render(<RouterProvider router={appRouter}></RouterProvider>)
