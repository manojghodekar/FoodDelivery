import React from 'react'
import { resList } from './RestaurantCartContainer'


export const Search = ()=> {
    return (
        <div className="search">
            <button className="filter-button" onClick={filteRestaurant}>Top Rated Resturant</button>
        </div>
    )
    
}