import React from 'react'
import { CDN_URL } from '../utility/constant';
const backgroundColor = {
    backgroundColor: 'grey'
}
export const Cart = ({restData}) => {
    const { cloudinaryImageId, name,cuisines, avgRatingString} = restData.data ;
    return (
        <div className="cart" >
            <img className="res-logo" src ={CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            {<h3>{cuisines.join(" ,")}</h3> }
            <h4>{avgRatingString}</h4>
        </div>
    )
}