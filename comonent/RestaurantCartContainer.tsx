import React from 'react'
import { Cart } from './CartComponet'
import { RestaurantList } from '../utility/mockdata';
import { SWIGGY_API } from '../utility/constant';
import {useState, useEffect} from 'react';
import { Shimmer } from './Shimmer';



export const RestaurantCartContainer = (props) =>{
   const [restList, setRestList]=useState([]);

   useEffect(()=>{
    async function fetchData(){
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
  setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };
   fetchData()}, [])


if(restList.length === 0){
    return <Shimmer></Shimmer>
}
   
const  filteRestaurant =()=> { 
    let filterList = restList.filter((rest)=> rest.info.avgRatingString > 4.5);
    setRestList(filterList);
};

    
    return (
        <>
        <div className="search">
        <button className="filter-button" onClick={filteRestaurant}>Top Rated Resturant</button>
        </div>
        <div className="rest-container">
            { restList.map((rest)=> <Cart  key={rest.info.id} restData={rest}></Cart>)}
        </div>
        </>)
    }