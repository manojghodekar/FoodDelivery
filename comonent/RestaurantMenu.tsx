import React, { useEffect, useState } from "react"
import { REST_MENU_RESPONCE } from "../utility/RestaurantMenuMock";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
export const Restaurant =(rest)=>{
const restResponse= REST_MENU_RESPONCE;
const[restData, setRestData] = useState(null);
 const param = useParams()
 console.log(param);

   useEffect(()=>{
    async function fetchData(){
    const data =restResponse ;
    setRestData(data);
    console.log(restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
   };
   fetchData()})
 
if (restData === null) return <Shimmer></Shimmer>


const {name, cuisines,costForTwoMessage } = restData?.data?.cards[2]?.card?.card?.info;
const { itemCards } = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
itemCards.map((item) => {
   console.log(item.card.info.name)
})

 return (<div className="menu">

    <h1>{name} </h1>
    <p>{cuisines.join(",")}-{costForTwoMessage}</p>
    <ul>
    {itemCards.map((item)=>(
   <li key={item.card.info.id}> {item.card.info.name} - Rs {item.card.info.price || item.card.info.defaultPrice  }</li>
    ))}
    </ul>
  
    
 
 </div>)
}
