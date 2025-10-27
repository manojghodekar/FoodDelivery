import React from "react";
import ReactDOM from "react-dom/client";
import AppLayOutComponent  from './comonent/AppLayOut';
import { About } from "./comonent/About";
import { createBrowserRouter, RouterProvider } from "react-router"
import { ContactUs } from "./comonent/ContactUs";
import { Error } from "./comonent/Error";
import { BodyComponent } from "./comonent/BodyComponent";
import { Restaurant } from "./comonent/RestaurantMenu";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)
const appRouter = createBrowserRouter([
    
{
    path : "/",
    element: <AppLayOutComponent></AppLayOutComponent>,
    children : [
        {
            path :"/",
            element:<BodyComponent/>
        },
        {
            path :"/about",
            element:<About></About>
        },
        {
            path :"/contact",
            element:<ContactUs></ContactUs>
        },
        {
            path :"/restaurant/:resId",
            element:<Restaurant/>
        }
    ],
    errorElement : <Error></Error>
}

]
    
)
root.render(<RouterProvider router={appRouter}></RouterProvider>)
