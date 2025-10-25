import React from "react"
import { useRouteError } from "react-router"
export const Error = () =>
{
    const error = useRouteError();
    console.log(error)
    return <div><h1>OOPS!!! </h1>
                <h2> Something went wrong ! {error?.data}</h2>    
                </div>
}