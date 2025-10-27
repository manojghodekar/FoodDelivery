import React from 'react'
import { Cart } from './CartComponet'
import { RestaurantList } from '../utility/mockdata';
import { SWIGGY_API } from '../utility/constant';
import {useState, useEffect} from 'react';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router';



export const RestaurantCartContainer = (props) =>{
   const [restList, setRestList]=useState([]);
   const [filterRestaurant, setFilterRestaurant] = useState([restList])
   const [serachText, setSerachText]= useState("")

   useEffect(()=>{
    async function fetchData(){
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };
   fetchData()})

   
const  filteRestaurantList =()=> { 
    let filterList = restList.filter((rest)=> rest.info.avgRatingString > 4.2);
    setRestList(filterList);
};

const search =()=>{
 const data =restList.filter((rest)=> rest.info.name.toLowerCase().includes(serachText.toLowerCase()) );
 setFilterRestaurant(data);
}

    
    return restList.length === 0 ? <Shimmer/> :  (
        <>
        <div className="search">
            <input type="text" 
            className="search-box" 
            value={serachText} 
            onChange ={
                (e)=> setSerachText(e.target.value)
            }>
            </input>
            <button onClick={search}>Search</button>
        <button 
        className="filter-button" 
        onClick={filteRestaurantList}>Top Rated Resturant</button>
        </div>
        <div className="rest-container">
            { filterRestaurant.map((rest)=> <Link key={rest.info.id} to={"/restaurant/"+rest.info.id}><Cart   restData={rest}></Cart></Link>)}
        </div>
        </>)
    }