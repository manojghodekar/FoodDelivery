import React from 'react'
import { Cart } from './CartComponet'
import { RestaurantList } from '../utility/mockdata';
import {useState} from 'react';



export const RestaurantCartContainer = (props) =>{
   const [restList, setRestList]=useState(RestaurantList);
   


const  filteRestaurant =()=> { 
    let filterList = restList.filter((rest)=> rest.data.avgRatingString > 4);
    setRestList(filterList);
};
    
    return (
        <>
        <div className="search">
        <button className="filter-button" onClick={filteRestaurant}>Top Rated Resturant</button>
        </div>
        <div className="rest-container">
            { restList.map((rest)=> <Cart  key={rest.data.id } restData={rest}></Cart>)}
        </div>
        </>)
    }